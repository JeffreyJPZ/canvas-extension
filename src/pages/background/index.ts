// service worker
import axios, {AxiosResponse} from "axios";

const canvasBaseUrl = 'https://canvas.ubc.ca/';
const accessToken = "11224~YHkjOgSV2bzHQRVPPixXGKHHfP5VsXmZFSRc4kQLZDRxspfPEYcbJvgw1b9z4DsL";

// Define the Canvas API endpoint for courses
const coursesEndpoint = `${canvasBaseUrl}/api/v1/courses`;

// Canvas API endpoint for CPSC 221
const pageEndpoint = `${coursesEndpoint}/123421/pages`;
let page: string;

// Set up headers with the Authorization token
const headers = {
  'Authorization': `Bearer ${accessToken}`,
  //   'Content-Type': 'application/json',

};

const params = {
  'state': ["available"]
}

// Adds a listener to receive data from popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "scrape") {
        handleMessage(message).then(response => sendResponse(response)); // sends success message back to popup
    }
    return true;
});

// Fetches data from Canvas API and returns the course data
async function handleMessage(message: { data: string; }) {
    const data = {course: "cpsc_213"} // stub, fetch data from OpenAI using message.data (key)
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    // check if active tab has an id
    if (typeof tab.id === "number") {
        await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {console.log("hi")}
        })
    try {
        const config = {
            method: 'get',
            url: '${coursesEndpoint}?per_page=100',
            headers: headers,
            params: params
        }

        // Make a GET request to the Canvas API to retrieve a list of courses
        const response = await axios(config);
        const courses = response.data;
        let courseArray : string[] = [];

        // Iterate over each course and call the processQuizzes function
        if (typeof courses === 'string') {
            courseArray = JSON.parse(courses);
        } else if (Array.isArray(courses)) {
            // If apiResponse is already an array, use it directly
            courseArray = courses;
        } else {
            // Handle other cases or throw an error if the data is unexpected
            console.log('Unexpected data format');
        }

        courseArray.forEach((course: any) => {
            //processQuizzes(course.id);
            if (course.access_restricted_by_date == true) {
                courseArray = courseArray.filter(item => item !== course);
            }
        });

        console.log('Courses:', courseArray);

        // additional loop over assignments
    } catch (err) {
        console.log(err);
    }

    return message.data;
}