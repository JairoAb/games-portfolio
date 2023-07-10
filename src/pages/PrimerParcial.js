import { Container, Row, Col, Image, Card } from "react-bootstrap";

import idea1 from "../assets/img/idea1.jpg";
import idea2 from "../assets/img/idea2.jpg";
import idea3 from "../assets/img/idea3.jpg";
import ideafinalv1 from "../assets/img/ideaganadora.jpg";
import ideafinalv2 from "../assets/img/ideaganadoraV2.jpg";
import ideafinalv3 from "../assets/img/ideaganadoraV3.jpg";
import playtesting from "../assets/img/playtesting.jpg";
import playtestingV2 from "../assets/img/playtestingV2.jpg";
import playtestingV1 from "../assets/img/playtestingV1.jpg";
import cartaEquipo from "../assets/img/CartasDeEquipo.jpg";
import cartaEvento from "../assets/img/CartasDeEquipoEvento.jpg";

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

            <CustomCard title={"Idea 3 - SELECCIONADA"} ide1={"Construir"} ide2={"Mapa"} ide3={"Seguro"} text={"Construir dentro de un mapa un pueblo, villa o casa de la manera más rápida y segura posible con tiempo limitado."} />

            <CustomCard title={"Idea 5"} ide1={"Sobrevivir"} ide2={"Espada"} ide3={"Volador"} text={"Sobrevivir en un mundo con una espada mágica con enemigos voladores."} />

            <CustomCard title={"Idea 7 - SELECCIONADA"} ide1={"Conquistar"} ide2={"Demonio"} ide3={"Poderoso"} text={"Conquistar el reino de un demonio poderoso matando a todos sus soldados."} />
            
            
            
            <CustomCard title={"Idea 9"} ide1={"Obtener"} ide2={"Armadura"} ide3={"Grande"} text={"Obtener una armadura grande a través de ir matando espiritus."} />

            <CustomCard title={"Idea 11"} ide1={"Conducir"} ide2={"Amigos"} ide3={"Gigante"} text={"Conducir y llevar a amigos y familiares a sus casas en una ciudad gigante."} />
          </Col>
          <Col xs={6}>
            <CustomCard title={"Idea 2"} ide1={"Descubrir"} ide2={"Hermano"} ide3={"Ilimitado"} text={"Descubrir el paradedo de mi hermano perdido en un tiempo Ilimitado"} />

            <CustomCard title={"Idea 4"} ide1={"Pelear"} ide2={"Tortuga"} ide3={"Ilimitado"} text={"Pelear en un reino con una tortuga con un poder ilimitado."} />
            
            <CustomCard title={"Idea 6  - SELECCIONADA"} ide1={"Cocinar"} ide2={"Lobo"} ide3={"Mágico"} text={"Hombre lobo que cocina con elementos de un bosque mágico para vender comida."} />
            
            <CustomCard title={"Idea 8"} ide1={"Descubrir"} ide2={"Hermano"} ide3={"Iimitado"} text={"Descubrir el paradero de mi hermano perdido con un tiempo ilimitado."} />
            
            <CustomCard title={"Idea 10"} ide1={"Defender"} ide2={"Rey"} ide3={"Inteligente"} text={"Defender la torre de un rey de forma inteligente colocando limitadas trampas para los enemigos."} />
            
            <CustomCard title={"Idea 12"} ide1={"Explorar"} ide2={"Universidad"} ide3={"Abandonada"} text={"Explorar una universidad abandonada con misterios por descubrir."} />
          </Col>
        </Row>

        <h1 className="py-2" >Bocetos</h1>

        <Row className="py-2">
          <Col xs={6} md={8}> 
            <Image src={idea1} rounded />
          </Col>
          <Col xs={12} md={4}> 
          <br></br><br></br><br></br><br></br><br></br><br></br>
            <h1>Idea 3</h1>
            <p>Construir dentro de un mapa un pueblo, villa o casa de la manera más rápida y segura posible con tiempo limitado.
            <br></br><br></br>Por Esteban Pulley</p>
          </Col>
        </Row>

        <Row className="py-2">
          <Col xs={12} md={4}> 
          <br></br><br></br><br></br><br></br><br></br>
            <h1>Idea 6</h1>
            <p>Hombre lobo que cocina con elementos de un bosque mágico para vender comida.
            <br></br><br></br>Por José Macías</p>
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
          <h1>Idea 7</h1>  
          <p>Conquistar el reino de un demonio poderoso matando a todos sus soldados.
          <br></br><br></br>Por Jairo Alcívar - SELECCIONADA</p>
        </Col>
        </Row>
        <h1><br></br>Idea Final</h1>
        <h2>Versión #1</h2>
        <h3>Tablero</h3>
        <Image src={ideafinalv1} rounded />
        <h3><br></br>Cartas de Evento y de Equipo<br></br></h3>
        <h3><br></br>Reglas</h3>
        <p>
        1.- El juego requiere un mínimo de 2 jugadores y un máximo de 4. <br></br>

        2.- El objetivo principal es conquistar zonas, el jugador que conquiste dos zonas de forma simultánea 
        gana el juego. <br></br>

        3.- Cada jugador cuenta con 4 seguidores para conseguir el objetivo del item anterior. <br></br>

        4.- El juego sigue un orden de la manecillas del reloj, el primer jugador en jugar se elije por medio 
        del número más alto obtenido a tirar el dado. <br></br>

        5.- Cada seguidor puede ser equipado con puntos de ataque y defensa, mismos que utilizará después en 
        los combates que se produzcan en el campo al cruzarse por lo caminos que se van a las zonas por conquistar. <br></br>

        6.- Los puntos de ataque y defensa se obtiene a través de un sistema de cartas. Las cartas de equipo 
        se consiguen al caer en casillas de equipo (Color Azul). <br></br>

        7.- Existen también las cartas de eventos que permiten realizar determinadas acciones a lo largo de la partida, 
        tales como revivir a un seguidor o asignar puntos de ataque o de defensa. El jugador tiene la libertad de 
        mantener o desechar la carta. Una vez usadas vuelven al mazo de cartas de evento.
        Las cartas de evento se consiguen al caer en casillas de evento (Color Amarillo).<br></br>

        8.- Los combates son obligatorios y se realizan por parte del jugador que tiene el turno como el atacante. Quien
        gane los combates depende del equipo y cartas de eventos activas durante el mismo. Se combate las estadístisca
        de ATAQUE del atacante versus las estadísticas de DEFENSA del atacado. En caso de que el ATACANTE tenga ATAQUE
        mayor a la DEFENSA del ATACADO, gana el ATACANTE. Si el ATACADO tiene DEFENSA mayor al ATAQUE del ATACANTE, 
        gana el ATACADO. Si ambos tienen las mismas estadísticas se decide mediante un lanzamiento simultáneo de dados,
        quien saque el número mayor será el ganador. Al perder un combate el ganador puede obtener uno de los objetos
        equipables del perdedor, los demás objetos vuelven al mazo de objetos.<br></br>

        9.- Una vez un seguidor se queda muera en batalla se dirige al cementerio y no se puede utilizar por el resto 
        de la partida, con la única excepción que sea revivido con alguna carta de evento.<br></br>

        10.- El movimiento se realiza con un solo dado de seis caras.<br></br>

        11.- Para conquistar una zona debes quedarte durante 3 turnos en zonas las zonas designadas para conquista.
        Una vez conquistada, la zona puede ser reclamada nuevamente por otro jugador si sales de la zona y otro se
        queda en la misma durante 3 turnos o gane en una batalla.<br></br>
        </p>

        <h2>Versión #2</h2>
        <h3>Tablero</h3>
        <Image src={ideafinalv2} rounded />
        <h3><br></br>Cartas de Evento y de Equipo<br></br></h3>
        <Row className="py-2">
          <Col xs={6} md={6}> 
            <Image src={cartaEvento} rounded />
          </Col>
          <Col xs={6} md={6}> 
            <Image src={cartaEquipo} rounded />
          </Col>
        </Row>
        <h3><br></br>Cambios</h3>
        <p>
        1.- Se establece que cada jugador tiene una carta de referencia para el control de estadísticas de 
        de ataque y defensa por seguidor. <br></br>

        2.- El movimiento ahora se realiza con dos dados de seis caras. <br></br>

        3.-  Un seguidor sale al iniciar la partida, el resto de los seguidores podrá salir al campo siempre
        y cuando salga, al menos, un número 6 en el lanzamiento de los dados. En caso de obtener un 6
        el jugador elije si sacar un seguidor o proseguir con el movimiento de uno de sus seguidores
        en el campo.<br></br>

        4.- Se establece que las cartas obtenidas en el campo, ya sean estás de puntos de ataque o de defensa 
        sean asignados a cualquier seguidor. <br></br>

        5.- Se establece que todos los seguidores tienen como estadísticas base 3 puntos de 
        ataque y 3 puntos de defensa. <br></br>

        6.- Existen cartas de ataque que ocupan 2 espacios de equipo (Representadas por 2 espadas) y otras que
        ocupan solo 1 espacio de equpi (Representadas por 1 espada). El máximo de ataque extra que se puede obtener
        mediante las cartas de equipo es +3 y mínimo +1. El máximo de defensa extra que se puede obtener
        mediante las cartas de equipo es +4 y mínimo +3.<br></br>

        7.- Se añaden eventos de teletransporte. El jugador decide si usar o no la carta. El jugador solo puede
        teletransportar al seguidor que cayó en la casilla de evento a las casillas de teletransporte designadas 
        (Color Rojo)<br></br>

        8.- Se añadieron más variantes positivas y negativas de los eventos existentes.<br></br>

        9.- Existen cartas de evento de acción no instantánea que el jugador puede guardar para ser
        usadas en el momento que le parezca idóneo.<br></br>

        10.- Se añaden banderines para marcar las zonas ya conquistadas.<br></br>
        </p>

        <h2>Versión Final</h2>
        <h3>Tablero</h3>
        <Image src={ideafinalv3} rounded />
        <h3><br></br>Cartas de Evento y de Equipo<br></br></h3>
        <Row className="py-2">
          <Col xs={6} md={6}> 
            <Image src={cartaEvento} rounded />
          </Col>
          <Col xs={6} md={6}> 
            <Image src={cartaEquipo} rounded />
          </Col>
        </Row>
        <h3><br></br>Cambios</h3>
        <p>
        1.- Se actualiza el mapa para que todos los jugadores se encuentren en igualdad de condiciones al iniciar
        la partida. <br></br>

        2.- Una de las zonas conquistables ahora es solo accesible mediante el uso de los portales de teletransporte.
         <br></br>

        </p>

        <h1>Playtesting</h1>
        <h3><br></br>Versión #1</h3>
        <Image src={playtestingV1} rounded />
        <h3><br></br>Versión #2</h3>
        <Image src={playtesting} rounded />
        <h3><br></br></h3>
        <Image src={playtestingV2} rounded />
      </Container>

    </section>
  )
}