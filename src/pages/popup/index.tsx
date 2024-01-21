import React from 'react';
import { createRoot } from 'react-dom/client';
import '@pages/popup/index.css';
import '@assets/styles/tailwind.css';
import Popup from '@pages/popup/Popup';
import axios, { AxiosResponse } from 'axios';


// // Replace these values with your Canvas instance URL and access token
// const canvasBaseUrl = 'https://canvas.ubc.ca/';
// const accessToken = "11224~AXUKiw3a0KCRTHzKxBK6zPOC6BAjbzDHAtj6JAJIsPAHMdhFfMXCiIlux472KWpP";
//
// // Define the Canvas API endpoint for courses
// let courses: string;
// const coursesEndpoint = `${canvasBaseUrl}/api/v1/courses`;
// let courseArray: string[];
//
// // Canvas API endpoint for CPSC 221
// const pageEndpoint = `${coursesEndpoint}/123421/pages`;
// let page: string;
//
// // Set up headers with the Authorization token
// const headers = {
//   Authorization: `Bearer ${accessToken}`,
// };

function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Popup root element");
  const root = createRoot(rootContainer);
  root.render(<Popup />);

  const params = {
    state: ["available"]
  }
  // Make a GET request to the Canvas API to retrieve a list of courses
  // const params = {
  //   state: ["available"]
  // }
  // // Make a GET request to the Canvas API to retrieve a list of courses
  // axios.get(`${coursesEndpoint}?per_page=100`, { headers, params })
  //   .then((response: AxiosResponse) => {
  //     // Handle the response data
  //     courses = response.data;
  //     // Iterate over each course and call the processQuizzes function
  //     if (typeof courses === 'string') {
  //       courseArray = JSON.parse(courses);
  //     } else if (Array.isArray(courses)) {
  //       // If apiResponse is already an array, use it directly
  //       courseArray = courses;
  //     } else {
  //       // Handle other cases or throw an error if the data is unexpected
  //       throw new Error('Unexpected data format');
  //     }
  //     courseArray.forEach((course: any) => {
  //       //processQuizzes(course.id);
  //       if (course.access_restricted_by_date == true) {
  //         courseArray = courseArray.filter(item => item !== course);
  //       }
  //     })
  //     console.log('Courses:', courseArray); 
  //     courseArray.forEach((course: any) => {
  //       //processAssignments(course.id);
  //     })
  //     console.log('Courses:', courseArray);
  //     courseArray.forEach((course: any) => {
  //       //processAssignments(course.id);
  //     })
  //
  //   })
  //   .catch((error) => {
  //     // Handle errors
  //     console.error('Error:', error.message);
  //   });
    // processMod();

}

// function processMod() {
//   axios.get(`${pageEndpoint}/course-guide?module_item_id=5969053`, { headers })
//     .then((response: AxiosResponse) => {
//       page = response.data;
//       console.log('Course Guide:', page);
//     })
// }


// function processAssignments(courseId: number) {
//   axios.get(`${coursesEndpoint}/${courseId}/assignments?per_page=100`, { headers })
//     .then((response: AxiosResponse) => {
//       // Handle the response data
//       const assignments = response.data;
//       console.log(`Assignments for Course ${courseId}:`, assignments);
//     })
// }
//
// // Function to process quizzes for each course
// async function processQuizzes(courseId: number) {
//   try {
//     // Make a GET request to the Canvas API to retrieve quizzes for the course
//     await axios.get(`${coursesEndpoint}/${courseId}/quizzes`, { headers })
//       .then((response: AxiosResponse) => {
//         // Handle the response data
//         const quizzes = response.data;
//         console.log(`Quizzes for Course ${courseId}:`, quizzes);
//       })
//   } catch (error) {
//     // Handle errors
//     console.error(`Error fetching quizzes for Course ${courseId}:`);
//   }
// }

init();
