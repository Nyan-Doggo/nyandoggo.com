import { Button, Container, Col, Navbar, Nav, Row, Stack } from "react-bootstrap";
import HeaderButtons from "./HeaderButtons";
import HeaderBrand from "./HeaderBrand";

export default function Header() {
    

    return (
        <Navbar>
            { /* navbar could be sticky="top" but thats fucky */ }
            <Row className="w-100">
                <Col>
                    <HeaderBrand />
                </Col>
                <Col >
                    <HeaderButtons />
                </Col>
            </Row>
        </Navbar>
    );
}