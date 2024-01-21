import {useState} from "react";

export default function Form(props: { handleScrape: (arg0: string) => void; }) {
    const [key, setKey] = useState("");

    return (
        <div>
            <header className="flex flex-col items-center justify-center text-white">
                <p>Canvas Extension</p>
            </header>

            <div className="flex flex-col items-center justify-center text-white">
                Enter your access key and press the button below to scrape your courses
            </div>

            <div className="flex flex-col bg-red-500 outline outline-1 outline-black">
                <input type="text" value={key} onChange={e => setKey(e.target.value)}/>
            </div>

            <button onClick={() => props.handleScrape(key)} className="bg-red-500 outline outline-1 text-black">
                Scrape
            </button>

        </div>
    )
}