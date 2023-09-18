import { Container, Row, Col, Image, Card } from "react-bootstrap";

import idea1 from "../assets/img/idea12p.jpg";
import idea2 from "../assets/img/idea22p.jpg";
import idea3 from "../assets/img/idea32p.jpg";
import idea4 from "../assets/img/idea42p.jpg";
import semana1 from "../assets/img/2Parcial/semana1.png";

import semana2 from "../assets/img/2Parcial/semana2.png";
import semana3 from "../assets/img/2Parcial/semana3.png";
import semana4 from "../assets/img/2Parcial/semana4.png";

import blender0 from "../assets/img/2Parcial/Blender-EP-0.jpg";
import blender1 from "../assets/img/2Parcial/Blender-EP-1.jpg";
import mundo0 from "../assets/img/2Parcial/Playtesting-JO-1-Mundo-0.jpg";
import mundo1 from "../assets/img/2Parcial/Playtesting-JO-1-Mundo-1.jpg";
import mundo2 from "../assets/img/2Parcial/Playtesting-JO-1-Mundo-2.jpg";
import arboles0 from "../assets/img/2Parcial/Playtesting-JO-1-Mundo-Gen-Arboles-0.jpg";
import arboles1 from "../assets/img/2Parcial/Playtesting-JO-1-Mundo-Gen-Arboles-1.jpg";
import biomas0 from "../assets/img/2Parcial/Playtesting-JO-1-Mundo-Gen-Biomas-0.jpg";
import biomas1 from "../assets/img/2Parcial/Playtesting-JO-1-Mundo-Gen-Biomas-1.png";
import enemigos0 from "../assets/img/2Parcial/Playtesting-JA-1-Enemigos.png";
import vida0 from "../assets/img/2Parcial/Playtesting-JO-1-Vida-0.png";
import vida1 from "../assets/img/2Parcial/Playtesting-JO-1-Vida-1.png";
import ataque0 from "../assets/img/2Parcial/Playtesting-JO-1-Ataque-0.png";
import ataque1 from "../assets/img/2Parcial/Playtesting-JO-1-Ataque-1.png";
import defensa0 from "../assets/img/2Parcial/Playtesting-JO-1-Defensa-0.png";
import defensa1 from "../assets/img/2Parcial/Playtesting-JO-1-Defensa-1.png";
import velocidad0 from "../assets/img/2Parcial/Playtesting-JO-1-Velocidad-0.png";
import velocidad1 from "../assets/img/2Parcial/Playtesting-JO-1-Velocidad-1.png";

import misiones0 from "../assets/img/2Parcial/Playtesting-JO-1-Misiones-0.jpg";
import misiones1 from "../assets/img/2Parcial/Playtesting-JO-1-Misiones-1.jpg";
import misiones2 from "../assets/img/2Parcial/Playtesting-JA-1-Misiones-Lose.jpg";
import misiones3 from "../assets/img/2Parcial/Playtesting-JA-1-Misiones-Win.jpg";
import movimiento0 from "../assets/img/2Parcial/Playtesting-JA-1-Persecucion.jpg"
import movimiento1 from "../assets/img/2Parcial/Playtesting-JA-1-Ruta.jpg"

