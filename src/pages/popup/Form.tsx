import {useState} from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import createTheme from "@mui/system/createTheme";

const theme = createTheme({
    palette: {
      secondary: {
        main: '#CF4D4D'
      }
    }
  });

export default function Form(props: { handleScrape: (arg0: string) => void; }) {
    const [key, setKey] = useState("");

    return (
        <div>
            <header className="flex flex-col items-center justify-center text-white text-2xl">
                <p>Canvas Extension</p>
            </header>

            <br></br>

            <div className="flex flex-col items-center justify-center text-white">
                Enter your access key and press the button below to scrape your courses
            </div>

            <br></br>

            <div className="flex flex-col bg-red-500 outline outline-1 outline-black">
                <input type="text" value={key} onChange={e => setKey(e.target.value)}/>
            </div>

            <br></br>

            <Button variant="contained" onClick={() => props.handleScrape(key)} 
                    color="secondary">
                        Fetch
            </Button>

            {/* <button onClick={() => props.handleScrape(key)} className="bg-red-500 outline outline-1 text-white">
                Fetch
            </button> */}

        </div>
    )
}