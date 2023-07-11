import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import './Home.css'

export const Home = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Game Developers</span>
              <h1>¡Hola! <br/> Somos From Realms </h1>
              <p>Somos un grupo de desarrollo de juegos de video de ESPOL</p>
              <h2>Integrantes: <br/></h2>
              <h4>- Jairo Alcívar<br/></h4>
              <h4>- José Macías<br/></h4>
              <h4>- Esteban Pulley<br/></h4>
              <h4>- Sebastian Poveda<br/></h4>
              
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