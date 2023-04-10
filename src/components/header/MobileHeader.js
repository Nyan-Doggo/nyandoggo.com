import { NavLink } from "react-router-dom";
import logo512 from "../../images/logo512.png";

function MobileHeader() {
    return (
        <div className="p-2">
            <NavLink to="/">
                <h1 className="text-xl font-bold text-cred">
                    Nyandoggo.com!
                    <img className="inline h-7 ml-2" src={logo512}>
                    </img>
                </h1>
            </NavLink>

            <p className="text-sm">
                - Making the internet worse.
            </p>
        </div>
    );
}

export default MobileHeader;