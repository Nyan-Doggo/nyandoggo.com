function MainMenuOptions(){
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
    return(
        menuOptions
    );
}

export default MainMenuOptions;