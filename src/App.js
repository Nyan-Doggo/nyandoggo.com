import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./index.css";
import Header from "./components/header/Header";
import Facts from "./pages/Facts";
import Bio from "./pages/Bio";
import Some from "./pages/Some";
import Support from "./pages/Support";
import Home from "./pages/Home";
import smol from "./images/smol.png"

export default function App() {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <Header />
        {/*test*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/bio" element={<Bio/>} />
          <Route path="/some" element={<Some/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>



      <div className="fixed right-0 bottom-0 w-[20vh]">
        <img src={smol}>
        </img>
      </div>


    </div>
  );
}
