export const insertHtml = (targetElement, htmlContent, insertPosition = 'beforeend') => {
  if (!targetElement) {
    throw new Error('Target element is null or undefined');
  }

  if (insertPosition === 'replace' || !targetElement.insertAdjacentHTML) {
    targetElement.innerHTML = htmlContent;
  } else {
    targetElement.insertAdjacentHTML(insertPosition, htmlContent);
  }

  return targetElement;
}

export const insertText = (element, content, position = 'beforeend') => {
  if (!element) {
    throw new Error('Element is null or undefined');
  }

  const newContent = (element.textContent || '') + (content || '');

  if (position === 'replace' || !element.insertAdjacentText) {
    element.textContent = content;
  } else {
    element.insertAdjacentText(position, content);
  }

  return element;
}

export const insertElement = (target, element, position = 'beforeend') => {
  if (!target || !element) {
    throw new Error('Target or element is null or undefined');
  }

  if (position === 'replace') {
    while (target.firstChild) {  
      target.removeChild(target.firstChild);
    }  
  }

  if (target.insertAdjacentElement) {
    target.insertAdjacentElement(position, element);
  } else {
    target.appendChild(element);
  }

  return target;
}


/**
 * Inserts HTML content into an element at the specified position.
 *
 * @param {Element} target - The element to insert the HTML into.
 * @param {string|Element|NodeList} content - The HTML content to insert. Can be a string, an Element, or a NodeList.
 * @param {string} [position='beforeend'] - The position to insert the content. Defaults to 'beforeend'.
 * @returns {Element} The target element with the content inserted.
 * @throws {Error} If the target is null or undefined.
 * @throws {Error} If the content is not a string, an Element, or a NodeList.
 */
export const insert = (target, content, position = 'beforeend') => {
  if (!target) {
    throw new Error('Target element is null or undefined');
  }

  if (content && typeof content === 'string') {
    const isHtmlString = content.trimStart().startsWith('<');
    if (isHtmlString) {
      insertHtml(target, content, position);
    } else {
      insertText(target, content, position);
    }
  } else if (content instanceof Element) {
    insertElement(target, content, position);
  } else if (content instanceof NodeList) {
    target.append(...Array.from(content));
  } else {
    throw new Error('Content is not a string, Element, or NodeList');
  }

  return target;
};

/**
 * Creates a new DOM element with the given name and attributes.
 *
 * @param {string} name - The name of the DOM element to create.
 * @param {Object} [attributes={}] - The attributes to set on the created element.
 * @param {Document} [doc=document] - The document to use to create the element.
 * @returns {Element} The new DOM element.
 * @throws {TypeError} If name is not a non-empty string.
 */
export const createEelement = (name, attributes = {}, doc = document) => {
  if (typeof name !== "string" || !name) {
    throw new TypeError(
      "Invalid arguments: name must be a non-empty Dom string"
    );
  }

  const el = doc.createElement(name);

  // Set attributes on the element
  for (const key in attributes) {
    const value = attributes[key];

    if(key === "appendEle") {
      $e(value).insert(el);
      continue;
    }

    if(key === "content" || key === 'children') {
      insert(el, value);
      continue;
    }

    // if (key === "text") {
    //   el.insertAdjacentText("beforeend", value || "");
    //   continue;
    // }
    // if (key === "html") {
    //   el.insertAdjacentHTML("beforeend", value || "");
    //   continue;
    // }
    // if (key === "elements") {
    //   el.append(...[].concat(value));
    //   continue;
    // }

    if (key.startsWith("on") && typeof value === "function") {
      bindEvents(el, key.slice(2), value);
      continue;
    }
    el.setAttribute(key, value);
  }

  return $e(el);
};

/**
 * Add an event listener to a DOM element.
 *
 * @param {Element} element - The element to add the event listener to.
 * @param {string} eventName - The name of the event to listen for.
 * @param {function} handler - The function to call when the event is fired.
 * @param {Object} [options] - Options to pass to addEventListener.
 * @param {AbortSignal} [options.signal] - An AbortSignal to abort the listener.
 * @returns {AbortController} An AbortController for aborting the listener.
 */
