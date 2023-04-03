import { Container, Navbar, Stack } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar sticky="top">
            <Stack direction="horizontal">
                <Navbar.Brand><h1>NyanDoggo</h1></Navbar.Brand>
                <p>I make the internet worse</p>
            </Stack>
        </Navbar>
    );
}