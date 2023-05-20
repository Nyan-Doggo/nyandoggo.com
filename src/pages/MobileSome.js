import MobileBody from "../components/body/MobileBody";

function MobileSome() {
    const media = [
        {
            name: "Twitter 🐦",
            endpoint: "https://twitter.com/nyan_moding",
        },        
        {
            name: "Twitch 🎮",
            endpoint: "https://www.twitch.tv/nyan___nyan",
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
            name: "Furkin.chat 🐺",
            endpoint: "https://www.furkin.chat",
        },
    ]

    return (
        <MobileBody mainMenu>
            <div>
                <h1 className="text-xl font-bold">
                    Im online! 🌐
                </h1>
                <div className="grid grid-cols-1">
                    {media.map(s => {
                        return (
                            <a key={s.endpoint} href={s.endpoint} target="_blank" rel="noreferrer">
                                <div className="p-2 bg-cyellow m-2 text-cdark hover:bg-clight duration-200">
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
        </MobileBody>
    );
}

export default MobileSome;