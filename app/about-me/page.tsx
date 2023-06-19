export default function Bio() {
    return (
        <div className="flex w-full">
            <div className="m-auto md:w-1/3">
                <h3 className="text-mine-shaft-50 text-center mt-12 mb-4 w-full md:mt-48">
                    Hello :3
                </h3>
                <p className="text-center w-full">
                    im just a dude with a computer, sometimes i make cool projects! if you head over to
                    the <a className="italic font-bold text-forest-green-300" href={"/contact"}>contact</a> section you can find a link to my github for more info about
                    some of these projects ^^
                </p>
                <p className="text-center w-full">
                    most my work experience is with Python 🐍, tho i`ve started dabbling into some JS/TS webdev with React/NextJS, one of my larger projects includes
                    a microblog/forum which you can find over at <a className="italic font-bold text-forest-green-300" href="https://www.furkin.chat">furkin.chat</a>
                </p>
                <p className="text-center w-full">
                    beyond booping computers i have a normal job as a systems-dev and a collection of moomin-mugs ☕
                </p>
            </div>
        </div>
    );
}