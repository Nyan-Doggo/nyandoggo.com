import MainMenu from "./MainMenu";

function Body({ mainMenu, children }) {
    return(
        <div className="flex">
            {mainMenu && <MainMenu />}
            {children}
        </div>
    );
}

export default Body;