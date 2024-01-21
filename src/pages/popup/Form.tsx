import {useState} from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import createTheme from "@mui/system/createTheme";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from "@mui/material";
import './Form.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
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
                <p>Canvify</p>
            </header>

            <br></br>

            <div className="flex flex-col items-center justify-center text-white">
                <p>Enter your access token and press the button below to scrape your courses</p>
                <p className='italic'>Profile -&gt; Settings -&gt; New Access Token</p>
                
            </div>

            <br></br>

            {/* <div className="flex flex-col bg-red-500 outline outline-1 outline-black">
                <input type="text" value={key} onChange={e => setKey(e.target.value)}/>
            </div> */}

            <TextField margin="dense" color="primary" fullWidth id="margin-dense filled-basic" label="Enter Key" variant="filled" 
            onChange={e => setKey(e.target.value)} style={{
                borderColor: 'white', // Set the outline color to white
                margin: '15 0px',      // Add left and right margins
              }}/>

            <br></br>

            <Button variant="contained" className="mt-2.5" onClick={() => props.handleScrape(key)} 
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