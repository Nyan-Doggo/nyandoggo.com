import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header/Header";
import AboutMeTable from "../components/body/AboutMeTable";
import AboutMeBio from "../components/body/AboutMeBio";

export default function FrontPage() {
    return (
        <Container>
            <Header />
            <hr />
            <Row>
                <Col>
                    <AboutMeTable />
                </Col>
                <Col>
                    <AboutMeBio />
                </Col>
            </Row>
            <p>This is a test</p>
        </Container>
    );
}