export const addEventListener = (element, eventName, handler, options = {}) => {
  if (!element?.addEventListener) {
    throw new Error(
      `event bind failed: Element "${String(element?.nodeName)}" not found`
    );
  }

  if (!eventName) {
    throw new Error(`event bind failed: eventName is missing`);
  }

  if (!handler) {
    throw new Error(`event bind failed: handler is missing`);
  }

  const abortController = new AbortController();
  const listener = (event) => {
    try {
      handler(event);
    } catch (error) {
      console.error(error);
    }
  };
  // Remove the old listener before adding the new one to prevent multiple handlers.
  element.removeEventListener(eventName, listener, {
    signal: abortController.signal,
    ...options,
  });

  element.addEventListener(eventName, listener, {
    signal: abortController.signal,
    ...options,
  });

  return abortController;
};

/**
+ * Add multiple event listeners to elements.
+ *
+ * @param {Element|string|NodeList} selectorOrElement - The element or selector to add the event listener to.
+ * @param {string} eventName - The name of the event to listen for.
+ * @param {function} handler - The function to call when the event is fired.
+ * @param {Object} [options] - Options to pass to addEventListener.
+ * @param {AbortSignal} [options.signal] - An AbortSignal to abort the listener.
+ * @returns {() => void} A function to abort all the listeners.
+ */
export const bindEvents = (
  selectorOrElement,
  eventName,
  handler,
  options = {}
) => {
  if (!selectorOrElement) {
    throw new Error(
      `bindEvents failed: selectorOrElement is missing or not a truthy value.`
    );
  }

  if (!eventName) {
    throw new Error(`bindEvents failed: eventName is missing`);
  }

  if (!handler) {
    throw new Error(`bindEvents failed: handler is missing`);
  }

  const elements = Array.from(
    typeof selectorOrElement === "string"
      ? document.querySelectorAll(selectorOrElement)
      : selectorOrElement instanceof NodeList
      ? selectorOrElement
      : [selectorOrElement]
  );
  const controllers = elements.map((element, index) => {
    if (element.dataset) {
      element.dataset.index = index;
    }
    return addEventListener(element, eventName, handler, options)
  });

  return (reason) =>
    controllers.forEach((controller) => controller.abort(reason));
};

const events = {};

export const removeEvents = (eventName, single) => {
  const singleEvents = events[eventName] || [];
  const index = singleEvents.findIndex(({options}) => single === options.single);
  singleEvents.splice(index, 1);
}

/**
+ * Add multiple event listeners to elements.
+ *
+ * @param {Element|string|NodeList} selectorOrElement - The element or selector to add the event listener to.
+ * @param {string} eventName - The name of the event to listen for.
+ * @param {function} handler - The function to call when the event is fired.
+ * @param {Object} [options] - Options to pass to addEventListener.
+ * @param {AbortSignal} [options.signal] - An AbortSignal to abort the listener.
+ * @returns {() => void} A function to abort all the listeners.
+ */
export const delegateEvents = (
  selectorOrElement,
  eventName,
  handler,
  { delegateEle = document, preventBubbling, ...options } = {}
) => {
  if (!selectorOrElement) {
    throw new Error(
      `bindEvents failed: selectorOrElement is missing or not a truthy value.`
    );
  }

  if (!eventName) {
    throw new Error(`bindEvents failed: eventName is missing`);
  }

  if (!handler) {
    throw new Error(`bindEvents failed: handler is missing`);
  }
  
  if (!events[eventName]) {
    events[eventName] = [];
    addEventListener(delegateEle, eventName, (event) => {
      const handledIndex = [];
      event.composedPath().some((element) => events[event.type]?.forEach(({ handler, selectorOrElement, options }, i) => {
        if (handledIndex.includes(i)) return;
        let targets = $e(selectorOrElement, event.currentTarget);
        targets = !targets ? [] : targets.length ? targets: [targets];
        for (let index = 0; index < targets.length; index++) {
          const target = targets[index];
          if (element === target) {
            handler(event, {...options, index, target});
            handledIndex.push(i);
            break;
          }
        }
      })
    );
    }, options);
  }
  events[eventName].push({
    selectorOrElement,
    eventName,
    handler,
    options,
  });
  return removeEvents;
};


/**
 * Set an element as draggable.
 *
 * @param {string|Element|NodeList} selector - The selector of the element to make draggable.
 *
 * @example
 * drag('.myDraggableElement'); // Make all elements with class 'myDraggableElement' draggable.
 * drag(document.getElementById('myElement')); // Make the element with id 'myElement' draggable.
 */
