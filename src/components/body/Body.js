import MainMenu from "./MainMenu";

function Body({ mainMenu, children }) {
    return (
        <div className="flex mt-20 justify-center">


            {mainMenu && <MainMenu /> }

            <div className="ml-10 p-10 w-2/3 border-dotted border-cred border-2 shadow-lg duration-200">
                {children}
            </div>
        </div>
    );
}

export default Body;