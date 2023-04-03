import { Button, Container, Col, Navbar, Nav, Row, Stack } from "react-bootstrap";
import HeaderButtons from "./HeaderButtons";
import HeaderBrand from "./HeaderBrand";

export default function Header() {
    

    return (
        <Navbar sticky="top">
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