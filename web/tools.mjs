function fallbackCopyTextToClipboard(text) {  
    // Create a temporary textarea element  
    const textArea = document.createElement('textarea');  
    textArea.value = text;  
    document.body.appendChild(textArea);  
    textArea.select(); // Select the text  
    
    // Use execCommand as a fallback method  
    try {  
        document.execCommand('copy'); // Attempt to copy
    } catch (err) {  
        console.error('Fallback copy failed: ', err);  
        console.log( 'Failed to copy text with fallback.');  
    } finally {  
        // Clean up  
        document.body.removeChild(textArea);  
    }  
}

export const copy = async (content, type) => {
    if (typeof content === 'string') {
        try {  
            // Ensure the document is focused  
            // Attempt to write text to the clipboard 
            await navigator.clipboard.writeText(content);
        } catch (error) {  
            console.error('Failed to copy: ', error);  
            // Fallback method if Clipboard API fails  
            fallbackCopyTextToClipboard(content);
        }
    } 
    
}