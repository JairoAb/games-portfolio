import { Container, Row, Col, Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import idea1 from "../assets/img/idea1.jpg";
import idea2 from "../assets/img/idea2.jpg";
import idea3 from "../assets/img/idea3.jpg";
import ideafinal from "../assets/img/ideaganadora.jpg";

import './PrimerParcial.css'

export const PrimerParcial = () => {
  return (
    <section className="primer-parcial" id="primer-parcial">
      <Container>
        <h1>Ideación</h1>
        <p>Se tomaron varias palabras y se formaron las siguientes ideas</p>
        <Card>
          <Card.Header>Idea 1</Card.Header>
          <Card.Body>
            <Card.Title>
              <div className="d-flex">
                <div className="tag rounded-pill mx-2">
                  Buscar
                </div>
                <div className="tag rounded-pill mx-2">
                  Bosque
                </div>
                <div className="tag rounded-pill mx-2">
                  Místico
                </div>
              </div>
            </Card.Title>
            <Card.Text>
              Buscar tesoros en un bosque sombrio por un sendero místico
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Idea 2</Card.Header>
          <Card.Body>
            <Card.Title>
              <div className="d-flex">
                <div className="tag rounded-pill mx-2">
                  Descubrir
                </div>
                <div className="tag rounded-pill mx-2">
                  Hermano
                </div>
                <div className="tag rounded-pill mx-2">
                  Ilimitado
                </div>
              </div>
            </Card.Title>
            <Card.Text>
              Descubrir el paradedo de mi hermano perdido en un tiempo Ilimitado
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Idea 3</Card.Header>
          <Card.Body>
            <Card.Title>
              <div className="d-flex">
                <div className="tag rounded-pill mx-2">
                  Construir
                </div>
                <div className="tag rounded-pill mx-2">
                  Mapa
                </div>
                <div className="tag rounded-pill mx-2">
                  Seguro y Rápido
                </div>
              </div>
            </Card.Title>
            <Card.Text>
              Contruir dentro de un mapa un pueblo, villa o casa de la manera más rápida y segura posible con tiempo limitado.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Idea 4</Card.Header>
          <Card.Body>
            <Card.Title>
              <div className="d-flex">
                <div className="tag rounded-pill mx-2">
                  Conquistar
                </div>
                <div className="tag rounded-pill mx-2">
                  Demonio
                </div>
                <div className="tag rounded-pill mx-2">
                  Poderoso
                </div>
              </div>
            </Card.Title>
            <Card.Text>
              Conquistar el reino de un demonio poderoso matando a todos sus soldados.
            </Card.Text>
          </Card.Body>
        </Card>
        <h1>Bocetos</h1>
        <Row className="py-2">
          <Col xs={6} md={4}>
            <Image src={idea1} rounded />
          </Col>
          <Col xs={6} md={4}>
          <Image src={idea2} rounded />
          </Col>
          <Col xs={6} md={4}>
          <Image src={idea3} rounded />
          </Col>
        </Row>
        <h1>Idea Final</h1>
        <Image src={ideafinal} rounded />
      </Container>
    </section>
  )
}