import playtesting0 from "../assets/img/2Parcial/Playtesting-SA-1.jpg";
import playtesting1 from "../assets/img/2Parcial/Playtesting-SA-2.jpg";
import playtesting2 from "../assets/img/2Parcial/Playtesting-SA-JA-1.jpg";
import playtesting3 from "../assets/img/2Parcial/Playtesting-SA-JO-1.jpg";
import playtesting4 from "../assets/img/2Parcial/Playtesting-SA-JA-2.jpg";


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

        <h3><br></br>Semana 4</h3>
        <h4><br></br>21/08 - 27/08</h4>

        <Image src={semana4} rounded />

        <h2><br></br>Ejecución</h2>

          <h4><br></br>Creación del personaje principal</h4>
          <Row className="py-2">
            <Col> <Image src={blender0} rounded /> </Col>
            <Col> <Image src={blender1} rounded /></Col>
          </Row>
          <Row className="py-2">
            <Col> Modelo inicial en blanco </Col>
            <Col> Modelo final pintado </Col>
          </Row>
          
          <h4><br></br>Generación de Mundo</h4>

            <h5><br></br>Terreno</h5>
            <Row className="py-3">
              <Col> <Image src={mundo0} rounded /> </Col>
              <Col> <Image src={mundo1} rounded /> </Col>
              <Col> <Image src={mundo2} rounded /> </Col>
            </Row>
            <Row className="py-3">
              <Col> Generación procedural de mundo inicial </Col>
              <Col> Generación procedural de mundo y árboles </Col>
              <Col> Generación procedural de mundo y bordes </Col>
            </Row>

            <h5><br></br>Árboles</h5>
            <Row className="py-3">
              <Col> <Image src={mundo1} rounded /> </Col>
              <Col> <Image src={arboles0} rounded /> </Col>
              <Col> <Image src={arboles1} rounded /> </Col>
            </Row>
            <Row className="py-3">
              <Col> Generación Inicial de Árboles </Col>
              <Col> Generación de Árboles distintos </Col>
              <Col> Generación de Árboles por Bioma </Col>
            </Row>

            <h5><br></br>Biomas</h5>
            <Row className="py-3">
              <Col> <Image src={biomas0} rounded /> </Col>
              <Col> <Image src={arboles1} rounded /> </Col>
              <Col> <Image src={biomas1} rounded /> </Col>
            </Row>
            <Row className="py-3">
              <Col> Generación Inicial de Biomas </Col>
              <Col> Generación de Biomas con Árboles</Col>
              <Col> Generación de Biomas con Bordes Correctos </Col>
            </Row>

          <h4><br></br>Enemigos</h4>
            <Row className="py-3">
                  <Col> <Image src={enemigos0} rounded /> </Col>
                  <Col> <Image src={movimiento0} rounded /> </Col>
                  <Col> <Image src={movimiento1} rounded /> </Col>
            </Row>
            <Row className="py-3">
                  <Col> Enemigos - Generación</Col>
                  <Col> Enemigos - Seguimiento</Col>
                  <Col> Enemigos - Ruta</Col>
            </Row>

          <h4><br></br>Consumibles</h4>
            <h5><br></br>Curación</h5>
            <Row className="py-3">
              <Col> <Image src={vida0} rounded /> </Col>
              <Col> <Image src={vida1} rounded /> </Col>
            </Row>
            <Row className="py-3">
              <Col> Generación de Consumibles para Regenerar Vida </Col>
              <Col> Uso de consumible </Col>
              </Row>

              <h5><br></br>Velocidad</h5>
              <Row className="py-3">
                  <Col> <Image src={velocidad0} rounded /> </Col>
                  <Col> <Image src={velocidad1} rounded /> </Col>
              </Row>
              <Row className="py-3">
                  <Col> Generación de Consumibles para Aumentar la Velocidad</Col>
                  <Col> Uso de consumible </Col>
              </Row>

              <h5><br></br>Ataque</h5>
              <Row className="py-3">
                  <Col> <Image src={ataque0} rounded /> </Col>
                  <Col> <Image src={ataque1} rounded /> </Col>
              </Row>
              <Row className="py-3">
                  <Col> Generación de Consumibles  para Aumentar el Ataque </Col>
                  <Col> Uso de consumible </Col>
              </Row>

              <h5><br></br>Defensa</h5>
              <Row className="py-3">
                  <Col> <Image src={defensa0} rounded /> </Col>
                  <Col> <Image src={defensa1} rounded /> </Col>
              </Row>
              <Row className="py-3">
                  <Col> Generación de Consumibles para Aumentar la Defensa </Col>
                  <Col> Uso de consumible </Col>
              </Row>

          <h4><br></br>Misiones</h4>
            <h5><br></br>UI de Misiones</h5>
            <Row className="py-3">
              <Col> <Image src={misiones0} rounded /> </Col>
              <Col> <Image src={misiones1} rounded /> </Col>
            </Row>
            <Row className="py-3">
              <Col> UI de Misiones V1</Col>
              <Col> UI de Misiones V2 </Col>
            </Row>

            <h5><br></br>Estado de Misiones</h5>
            <Row className="py-3">
              <Col> <Image src={misiones2} rounded /> </Col>
              <Col> <Image src={misiones3} rounded /> </Col>
            </Row>
            <Row className="py-3">
              <Col> Pantalla de "Perdiste"</Col>
              <Col> Pantalla de "Ganaste" </Col>
            </Row>

        <h2><br></br>Playtesting</h2>
          <h4><br></br>Generales</h4>
            <h5><br></br>Pruebas</h5>
              <Row className="py-3">
                <Col> <Image src={playtesting0} rounded /> </Col>
                <Col> <Image src={playtesting1} rounded /> </Col>
              </Row>
            <h5><br></br>Retroalimentación</h5><br></br>
              1. Añadir ataque a los enemigos. [Solucionado]<br></br>
              2. Los enemigos empujan al jugador y lo hacen ir hacia arriba. [Solucionado]<br></br>
              3. El ataque afecta a un solo enemigo por golpe, aumentarlo. [Solucionado/En estado de prueba] <br></br>
              4. Agregar más bloques para mejorar el ambiente del juego.<br></br>
              5. Cambiar ciertos colores de los biomas, se los NPC se confunden con el fondo. [Solucionado/En estado de prueba]<br></br>
              6. La velocidad de las animaciones es muy lenta.<br></br>
              7. La velocidad de los enemigos es demasiada.

          <h4><br></br>2da Iteración</h4>
            <h5><br></br>Pruebas</h5>
              <Row className="py-3">
                <Col> <Image src={playtesting2} rounded /> </Col>
              </Row>
            <h5><br></br>Retroalimentación</h5>
              1. Alta generación de consumibles de regeneración de vida.<br></br>
              2. El personaje al tocar las esquinas de los bordes del mapa puede atravesarlo si es insistente.<br></br>
              3. Música poco variada.<br></br>
              4. No existe botón de pausa.<br></br>
              5. Deberían haber más diferencias entre los npc que solo recolores.<br></br>
              6. Añadir mayor variedad de eventos.<br></br>
              7. Se podría añadir una habilidad especial para atacar a grupos de enemigos.

              <h4><br></br>Iteración Final</h4>
              <h5><br></br>Pruebas</h5>
              <Row className="py-3">
                  <Col> <Image src={playtesting3} rounded /> </Col>
                  <Col> <Image src={playtesting4} rounded /> </Col>
              </Row>
              <h5><br></br>Retroalimentación</h5>
              1. Generación alta de orbes de velocidad (En realidad se trataba de suerte del usuario, pues todos los orbes tienen la misma probabilidad de aparecer).<br></br>
              2. A veces pasa un buen tiempo sin encontrar a un enemigo debido a que no se acercan demasiado a su ruta.<br></br>
              3. Los íconos de efectos podrían parpadear cuando están a punto de acabarse.<br></br>

      </Container>
      <br></br>
      <br></br>
    </section>
  )
}