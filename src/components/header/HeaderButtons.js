import {Stack, Nav, Button} from 'react-bootstrap';

function HeaderButtons() {

    const links = [
        {
            "name": "Twitter",
            "url": "https://www.twitter.com"
        },
        {
            "name": "YouTube",
            "url": "https://www.twitter.com"
        },
        {
            "name": "Instagram",
            "url": "https://www.twitter.com"
        },
    ]

    return (
        < Nav className="justify-content-end" >
            <Stack direction="horizontal" className="sm-auto">
                {links.map(link => {
                    return (
                        <Button size="lg" href={link.url} target="_blank">{link.name}</Button>
                    );
                })}
            </Stack>
        </Nav >
    );
}

export default HeaderButtons;