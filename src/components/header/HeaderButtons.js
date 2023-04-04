import { Stack, Nav, Row, Col, Button } from 'react-bootstrap';

function HeaderButtons() {

    const links = [
        {
            "name": "Twitter 🐦",
            "url": "https://twitter.com/Nyan_UwU_RawrXD"
        },
        {
            "name": "YouTube 📽️",
            "url": "https://www.youtube.com/channel/UCJSZmbLX7AfLtouvXCySDow"
        },
        {
            "name": "Instagram 📸",
            "url": "https://www.instagram.com/nyan_reee/"
        },
    ]

    return (
        < Nav className="justify-content-end" >
            <Stack direction="horizontal" className="sm-auto">
                {links.map(link => {
                    return (
                        <Button key={link.name} size="lg" href={link.url} target="_blank">{link.name}</Button>
                    );
                })}
            </Stack>
        </Nav >
    );
}

export default HeaderButtons;