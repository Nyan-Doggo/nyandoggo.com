import Body from "../components/body/Body";

function Facts() {
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
        <Body mainMenu>
            <h1 className="text-xl font-bold">
                &gt;CharacterSheet.pdf 🎲
            </h1>
            <br />
            <table className="table-fixed lg:w-2/3">
                <tbody>
                    {facts.map(f => {
                        return (
                            <tr key={f.f} className="border-b-2 h-9 align-bottom border-cyellow">
                                <td className="text-lg">
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
        </Body>
    );
}

export default Facts;