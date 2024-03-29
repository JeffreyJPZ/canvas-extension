import React from 'react';
import '@pages/options/Options.css';
import Logo from "@pages/popup/Logo";
import './MainPage.css';
import Courses from "@pages/mainpage/Courses";
import Buttons from "@pages/mainpage/Buttons";
import Text from "@pages/mainpage/Text";

export default function MainPage(): JSX.Element {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
        <Logo />
        <Courses />
        <Buttons />
        <Text />
        <br></br>
    </div>
  );
  // <div className="container">Options</div>;
}