"use client"
import { useState } from "react";
import Link from "next/link";

export default function BurgerMenu() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!burgerMenuOpen);
    }

    const pages = [
        {
            name: "home",
            url: "/",
        },
        {
            name: "bio",
            url: "/bio",
        },
        {
            name: "where to find me?",
            url: "/contact",
        },
    ]


    return (
        <div className="mr-0 ml-auto flex">
            <div id="burger-menu-toggle">
                <button onClick={toggleBurgerMenu} className="h-full">
                    <img src="/burger.svg" className="w-10 object-contain filter invert opacity-50 hover:opacity-100 duration-200"/>
                </button>
            </div>

            <div id="burger-menu-display" className={`absolute w-screen h-screen top-0 left-0 bg-mine-shaft-950 bg-opacity-90 ${burgerMenuOpen ? "flex z-10" : "hidden -z-10"} `}>
                <div className="h-3/4 w-5/6 md:w-1/4 bg-mine-shaft-900 m-auto flex flex-col p-4">

                    {pages.map((p: { name: string, url: string }) => {
                        return (
                            <Link key={p.name} onClick={toggleBurgerMenu} href={p.url}>
                                <div className="w-full border-2 border-forest-green-700 px-6 py-2 text-center my-2 bg-forest-green-300 text-forest-green-900
                                hover:border-mine-shaft-800 hover:bg-mine-shaft-100 hover:font-bold hover:text-mine-shaft-900 duration-200">
                                    {p.name}
                                </div>
                            </Link>
                        );
                    })}

                    <button className="mb-0 mt-auto my-auto w-full p-4 text-lg bg-mine-shaft-950
                    hover:bg-mine-shaft-50 hover:text-mine-shaft-950" onClick={toggleBurgerMenu}>
                        Close ❌
                    </button>
                </div>
            </div>
        </div>
    );
}