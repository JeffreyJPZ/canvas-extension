import Form from "@pages/popup/Form";
import Logo from "@pages/popup/Logo";
import { MemoryRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import MainPage from '@pages/mainpage/MainPage'
import { useState } from "react";

export default function Popup() {

    const [showMain, setShowMain] = useState(false);

    console.log("popup function");
    // const navigate = useNavigate();
  // scrapes canvas page using key and retrieves results when scrape button is clicked
  async function scrape(key: string) {
    try {
    //   const response = await chrome.runtime.sendMessage({
    //     type: "scrape",
    //     data: key,
    //   });

    //   alert(response); // debugging
      // need to assign promise to response and send response to some page
    } catch (err) {
      console.log(err);
    }
    setShowMain(true);
    // navigate("main-page");
  }
  console.log("before return");

  return (
    <div>
        {
            showMain ?
            (
                <MainPage/>
            ) :
            (
                <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
                <Logo />
                <br></br>
                <Form handleScrape={scrape} />
                </div>
            )
        }
    </div>
  )
}

//   return (
//     {
//         <div>
//         showMain ? 
//         (
//             <MainPage/>
//         )
//         :
//         (
//             <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
//             <Logo />
//             <br></br>
//             <Form handleScrape={scrape} />
//             </div>
//         )}
//         </div>
//     });
// }
    // <div>hello</div>
    // // <Router>
    // //     <div>hello</div>
    //     {/* <Route path="/" element={<>
    //         <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
    //         <Logo />
    //         <br></br>
    //         <Form handleScrape={scrape} />
    //         </div>
    //     </>}>
    //     </Route>

    //     <Route path="main-page" Component={MainPage}>
    //       </Route> */}
    //     {/* </Routes> */}
    // // </Router>
//   );

//   return (
//     <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
//       <Logo />
//       <br></br>
//       <Form handleScrape={scrape} />
//     </div>
//   );
// }
