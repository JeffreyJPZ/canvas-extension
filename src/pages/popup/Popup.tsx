import Form from "@pages/popup/Form";
import Logo from "@pages/popup/Logo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '@pages/mainpage/MainPage'

export default function Popup() {
  // scrapes canvas page using key and retrieves results when scrape button is clicked
  async function scrape(key: string) {
    try {
      const response = await chrome.runtime.sendMessage({
        type: "scrape",
        data: key,
      });

      alert(response); // debugging
      // need to assign promise to response and send response to some page
    } catch (err) {
      console.log(err);
    }
    
  }

    return (
        <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-background pt-5">
            <Logo/>
            <br></br>
            <Form handleScrape={scrape}/>
        </div>
    );
}
