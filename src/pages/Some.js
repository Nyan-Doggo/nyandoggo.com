import Body from "../components/body/Body";

function Some() {
    const media = [
        {
            name: "Twitter 🐦",
            endpoint: "https://twitter.com/nyan_moding",
        },
        {
            name: "Youtube 🎬",
            endpoint: "https://www.youtube.com/channel/UCJSZmbLX7AfLtouvXCySDow",
        },
        {
            name: "Instagram 📸",
            endpoint: "https://www.instagram.com/nyan_reee/",
        },
        {
            name: "Github 💻",
            endpoint: "https://github.com/Nyan-Doggo",
        },
    ]

    return (
        <Body mainMenu>
            <div>
                <h1 className="text-xl font-bold">
                    Im online! 🌐
                </h1>
                <div className="flex">
                    {media.map(s => {
                        return (
                            <a href={s.endpoint} target="_blank" >
                                <div className="p-4 bg-cyellow m-2 text-cdark hover:bg-clight duration-200">
                                    {s.name}
                                </div>
                            </a>
                        );
                    })}
                </div>
                <p className="mt-4">
                    you can reach me through email {"-->"} <a href="mailto:uwu@nayndoggo.com" className="underline">uwu@nyandoggo.com</a>
                </p>
                <p>
                    and im on discord; Nyan#0069
                </p>
            </div>
        </Body>
    );
}

export default Some;