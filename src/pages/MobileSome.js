import MobileBody from "../components/body/MobileBody";

function MobileSome() {
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