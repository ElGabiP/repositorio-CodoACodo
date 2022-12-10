
import PortadaJuego from './portadaJuego';
import juegos from '../juegos.json';
import './presentacionJuegos.css';

function presentacionJuegos() {
    return (
        <ul className='presentacion-juego'>

            {juegos.map((juego) => (

                <PortadaJuego key={juego.id} juego={juego} />

            ))

            }
        </ul>

    );
}

export default presentacionJuegos;