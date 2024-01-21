import {useState} from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import createTheme from "@mui/system/createTheme";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      secondary: {
        main: '#CF4D4D',
      }
    }
  });

export default function Form(props: { handleScrape: (arg0: string) => void; }) {
    const [key, setKey] = useState("");

    return (
        <ThemeProvider theme={theme}>
        <div>
            <header className="flex flex-col items-center justify-center text-white text-2xl">
                <p>Canvas Extension</p>
            </header>

            <br></br>

            <div className="flex flex-col items-center justify-center text-white">
                <p>Enter your access token and press the button below to scrape your courses</p>
                <p className='italic'>Profile -&gt; Settings -&gt; New Access Token</p>
                
            </div>

            <br></br>

            <div className="flex flex-col bg-red-500">
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
        </ThemeProvider>
    )
}