import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header/Header";
import AboutMeTable from "../components/body/AboutMeTable";
import AboutMeBio from "../components/body/AboutMeBio";
import CryptoAbout from "../components/body/CryptoAbout";

export default function FrontPage() {
    return (
        <Container>
            <Header />
            <hr />
            <Row >
                <Col>
                    <AboutMeTable />
                </Col>
                <Col className="d-flex align-items-center">
                    <div>
                        <AboutMeBio />
                    </div>
                </Col>
            </Row>
            <hr />
            <Row >
                <Col>
                    <AboutMeTable />
                </Col>
                <Col className="d-flex align-items-center">
                    <div>
                        <CryptoAbout />
                    </div>
                </Col>
            </Row>
            <p>This is a test</p>
        </Container>
    );
}