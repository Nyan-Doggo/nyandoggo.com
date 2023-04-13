import classNames from "classnames";
import { NavLink } from "react-router-dom";
import MainMenuOptions from "./MainMenuOptions";

function MainMenu() {

    const menuOptions = MainMenuOptions();

    return (
        <div className="w-fit">
            {/* bg-cyellow border-cyellow bg-cblue border-cblue */}
            {/* 
                JIT is a bitch and needs to read the full classname to preload stuff for tailwind
                so i mention the colors in this comment ^~^
            */}
            {menuOptions.map(mo => {
                return (
                    <div key={mo.description} className={classNames("border-" + mo.color,
                        "grid lg:grid-cols-2 border-t-2 mb-2 border-dotted w-full ml-auto")}>
                        <div className="p-2">
                            <p>{mo.description}</p>
                        </div>

                        <div>

                            {mo.items.map(link => {
                                return (
                                    <NavLink to={link.endpoint} key={link.endpoint}>
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
    );
}

export default MainMenu;

