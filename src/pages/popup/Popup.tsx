import React from 'react';
import logo from '@assets/img/logo.svg';

export default function Popup(): JSX.Element {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-white-800">
      <header className="flex flex-col items-center justify-center text-black">
        <img src={logo} className="h-36 pointer-events-none animate-spin-slow" alt="logo" />
        <p>Canvas Extension</p>
      </header>

      <div className="flex flex-col items-center justify-center text-black">
        Press the button below to scrape your courses
      </div>

        <button className="bg-red-500 outline-black text-black">
            Scrape
        </button>
    </div>
  );
}
