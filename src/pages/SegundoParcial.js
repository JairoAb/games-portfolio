import { Container, Row, Col, Image, Card } from "react-bootstrap";

import idea1 from "../assets/img/idea12p.jpg";
import idea2 from "../assets/img/idea22p.jpg";
import idea3 from "../assets/img/idea32p.jpg";
import idea4 from "../assets/img/idea42p.jpg";
import semana1 from "../assets/img/semana1.png";
import semana2 from "../assets/img/semana2.png";
import semana3 from "../assets/img/semana3.png";

import './SegundoParcial.css'

export const SegundoParcial = () => {
  return (
    <section className="primer-parcial" id="primer-parcial">
      <Container>
        <h1 className="py-2" >REALMS WAR</h1>
        <p class="descripcion">Es un juego del género Musou y Roguelike donde asumirás el papel de un soldado de un facción y tendrás que cumplir objetivo, como capturar las zonas de las demás facciones, para salir vencedor</p>

        <h2 className="py-2" >Ideación</h2>

        <Row>
          <Col xs={6}>
            <Card>
              <Card.Header>Idea 1</Card.Header>
              <Card.Body>
                <Card.Text>
                  Sobrevivir en un mundo con una espada mágica con enemigos voladores.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Idea 3</Card.Header>
              <Card.Body>
                <Card.Text>
                  Conducir y llevar a amigos y familiares a sus casas en una ciudad gigante.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Idea 5</Card.Header>
              <Card.Body>
                <Card.Text>
                  Conquistar zonas pertenecientes a otros reinos contra hordas infinitas de enemigos.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Idea 7</Card.Header>
              <Card.Body>
                <Card.Text>
                  Apagar un incendio con varias personas donde cada uno tiene un rol.
                </Card.Text>
              </Card.Body>
            </Card>


          </Col>
          <Col xs={6}>
            <Card>
              <Card.Header>Idea 2</Card.Header>
              <Card.Body>
                <Card.Text>
                  Descubrir el paradero de mi hermano perdido con un tiempo ilimitado.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Idea 4</Card.Header>
              <Card.Body>
                <Card.Text>
                  Defender tu reino contra otros soldados y magos que quieren conquistarlo.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Idea 6</Card.Header>
              <Card.Body>
                <Card.Text>
                  Explorar una universidad abandonada con misterios por descubrir.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Idea 8</Card.Header>
              <Card.Body>
                <Card.Text>
                  Ir a varios reinos y conquistarlos para liberar a tu pueblo el cual está capturado en varios reinos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="py-2" >Prototipos</h2>

        <Row className="py-2">
          <Col xs={6} md={8}>
            <Image src={idea1} rounded />
          </Col>
          <Col xs={12} md={4}>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>Idea 8</h2>
            <p>Ir a varios reinos y conquistarlos para liberar a tu pueblo el cual está capturado en varios reinos
              <br></br><br></br> Por Jairo Alcívar</p>
          </Col>
        </Row>

        <Row className="py-2">
          <Col xs={12} md={4}>
            <br></br><br></br><br></br><br></br>
            <h2>Idea 4</h2>
            <p>Defender tu reino contra otros soldados y magos que quieren conquistarlo
              <br></br><br></br>Por Sebastian Poveda</p>
          </Col>
          <Col xs={6} md={8}>
            <Image src={idea2} rounded />
          </Col>
        </Row>

        <Row className="py-2">
          <Col xs={6} md={8}>
            <Image src={idea3} rounded />
          </Col>
          <Col xs={12} md={4}>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>Idea 7</h2>
            <p>Apagar un incendio con varias personas donde cada uno tiene un rol.
              <br></br><br></br>Por Esteban Pulley</p>
          </Col>
        </Row>

        <Row className="py-2">
          <Col xs={12} md={4}>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>Idea 7</h2>
            <p>Conquistar zonas pertenecientes a otros reinos contra hordas infinitas de enemigos.
              <br></br><br></br>Por José Macías - SELECCIONADA</p>
          </Col>
          <Col xs={6} md={8}>
            <Image src={idea4} rounded />
          </Col>
        </Row>
        <h2><br></br>Idea Final</h2>
        <Image src={idea4} rounded />

        <h2><br></br>Planificación</h2>

        <Row className="py-2 roles">
          <Col>
            <h5>Jairo Alcívar</h5>
            <p>Productor</p>
            <p>Desarrollador líder</p>
          </Col>
          <Col>
            <h5>José Macías</h5>
            <p>Desarrollador</p>
            <p>Líder de playtesting</p>
          </Col>
          <Col>
            <h5>Esteban Pulley</h5>
            <p>Diseñador</p>
            <p>Animador</p>
          </Col>
          <Col>
            <h5>Sebastian Poveda</h5>
            <p>Ingeniero de sonido</p>
            <p>Documentador</p>
          </Col>
        </Row>

        <h3><br></br>Semana 1</h3>
        <h4><br></br>31/07 - 06/08</h4>

        <Image src={semana1} rounded />

        <h3><br></br>Semana 2</h3>
        <h4><br></br>07/08 - 13/08</h4>

        <Image src={semana2} rounded />

        <h3><br></br>Semana 3</h3>
        <h4><br></br>14/08 - 20/08</h4>

        <Image src={semana3} rounded />
        
      </Container>

    </section>
  )
}