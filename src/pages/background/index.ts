// background script

// Adds a listener to receive data from popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "scrape") {
        handleMessage(message).then(response => sendResponse(response)); // sends success message back to popup
    }
    return true;
});

// Fetches data from OpenAI api and returns the course data
async function handleMessage(message: { data: string; }) {
    const data = {course: "cpsc_213"} // stub, fetch data from OpenAI
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    // check if active tab has an id
    if (typeof tab.id === "number") {

        // send to content script

    }

    return message.data; // test value
}