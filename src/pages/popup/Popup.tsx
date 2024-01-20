import ScrapeButton from '@pages/popup/ScrapeButton';
import Form from "@pages/popup/Form";
import Logo from "@pages/popup/Logo";

export default function Popup() {

    // scrapes canvas page and retrieves results when scrape button is clicked
    function scrape() {
        alert("hi");
    }

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
            <Logo/>
            <Form/>
            <ScrapeButton scrape={scrape}/>
        </div>
    );
}
