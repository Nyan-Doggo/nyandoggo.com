import classNames from "classnames";
import { NavLink } from "react-router-dom";
import MainMenuOptions from "./MainMenuOptions";
import { useState } from "react";

function MobileMainMenu() {

    const menuOptions = MainMenuOptions();
    const [menuActive, setMenuActive] = useState(false);

    return (

        <div>
            {/* 
            bg-cyellow border-cyellow bg-cblue border-cblue 
            serving this is a bitch and needs to read the full 
            classnames to preload stuff for tailwind
            so i mention the colors in this comment ^~^
            */}
            <button onClick={() => setMenuActive(!menuActive)}>
                {menuActive ?
                    <div className="space-y-2 bg-cred p-2 fixed top-0 right-0">
                        <span className="block w-5 h-6 font-bold text-xl text-cdark">X</span>
                    </div>
                    :
                    <div className="space-y-2 bg-cyellow p-2 fixed top-0 right-0">
                        <span className="block w-5 h-0.5 bg-cdark"></span>
                        <span className="block w-3 h-0.5 bg-cdark"></span>
                        <span className="block w-5 h-0.5 bg-cdark"></span>
                    </div>
                }
            </button>
            {menuActive &&
                <div className="fixed bg-cdark z-10 w-full h-full py-2" onClick={() => setMenuActive(!menuActive)}>
                    <div className="fixed w-full z-20">
                        {menuOptions.map(mo => {
                            return (
                                <div className={classNames("border-" + mo.color,
                                    "border-t-2 border-dotted w-full mt-2")}>
                                    <div className="py-2">
                                        <p>{mo.description}</p>
                                    </div>

                                    <div>

                                        {mo.items.map(link => {
                                            return (
                                                <NavLink to={link.endpoint}>
                                                    <p className={classNames("bg-" + mo.color,
                                                        "p-2 text-cdark shadow-lg hover:bg-clight duration-200 ")}>
                                                        {link.description}
                                                    </p>
                                                </NavLink>
                                            );
                                        })}

                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        </div>
    );
}

export default MobileMainMenu;

