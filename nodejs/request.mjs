import fetch from 'node-fetch';
import { Readable } from 'stream'; // Import for Node.js < 18  
import { finished } from 'stream/promises';  //For cleanup  
import { TextDecoder } from 'util'; // Native in browsers, needs import in Node.js  

export * from '../web/request.mjs';

async function parseEventStream(reader, onEvent, onError, onClose) {  
    try {  
        const datas = [];
        const textDecoder = new TextDecoder();  
        let partialData = ""; // Buffer for incomplete events  
        //Helper function to convert async iterator to Readable Stream  
        async function* streamAsyncIterator(reader) {  
            try {  
                while (true) {  
                    const { done, value } = await reader.read();  
                    if (done) {  
                        return;  
                    }  
                    yield value;  
                }  
            } finally {  
                reader.releaseLock(); // Ensure the reader is released  
            }  
        }  

        const stream = Readable.from(streamAsyncIterator(reader));

        stream.on('data', (chunk) => {  
            const textChunk = textDecoder.decode(chunk);  
            partialData += textChunk;  
            //SSE-specific splitting (e.g., events separated by \n\n)  
            const events = partialData.split('\n\n'); // Adjust delimiter if needed  
            partialData = events.pop() || ""; // Store the last (potentially incomplete) event  
            for (const event of events) {  
                if (event.trim() === "") continue;  // Skip empty events  
                try {
                    // Parse event data (e.g., JSON) - adjust parsing as needed  
                    const parsedEvent = JSON.parse(event); // Assuming JSON events
                    datas.push(parsedEvent);
                    if (typeof onEvent === 'function') {// Callback for processing the event
                      onEvent(parsedEvent);
                    }
                } catch (parseError) {
                    if (typeof onError === 'function') {
                      onError(new Error(`Error parsing event: ${parseError.message}, Event data: ${event}`));  
                    }
                }  
            }  
        });  

        stream.on('error', (error) => {  
            console.error("Stream error:", error);  
            if (typeof onError === 'function') {
              onError(error);
            }
        });  

        stream.on('close', () => {  
            console.log("Stream closed");  
            if (typeof onClose === 'function') {
              onClose(datas);
            }
        });  

        await finished(stream); // Wait for the stream to complete
        return datas;

    } catch (error) {  
        console.error("Fetch error:", error);  
        if (typeof onError === 'function') {
          onError(error);
        }
    }  
}  


