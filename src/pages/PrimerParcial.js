import { Container, Row, Col, Image, Card } from "react-bootstrap";

import idea1 from "../assets/img/idea1.jpg";
import idea2 from "../assets/img/idea2.jpg";
import idea3 from "../assets/img/idea3.jpg";
import ideafinal from "../assets/img/ideaganadora.jpg";

import { CustomCard } from "../components/CustomCard";

import './PrimerParcial.css'

export const PrimerParcial = () => {
  return (
    <section className="primer-parcial" id="primer-parcial">
      <Container>
        <h1 className="py-2" >Ideación</h1>
        <p>Se tomaron varias palabras y se formaron las siguientes ideas</p>

        <Row>
          <Col xs={6}>
            <CustomCard title={"Idea 1"} ide1={"Buscar"} ide2={"Bosque"} ide3={"Místico"} text={"Buscar tesoros en un bosque sombrio por un sendero místico"} />

            <CustomCard title={"Idea 3"} ide1={"Construir"} ide2={"Mapa"} ide3={"Seguro"} text={"Contruir dentro de un mapa un pueblo, villa o casa de la manera más rápida y segura posible con tiempo limitado."} />

            <CustomCard title={"Idea 5"} ide1={"Sobrevivir"} ide2={"Espada"} ide3={"Volador"} text={"Sobrevivir en un mundo con una espada mágica con enemigos voladores."} />

            <CustomCard title={"Idea 7"} ide1={"Conquistar"} ide2={"Demonio"} ide3={"Poderoso"} text={"Conquistar el reino de un demonio poderoso matando a todos sus soldados."} />
            
            
            
            <CustomCard title={"Idea 9"} ide1={"Obtener"} ide2={"Armadura"} ide3={"Grande"} text={"Obtener una armadura grande a través de ir matando espiritus."} />

            <CustomCard title={"Idea 11"} ide1={"Conducir"} ide2={"Amigos"} ide3={"Gigante"} text={"Conducir y llevar a amigos y familiares a sus casas en una ciudad gigante."} />
          </Col>
          <Col xs={6}>
            <CustomCard title={"Idea 2"} ide1={"Descubrir"} ide2={"Hermano"} ide3={"Ilimitado"} text={"Descubrir el paradedo de mi hermano perdido en un tiempo Ilimitado"} />

            <CustomCard title={"Idea 4"} ide1={"Pelear"} ide2={"Tortuga"} ide3={"Ilimitado"} text={"Pelear en un reino con una tortuga con un poder ilimitado."} />
            
            <CustomCard title={"Idea 6"} ide1={"Cocinar"} ide2={"Lobo"} ide3={"Mágico"} text={"Hombre lobo que cocina con elementos de un bosque mágico para vender comida."} />
            
            <CustomCard title={"Idea 8"} ide1={"Descubrir"} ide2={"Hermano"} ide3={"Iimitado"} text={"Descubrir el paradero de mi hermano perdido con un tiempo ilimitado."} />
            
            <CustomCard title={"Idea 10"} ide1={"Defender"} ide2={"Rey"} ide3={"Inteligente"} text={"Defender la torre de un rey de forma inteligente colocando limitadas trampas para los enemigos."} />
            
            <CustomCard title={"Idea 12"} ide1={"Explorar"} ide2={"Universidad"} ide3={"Abandonada"} text={"Explorar una universidad abandonada con misterios por descubrir."} />
          </Col>
        </Row>

        <h1 className="py-2" >Bocetos</h1>
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