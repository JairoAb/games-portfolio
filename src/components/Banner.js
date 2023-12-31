import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Game Developers</span>
              <h1>¡Hola! <br/> Somos From Realms </h1>
              <p>Somos un grupo de desarrollo de juegos de video de ESPOL</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>

            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}