export const drag = (selector, isLeftBound = true, isTopBound = true) => {
  const element = $e(selector);
  element.setAttribute('draggable', true); // Make the element draggable.
  
  // Store the initial position of the element.
  let startX = 0;
  let startY = 0;
  let initialLeft = Number(getComputedStyle(element).left.replace('px', '')) || 0;
  let initialRight = Number(getComputedStyle(element).right.replace('px', '')) || 0;
  let initialTop = Number(getComputedStyle(element).top.replace('px', '')) || 0;
  let initialBottom = Number(getComputedStyle(element).bottom.replace('px', '')) || 0;

  // Set the event handler for the dragstart event.
  bindEvents(element, 'dragstart', (event) => {
    startX = event.clientX; // Store the x-coordinate of the mouse cursor at the start of the drag.
    startY = event.clientY; // Store the y-coordinate of the mouse cursor at the start of the drag.
  });

  // Set the event handler for the dragend event.
  bindEvents(element, 'dragend', (event) => {
    const xDiff = event.clientX - startX;
    const yDiff = event.clientY - startY;
    if (isLeftBound) {
      element.style.left = `${initialLeft += xDiff}px`;
    } else {
      element.style.right = `${initialRight -= xDiff}px`;
    }

    if (isTopBound) {
      element.style.top = `${initialTop += yDiff}px`;
    } else {
      element.style.bottom = `${initialBottom -= yDiff}px`;
    }
  });
}

export const parentEle = (selector, parentSelector) => {
  if (typeof selector === 'string') {
    return $(selector).parent(parentSelector);
  }
  let element = selector; 
  let arr =  typeof parentSelector ===  'object' ? Object.entries(parentSelector)[0] : [];
  if (typeof parentSelector === 'string' ) {
    const selector = parentSelector.split(' ').pop();
    if (selector.startsWith('#')) {
      arr = ['id', selector.slice(1)];
    }
    if (selector.startsWith('.')) {
      arr = ['class', selector.slice(1)];
    }
  }
  const [key, value] = arr;
  while (key && value && element.getAttribute(key) !== value && element.nodeName !== 'BODY') {
    element = element.parentElement;
  }
  return element;
}

export const getAttribute = () => {};

export const styles = (ele, styleObj = {}) => {
  const elements = !ele ? [] : ele.length ? ele : [ele];
  elements.forEach((element) => {
    Object.keys(styleObj).forEach((key) => {
      element.style[key] = styleObj[key];
    })
  })
}

export function $e(selector, doc = document) {
  const elements = typeof selector === 'string'
    ? doc.querySelectorAll(selector)
    : selector;
  if (!elements || (elements instanceof NodeList && !elements.length)) {
    console.warn(`Element "${selector}" not found`);
    return null;
  }

  const element = elements.length > 1 ? elements : (elements[0] || elements);
  element.insert = (html, position) => insert(element, html, position);
  element.replace = (html) => insert(element, html, 'replace');
  element.createShadowRoot = (...params) => {
    const shadowRoot = element.shadowRoot || element.attachShadow({ mode: 'open' });
    return insert(shadowRoot, ...params);
  }

  element.find = (selector) => $e(selector, element);
 
  element.styles = (styleObj) => styles(element, styleObj);
  element.hide = () => element.style.display = 'none';
  element.show = (display = 'block') => element.style.display = display;

  element.bindEvents = (...params) => {
    return bindEvents(element, ...params);
  }

  element.parent = (parentSelector) => {
    return parentEle(element, parentSelector);
  }

  element.appendTo = (selector) => {
    insert($e(selector), element);
    return element;
  }

  /**
   * Appends one or more nodes to the current element.
   *
   * @param {...Node|NodeList|HTMLCollection} params - The nodes to append.
   * @return {Element} The current element with the appended nodes.
   */
  element.appends = (...params) => {
    element.append(...[].concat(...params));
    return element;
  };

  /**
   * Append shadow DOM to the element.
   *
   * @param {...string|Node|NodeList|HTMLCollection} params - The nodes to append.
   * @return {Node} Returns the shadowRoot.
   */
  element.createShadowRoot = (...params) => {
    const shadowRoot = element.shadowRoot || element.attachShadow({ mode: 'open' });
    return insert(shadowRoot, ...params);
  }

  return element;
}
