import PokeCard from '../../components/PokeCard/pokeCard';
import './pokedex.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Pokedex(){
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        const getDetails = async() =>{
            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
                setDetails(response.data.results);
            } catch (err) {
                console.log(err);
            }
        };
        getDetails();
    },[id]);

    if (!details){
        return <div>Getting Pokémon... Please hold tight!</div>;
    }

    return(
        <div className='pokedex'>
            <div className='pokedex__title-cont'>
                <h1 className='pokedex__title'>Kanto region Pokédex</h1>
            </div>

            {details.map((pokemon, index) => (
                <div key={index}>
                    <PokeCard pokemon={pokemon}/>
                </div>
            ))}
            
        </div>
    );
}

export default Pokedex;