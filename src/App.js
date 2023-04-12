import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./index.css";
import Header from "./components/header/Header";
import MobileHeader from "./components/header/MobileHeader";
// page imports
import Facts from "./pages/Facts";
import Bio from "./pages/Bio";
import Some from "./pages/Some";
import Support from "./pages/Support";
import Home from "./pages/Home";
// mobile page imports
import MobileHome from "./pages/MobileHome";
import MobileFacts from "./pages/MobileFacts"
import MobileBio from "./pages/MobileBio";
import MobileSupport from "./pages/MobileSupport";
import MobileSome from "./pages/MobileSome";


import smol from "./images/smol.png"

export default function App() {
  const IsSmall = () => {
    // Declare a new state variable with the "useState" Hook
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 800;
    React.useEffect(() => {
      /* Inside of a "useEffect" hook add an event listener that updates
         the "width" state variable when the window size changes */
      window.addEventListener("resize", () => setWidth(window.innerWidth));
      /* passing an empty array as the dependencies of the effect will cause this
         effect to only run when the component mounts, and not each time it updates.
         We only want the listener to be added once */
    }, []);
    return width < breakpoint ? true : false
  }

  return (
    <div className="App h-screen">
      {IsSmall() ?
        <BrowserRouter>
          <MobileHeader />
          <Routes>
            <Route path="/" element={<MobileHome />} />
            <Route path="/facts" element={<MobileFacts />} />
            <Route path="/bio" element={<MobileBio />} />
            <Route path="/some" element={<MobileSome />} />
            <Route path="/support" element={<MobileSupport />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
        // above here is the mobile version
        :
        // This is the desktop Version
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/some" element={<Some />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      }

      {!IsSmall() &&
        <div className="fixed right-0 bottom-0 w-[20vh]">
          <img src={smol}>
          </img>
        </div>}



    </div>
  );
}
