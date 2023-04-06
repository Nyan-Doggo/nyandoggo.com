import { Table } from 'react-bootstrap';

function AboutMeTable() {
    const aboutMe = [
        {
            "item": "Name:",
            "value": "Nyan 😻"
        },
        {
            "item": "Pronouns:",
            "value": "He/Him 💙"
        },
        {
            "item": "Age:",
            "value": "24 🍰"
        },
        {
            "item": "Occupation:",
            "value": "Systems Developer 💻"
        },
        {
            "item": "Location:",
            "value": "Norway ⛄"
        },
        {
            "item": "Discord:",
            "value": "Nyan#0069 🎧"
        },
        {
            "item": "Email:",
            "value": "uwu@nyandoggo.com 📬"
        }
    ]

    return (
        <>
            <h3>
                Some quick fax 📠
            </h3>
            <Table size='sm'>
                <tbody>
                    {aboutMe.map(i => {
                        return (
                            <tr key={i.item}>
                                <th>{i.item}</th>
                                <td>{i.value}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default AboutMeTable;