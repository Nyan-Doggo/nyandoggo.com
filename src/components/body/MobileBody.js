import MobileMainMenu from "./MobileMainMenu";

function Body({ mainMenu, children }) {
    return (
        <div className="p-2">


            {mainMenu && <MobileMainMenu /> }

            <div className="p-3 mt-4 border-dotted border-cred border-2 shadow-lg duration-200">
                {children}
            </div>
        </div>
    );
}

export default Body;