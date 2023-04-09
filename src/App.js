import React from "react";
import './index.css';
import Header from "./components/header/Header";
import MainMenu from "./components/body/MainMenu";
import i_02Line from './images/02line.png';

export default function App() {
  return (
    <div className="App h-screen">
      <Header />


      <div className="text-center">
        <p className="font-bold text-cyellow mt-10">
          ATTENTION!
        </p>
        <p>
          The site is still under construction, no bully {">"}~{"<"} thankies!🥰
        </p>
      </div>

      <MainMenu />
      


      <div className="fixed right-0 bottom-0 w-[20vh]">
        <img src={i_02Line}>
        </img>
      </div>


    </div>
  );
}
