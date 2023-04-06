import { Col, Row } from "react-bootstrap";
import Header from "../components/header/Header";
import AboutMeTable from "../components/body/AboutMeTable";
import AboutMeBio from "../components/body/AboutMeBio";
import CryptoAbout from "../components/body/CryptoAbout";
import SupportOptions from "../components/body/SupportOptions";

export default function FrontPage() {
    return (
        <>
            <Header />
            <hr />
            <Row >
                <Col className="d-flex align-items-center">
                    <div>
                        <AboutMeTable />
                    </div>
                </Col>
                <Col className="d-flex align-items-center">
                    <div>
                        <AboutMeBio />
                    </div>
                </Col>
            </Row>
            <hr />
            <Row >
                <Col className="d-flex align-items-center">
                    <div>
                        <SupportOptions />
                    </div>
                </Col>
                <Col className="d-flex align-items-center">
                    <div>
                        <CryptoAbout />
                    </div>
                </Col>
            </Row>
        </>
    );
}