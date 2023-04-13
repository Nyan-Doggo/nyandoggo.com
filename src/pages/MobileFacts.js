import MobileBody from "../components/body/MobileBody";

function MobileFacts() {
    const facts = [
        {
            f: "Name",
            d: "Nyan 😻"
        },
        {
            f: "Experience points",
            d: "24 🍰"
        },
        {
            f: "Location",
            d: "Norway 🗻"
        },
        {
            f: "Alignment",
            d: "Gremlin 😈"
        },
        {
            f: "Class & level",
            d: "Wizzard 4 🧙‍♂️"
        },
        {
            f: "Flaw",
            d: "Stimulant addiction 🚬☕"
        },
    ];

    return (
        <MobileBody mainMenu>
            <h1 className="text-xl font-bold">
                &gt;CharacterSheet.pdf 🎲
            </h1>
            <br />
            <table className="table-fixed">
                <tbody>
                    {facts.map(f => {
                        return (
                            <tr key={f.f} className="border-b-2 h-12 text-sm align-bottom border-cyellow">
                                <td className="text-sm">
                                    {f.f} :
                                </td>
                                <td>
                                    {f.d}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </MobileBody>
    );
}

export default MobileFacts;