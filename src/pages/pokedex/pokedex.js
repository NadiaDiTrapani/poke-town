import PokeCard from '../../components/PokeCard/pokeCard';
import './pokedex.scss'

// import axios from 'axios';

function Pokedex(){
    return(
        <div className='pokedex'>
            <div className='pokedex__title-cont'>
                <h1 className='pokedex__title'>Kanto region pokédex</h1>
            </div>

            <PokeCard/>
        </div>
    )
}

export default Pokedex;