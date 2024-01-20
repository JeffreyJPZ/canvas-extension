
export default function ScrapeButton(props: { scrape: () => void; }) {

    return (
        <div>
            <button onClick={() => props.scrape()} className="bg-red-500 outline outline-1 text-black">
                Scrape
            </button>
        </div>
    )
}