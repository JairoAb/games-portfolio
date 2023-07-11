import { Container, Row, Col, Image, Card } from "react-bootstrap";

import idea1 from "../assets/img/idea1.jpg";
import idea2 from "../assets/img/idea2.jpg";
import idea3 from "../assets/img/idea3.jpg";
import ideafinalv1 from "../assets/img/ideaganadora.jpg";
import ideafinalv2 from "../assets/img/ideaganadoraV2.jpg";
import ideafinalv3 from "../assets/img/ideaganadoraV3.jpg";
import playtestingV22 from "../assets/img/playtestingV2-2.jpg";
import playtestingV2 from "../assets/img/playtestingV2.jpg";
import playtestingV1 from "../assets/img/playtestingV1.jpg";
import playtestingV12 from "../assets/img/playtestingV1-2.jpg";
import playtestingV3 from "../assets/img/playtestingV3.jpg";
import playtestingV32 from "../assets/img/playtestingV3-2.jpg";
import cartaEquipo from "../assets/img/CartasDeEquipo.jpg";
import cartaEvento from "../assets/img/CartasDeEquipoEvento.jpg";
import cartaEquipoV1 from "../assets/img/EquipoV1.jpeg";
import cartaEventoV1 from "../assets/img/EventoV1.jpeg";
import cartaEquipoVacias from "../assets/img/CartasDeEquipoVacias.jpg";
import zonasConquistables from "../assets/img/zonasConquistables.jpg";
import fosasComunes from "../assets/img/fosasComunes.jpg";

import { CustomCard } from "../components/CustomCard";

import './PrimerParcial.css'

