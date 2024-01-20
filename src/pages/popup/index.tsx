import React from 'react';
import { createRoot } from 'react-dom/client';
import '@pages/popup/index.css';
import '@assets/styles/tailwind.css';
import Popup from '@pages/popup/Popup';
import axios, { AxiosResponse } from 'axios';

function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Popup root element");
  const root = createRoot(rootContainer);
  root.render(<Popup />);
  // Replace these values with your Canvas instance URL and access token
  const canvasBaseUrl = 'https://canvas.ubc.ca/';
  const accessToken = process.env.USER_TOKEN;

  // Define the Canvas API endpoint for courses
  const coursesEndpoint = `${canvasBaseUrl}/api/v1/courses`;

  // Set up headers with the Authorization token
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  // Make a GET request to the Canvas API to retrieve a list of courses
  axios.get(coursesEndpoint, { headers })
    .then((response: AxiosResponse) => {
      // Handle the response data
      const courses = response.data;
      console.log('Courses:', courses);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error:', error.message);
    });
}

init();
