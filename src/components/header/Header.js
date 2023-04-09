import { NavLink } from "react-router-dom";
import logo512 from "../../images/logo512.png";

function Header() {
    return (
        <div className="text-center pt-2">
            <NavLink to="/">
                <h1 className="text-3xl font-bold text-cred">
                    Nyandoggo.com!
                    <img className="inline h-9 ml-2" src={logo512}>
                    </img>
                </h1>
            </NavLink>

            <p>
                - Making the internet worse. 😎
            </p>
        </div>
    );
}

export default Header;