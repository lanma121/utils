
const $e = (selector) => {
  const elements = typeof selector === 'string'
    ? document.querySelectorAll(selector)
    : selector;

  if (!elements || !elements.length) {
    throw new Error(`Element "${selector}" not found`);
  }

  return elements.length > 1 ? elements : (elements[0] || elements);
}

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

    if (key === "text") {
      el.insertAdjacentText("beforeend", value || "");
      continue;
    }
    if (key === "html") {
      el.insertAdjacentHTML("beforeend", value || "");
      continue;
    }
    if (key === "elements") {
      el.append(...[].concat(value));
      continue;
    }

    if (key.startsWith("on") && typeof value === "function") {
      bindEvent(el, key.slice(2), value);
      continue;
    }
    el.setAttribute(key, value);
  }

  el.appends = (...params) => {
    el.append(...[].concat(...params));
    return el;
  };

  return el;
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
      console.error(
        `error handling event "${event}"`,
        new Error().stack,
        error
      );
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
  const controllers = elements.map((element) =>
    addEventListener(element, eventName, handler, options)
  );

  return (reason) =>
    controllers.forEach((controller) => controller.abort(reason));
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
