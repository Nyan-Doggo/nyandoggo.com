export default function Contact() {
    const socialMediaLinks = [
        {
            name: "Furkin.chat 🐺",
            url: "https://furkin.chat"
        },
        {
            name: "Twitter 🐦",
            url: "https://www.twitter.com/nyan_moding"
        },
        {
            name: "Twitch 🔴",
            url: "https://www.twitch.tv/nyan___nyan"
        },
        {
            name: "github 😺",
            url: "https://github.com/Nyan-Doggo"
        },
        {
            name: "Email 📧",
            url: "mailto:uwu@nyandoggo.com"
        },

    ]


    return (
        <div className="flex w-full">
            <div className="m-auto w-3/4 md:w-1/3 flex-col">
                <h3 className="text-mine-shaft-50 text-center mt-24 mb-12 w-full md:mt-48">
                    I`m online! 🥳
                </h3>

                {socialMediaLinks.map((sml: {name: string, url: string,}) => {return(
                    <a key={sml.name} href={sml.url} className="my-4 p-2 w-full text-mine-shaft-900 font-bold 
                    bg-forest-green-300 text-center mx-auto block
                    hover:bg-mine-shaft-50 duration-200">
                        {sml.name}
                    </a>
                );})}
            </div>
        </div>
    );
}