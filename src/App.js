import React from "react";
import './index.css';
import Header from "./components/header/Header";

export default function App() {
  return (
    <div className="App h-screen">
      <Header />

      <div className="w-fit">

        <div className="flex border-t-2 my-2 border-cblue border-dotted w-fit ml-auto">
          <div className="p-2">
            <p>About me 👉👈</p>
          </div>
          <div>
            <p className="p-2 bg-cblue text-cdark shadow-lg hover:bg-clight duration-200">Quick Fax 📠</p>
            <p className="p-2 bg-cblue text-cdark shadow-lg">Bio 📚</p>
          </div>
        </div>

        <div className="flex border-t-2 my-2 border-cyellow border-dotted w-fit">
          <div className="p-2">
            <p>Links and stuff 🔗</p>
          </div>
          <div>
            <p className="p-2 bg-cyellow text-cdark shadow-lg hover:bg-clight duration-200">Where to find me 🌐</p>
            <p className="p-2 bg-cyellow text-cdark shadow-lg">Support me 💸</p>
          </div>
        </div>


      </div>


    </div>
  );
}