export const PrimerParcial = () => {
  return (
    <section className="primer-parcial" id="primer-parcial">
      <Container>
        <h1 className="py-2" >REALMS WAR</h1>
        <p class="descripcion">Es un juego de mesa, de 2 a 4 personas, donde asumirás el papel de un líder
        en un reino. Deberás pelear contra los demás líderes y conquistar terrenos para añadirlos a tu reino.<br></br>
        En esta página encontrarás todo el proceso de ideación y creación por el que se paso 
        para el diseño y desarrollo del juego.</p>


        <h2 className="py-2" >Ideación</h2>
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

        <h2 className="py-2" >Prototipos</h2>

        <Row className="py-2">
          <Col xs={6} md={8}> 
            <Image src={idea1} rounded />
          </Col>
          <Col xs={12} md={4}> 
          <br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>Idea 3</h2>
            <p>Construir dentro de un mapa un pueblo, villa o casa de la manera más rápida y segura posible con tiempo limitado.
            <br></br><br></br>Por Esteban Pulley</p>
          </Col>
        </Row>

        <Row className="py-2">
          <Col xs={12} md={4}> 
          <br></br><br></br><br></br><br></br>
            <h2>Idea 6</h2>
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
          <h2>Idea 7</h2>  
          <p>Conquistar el reino de un demonio poderoso matando a todos sus soldados.
          <br></br><br></br>Por Jairo Alcívar - SELECCIONADA</p>
        </Col>
        </Row>
        <h2><br></br>Idea Final</h2>
        <h3>Versión #1</h3>
        <h4>Tablero</h4>
        <Image src={ideafinalv1} rounded />

        <h4><br></br>Cartas de Evento y de Equipo<br></br></h4>

        <Row className="py-2">
          <Col xs={6} md={6}> 
            <Image src={cartaEventoV1} rounded />
          </Col>
          <Col xs={6} md={6}> 
            <Image src={cartaEquipoV1} rounded />
          </Col>
        </Row>
        <Row className="py-2">
          <Col xs={6} md={6}> 
            Cartas de Evento.
          </Col>
          <Col xs={6} md={6}> 
            Cartas de Equipo.
          </Col>
        </Row> 

        <h4><br></br>Reglas</h4>
        <p class="descripcion">
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
        9.- Una vez un seguidor se queda muera en batalla se dirige a la fosa común y no se puede utilizar por el resto 
        de la partida, con la única excepción que sea revivido con alguna carta de evento.<br></br>
        10.- El movimiento se realiza con un solo dado de seis caras.<br></br>
        11.- Para conquistar una zona debes quedarte durante 3 turnos en zonas las zonas designadas para conquista.
        Una vez conquistada, la zona puede ser reclamada nuevamente por otro jugador si sales de la zona y otro se
        queda en la misma durante 3 turnos o gane en una batalla.<br></br>
        </p>

        <h4><br></br>Playtesting</h4>
        <Row className="py-2">
          <Col xs={6} md={6}> 
            <Image src={playtestingV1} rounded />
          </Col>
          <Col xs={6} md={6}> 
            <Image src={playtestingV12} rounded />
          </Col>
        </Row> 
        <Row className="py-2">
          <Col xs={6} md={6}> 
            Partida de los miembros del equipos - 1.
          </Col>
          <Col xs={6} md={6}> 
            Partida de los miembros del equipos - 2.
          </Col>
        </Row> 


        <h5><br></br>Retroalimentación</h5>
        <p class="descripcion">
        <b>JUGADORES: </b> Todos los miembros del equipo.<br></br>
        <b>PARTIDAS JUGADAS: </b> 3.<br></br><br></br>
        1.- Es difícil mantener un control sobre el equipo de los seguidores. <br></br>
        2.- El juego se siente lento por el poco avance de los seguidores debido al uso de un solo dado. <br></br>
        3.- Las cartas de equipo deberían ser equipables a cualquier seguidor e intercambiables. <br></br>
        4.- Ciertos reinos parecieran tener mayor probabilidad de conquista pues tienen más cerca las zonas de conquista.<br></br>
        5.- Existe poca variedad de eventos y no existe ninguno que facilite la movilidad.<br></br>
        6.- No hay manera de mantener el control de las zonas conquistadas.<br></br> <br></br>
        </p>

        <h3>Versión #2</h3>
        <h4>Tablero</h4>
        <Image src={ideafinalv2} rounded />
        <h4><br></br>Cartas de Evento y de Equipo<br></br></h4>
        <Row className="py-2">
          <Col xs={6} md={6}> 
            <Image src={cartaEvento} rounded />
          </Col>
          <Col xs={6} md={6}> 
          <Image src={cartaEquipo} rounded />
          </Col>
        </Row>
        <Row className="py-2">
          <Col xs={6} md={6}> 
            Cartas de Evento.
          </Col>
          <Col xs={6} md={6}> 
            Cartas de Equipo.
          </Col>
        </Row> 

        <h4><br></br>Cambios</h4>
        <p class="descripcion">
        1.- Se establece que cada jugador tiene una carta de referencia para el control de estadísticas de 
        de ataque y defensa por seguidor. <br></br>

        2.- El movimiento ahora se realiza con dos dados de seis caras. <br></br>

        3.-  Un seguidor sale al iniciar la partida, el resto de los seguidores podrá salir al campo siempre
        y cuando salga, al menos, un número 6 en el lanzamiento de los dados. En caso de obtener un 6
        el jugador elije si sacar un seguidor o proseguir con el movimiento de uno de sus seguidores
        en el campo.<br></br>

        4.- Se establece que las cartas obtenidas en el campo, ya sean estas de puntos de ataque o de defensa 
        sean asignados a cualquier seguidor. <br></br>

        5.- Se establece que todos los seguidores tienen como estadísticas base 3 puntos de 
        ataque y 3 puntos de defensa. <br></br>

        6.- Existen cartas de ataque que ocupan 2 espacios de equipo (Representadas por 2 espadas) y otras que
        ocupan solo 1 espacio de equipo (Representadas por 1 espada). El máximo de ataque extra que se puede obtener
        mediante las cartas de equipo es +3 y mínimo +1. El máximo de defensa extra que se puede obtener
        mediante las cartas de equipo es +4 y mínimo +3.<br></br>

        7.- Se añaden eventos de teletransporte. El jugador decide si usar o no la carta. El jugador solo puede
        teletransportar al seguidor que cayó en la casilla de evento a las casillas de teletransporte designadas 
        (Color Rojo)<br></br>

        8.- Se añadieron más variantes positivas y negativas de los eventos existentes.<br></br>

        9.- Se añaden banderines para marcar las zonas ya conquistadas.<br></br>
        </p>
      
        <h4><br></br>Playtesting</h4>

        <Row className="py-2">
          <Col xs={6} md={6}> 
            <Image src={playtestingV2} rounded />
          </Col>
          <Col xs={6} md={6}> 
            <Image src={playtestingV22} rounded />
          </Col>
        </Row> 
        <Row className="py-2">
          <Col xs={6} md={6}> 
            Partida de los miembros del equipos.
          </Col>
          <Col xs={6} md={6}> 
            Partida con los estudiantes de ESPOL.
          </Col>
        </Row> 

        <h5><br></br>Retroalimentación</h5>
        <p class="descripcion">
        <b>JUGADORES: </b> Miembros del equipo.<br></br>
        <b>PARTIDAS JUGADAS: </b> 2.<br></br><br></br>

        <b>JUGADORES: </b> Un miembro del equipo y 3 estudiantes de ESPOL.<br></br>
        <b>PARTIDAS JUGADAS: </b> 1.<br></br><br></br>
          1.- Los jugadores sienten que dos reinos tienen más posibilidades de ganar debido a su cercanía
          con las zonas de conquista.<br></br>

          2.- No se activaron muchas casillas de evento.<br></br>

          3.- Para quienes no conocían las mecánicas de salida de fichas en el parchís, se les dificultó un
          poco la mecánica de salida de los seguidores y el su movimiento.<br></br>

          4.- Las cartas de evento y de equipo deberían tener la parte trasera del mismo color que las casillas
          para una mejor compresión de la casilla activada.<br></br> <br></br>

        </p>

        <h3>Versión Final</h3>
        <h4>Tablero</h4>
        <Image src={ideafinalv3} rounded />
        <h4><br></br>Cartas de Evento y de Equipo<br></br></h4>
        <Row className="py-2">
          <Col xs={6} md={6}> 
            <Image src={cartaEvento} rounded />
          </Col>
          <Col xs={6} md={6}> 
            <Image src={cartaEquipo} rounded />
          </Col>
        </Row>
        <Row className="py-2">
          <Col xs={6} md={6}> 
            Cartas de Evento.
          </Col>
          <Col xs={6} md={6}> 
            Cartas de Equipo.
          </Col>
        </Row> 

        <h4><br></br>Cambios</h4>
        <p class="descripcion">
        1.- Se actualiza el mapa para que todos los jugadores se encuentren en igualdad de condiciones al iniciar
        la partida. <br></br>

        2.- Una de las zonas conquistables ahora es solo accesible mediante el uso de los portales de teletransporte. <br></br>

        3.- Ahora al sacar el numero 6 el seguidor se mueve a una zona de salida, desde ahí se mueve normalmente con 
        los dados.<br></br>

        4.- Las casillas de eventos y equipo fueron reajustadas para aparecer con mayor frecuencia.<br></br>
        </p>

        <h4><br></br>Reglas Finales</h4>
        <p class="descripcion">
        <b>GENERALES </b><br></br>
        1.-	El número mínimo de jugadores es dos y el máximo cuatro.<br></br>
        2.-	El juego sigue el orden de la manecillas del reloj, el primer jugador en empezar se 
        elige por medio del número más alto obtenido al tirar los dados.<br></br>
        3.-	Durante toda la partida se utilizan dos dados de 6 caras.<br></br>
        4.-	Cada jugador cuenta con cuatro seguidores. <br></br>
        5.-	Los seguidores (exceptuando al primero) solo podrán salir al campo de batalla cuando 
        el jugador obtenga 6 en uno de los dados que lance. El otro dado indicará la cantidad de 
        fichas que desplaza al seguidor. <br></br>
        6.-	En cada turno el jugador debe lanzar los dos dados, estos indican la cantidad de fichas 
        que se puede mover uno o más seguidores. Existen dos posibilidades:<br></br>
        &nbsp;&nbsp;&nbsp; 6.1.-	Utilizar la suma de los dos dados para mover a un único seguidor.<br></br>
        &nbsp;&nbsp;&nbsp;6.2.-	Utilizar el número obtenido en un dado para mover  a un seguidor y el número 
        del otro dado para mover a otro seguidor. <br></br>
        7.-	El movimiento de los seguidores en el tablero es libre, es decir, el jugador tiene control 
        total de hacia dónde se dirige su seguidor.<br></br>
        8.-	En el tablero del mapa existen casillas de eventos (color amarillo), estos permiten realizar 
        distintas acciones como revivir a un seguidor, volver a tirar el dado, entre otras. Al caer en 
        estas casillas el jugador debe tomar una carta del mazo de eventos, no es necesario mostrarla al 
        resto de jugadores. Existen cartas de evento que  puede pueden ser conservadas para turnos 
        posteriores (cartas de cambio de estadísticas y huida de combate). <br></br>
        9.-	Existen eventos de teletransporte, el jugador decidirá si usarlo o desecharlo al momento de 
        obtenerlo. El seguidor que active el evento podrá ser únicamente transportado a las casillas 
        designadas (color rojo).<br></br>
        10.-	En el tablero también existen las cartas de equipo, obtenidas que se asignan a los seguidores 
        para aumentar sus estadísticas de ataque y defensa.<br></br>
        11.-	Las cartas de equipo solo pueden ser asignados a los seguidores que se encuentren dentro del 
        campo de juego. Todos los seguidores empiezan el juego con +3 de ataque y +3 de defensa. <br></br>
        12.-	Una vez un seguidor se queda pierde un combate se dirige al cementerio y no se puede utilizar 
        por el resto de la partida, con la única excepción que sea revivido con alguna carta de evento. 
        Si un jugador pierde a todos sus seguidores, queda eliminado del juego y su base se convierte en 
        un nuevo punto a conquistar. <br></br><br></br>

        <b>¿CÓMO GANAR? </b><br></br>
        1.-	El objetivo principal es conquistar las zonas, el jugador que logre conquistar dos 
        zonas de forma simultánea gana el juego. <br></br>
        2.-	Para conquistar una zona es necesario que el seguidor se encuentre dentro de la zona 
        por tres turnos consecutivos.<br></br>
        3.-	Las zonas se pueden perder si el seguidor se retira de la misma y otra facción la reclama 
        o muere en combate.<br></br><br></br>
        <Image src={zonasConquistables} rounded />
        Zonas Conquistables
        <br></br><br></br>


        <b>REGLAS DE COMBATE </b><br></br>
        1.-	Cada seguidor puede ser equipado con cartas de equipo que aumentarán las estadísticas de ataque 
        y defensa del seguidor, mismos que se utilizarán después en los combates que se produzcan en el campo 
        al cruzarse por los caminos. <br></br>
        2.-	Los combates se producen cuando dos jugadores se cruzan por algunos de los caminos del tablero. 
        Los combates son obligatorios y el atacante es el jugador quien posee el turno. <br></br>
        3.-	Para el atacante consideramos sus puntos de ataque mientras que el otro jugador debe considerar
         su puntos de defensa. Si la estadística de ataque del atacante es mayor que la estadística de defensa 
         del otro jugador, entonces el seguidor del jugador atacado muere y se dirige a la fosa común más cercana. 
         Caso contrario, el atacante pierde y su seguidor se va a la fosa común. En el caso de un empate cada 
         jugador lanza un dado de manera simultánea y quién saque el número más alto gana. El ganador del combate 
         puede robar una carta de equipo que tenga asignado el perdedor, su equipo restante vuelve a la baraja.<br></br><br></br>
        <Image src={fosasComunes} rounded />
        Fosas Comunes
        <br></br><br></br>
        
        4.- Las cartas de ataque contiene la indicación de “1 mano” y “2 manos” (dependiendo del ícono 
        con el que vaya acompañada la carta) , en el caso de obtener una carta de ataque de dos manos 
        no es posible que el jugador siga equipando cartas de  ataque. Por ejemplo: Si tome una carta +1 
        de ataque de una mano, aún puedo tomar otra carta dado que conservo una mano libre (este espacio 
        puede cubrirse con una carta de ataque o defensa a elección del jugador).<br></br>
        5.- Los puntos de ataque y defensa deben ser asignados a algún seguidor, estos se registran 
        en cartas etiquetadas para cada seguidor. Cada jugador debe tener cuatro cartas.<br></br><br></br>

        <Row className="py-2">
          <Col xs={3} md={3}> 
            &nbsp;&nbsp;&nbsp;
          </Col>
          <Col xs={6} md={6}> 
            <Image src={cartaEquipoVacias} rounded />
          </Col>
          <Col xs={3} md={3}> 
            &nbsp;&nbsp;&nbsp;
          </Col>
        </Row> 
        <Row className="py-2">
          <Col xs={3} md={3}> 
            &nbsp;&nbsp;&nbsp;
          </Col>
          <Col xs={6} md={6}> 
            Cartas para Control de Equipo
          </Col>
          <Col xs={3} md={3}> 
            &nbsp;&nbsp;&nbsp;
          </Col>
        </Row> 
        
        <br></br>
        </p>

        <h4><br></br>Playtesting</h4>
        
        <Row className="py-2">
          <Col xs={6} md={6}> 
            <Image src={playtestingV3} rounded />
          </Col>
          <Col xs={6} md={6}> 
            <Image src={playtestingV32} rounded />
          </Col>
        </Row> 
        <Row className="py-2">
          <Col xs={6} md={6}> 
            Partida de familiares - 1.
          </Col>
          <Col xs={6} md={6}> 
            Partida de familiares - 2.
          </Col>
        </Row> 

        <h5><br></br>Retroalimentación</h5>
        <p class="descripcion">
        <b>JUGADORES: </b> Familiares de un miembro del equipo<br></br>
        <b>PARTIDAS JUGADAS: </b> 2.<br></br><br></br>
        1.- Existe la posibilidad de que alguien tenga la suerte de al girar en una misma zona
        activar muchas casillas de evento y de equipo. <br></br>
        2.- El sistema de 1 y 2 manos en las cartas de equipo de ataque fueron un poco confusas al inicio. <br></br>
        <br></br>
        </p>
      </Container>

    </section>
  )
}