import classNames from "classnames";
import { NavLink } from "react-router-dom";

function MainMenu() {

    const menuOptions = [
        {
            description: "About me 👉👈",
            color: "cblue",
            items: [
                {
                    description: "Quick fax 📠",
                    endpoint: "/facts",
                },
                {
                    description: "About me 📚",
                    endpoint: "/bio",
                },
            ]
        },
        {
            description: "Links and stuff 🔗",
            color: "cyellow",
            items: [
                {
                    description: "Where to find me 🕵️‍♂️",
                    endpoint: "/some",
                },
                {
                    description: "Support me 💸",
                    endpoint: "/support",
                },
            ]
        },
    ]

    return (
        <div className="w-fit">
            {/* bg-cyellow border-cyellow bg-cblue border-cblue */}
            {/* 
                JIT is a bitch and needs to read the full classname to preload stuff for tailwind
                so i mention the colors in this comment ^~^
            */}
            {menuOptions.map(mo => {
                return (
                    <div className={classNames("border-" + mo.color,
                        "flex border-t-2 mb-2 border-dotted w-fit ml-auto")}>
                        <div className="p-2">
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
    );
}

export default MainMenu;

