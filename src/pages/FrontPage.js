import { Container, Row } from "react-bootstrap";
import Header from "../components/header/Header";
import AboutMeTable from "../components/body/AboutMeTable";

export default function FrontPage(){
    return(
        <Container>
            <Header />
            <Row>
                <AboutMeTable/>
            </Row>
            <p>This is a test</p>
        </Container>
    );
}