import { Button, Container, Col, Navbar, Nav, Row, Stack } from "react-bootstrap";

export default function Header() {
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
        <Navbar sticky="top">
            <Row className="w-100">
                <Col>
                    <Nav>
                        <Navbar.Brand><h1>NyanDoggo.com</h1></Navbar.Brand>
                        <p>Making the internet worse</p>
                    </Nav>
                </Col>
                <Col >
                    <Nav className="justify-content-end">
                        <Stack direction="horizontal" className="sm-auto">
                            {links.map(link => {
                                return (
                                    <Button size="lg" href={link.url} target="_blank">{link.name}</Button>
                                );
                            })}
                        </Stack>
                    </Nav>
                </Col>
            </Row>
        </Navbar>
    );
}