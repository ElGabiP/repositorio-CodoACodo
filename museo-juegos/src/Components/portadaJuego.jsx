import './portadaJuego.css';

function PortadaJuego ({juego}){

const imgUrl = './assets' + juego.pantalla_presentacion
   
return(
    <li className='portadaJuego'>
        <img className='portadaImagen' src={imgUrl} alt={juego.titulo} title={juego.titulo}/>
        <div>{juego.titulo}</div>
    </li>
    
)

}

export default PortadaJuego;