import './pokeCard.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PokeCard({ pokemon }) {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get(pokemon.url);
                setDetails(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        getDetails();
    }, [pokemon]);

    if (!details) {
        return <div>Getting Pokémon... Please hold tight!</div>;
    }

    return (
        <div className='pokecard'>
            <p className='pokecard__id'>{details.id}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`} alt='pokemon' className='pokecard__image'/>
            <p className='pokecard__name'>{details.name}</p>
            <div className='pokecard__types'>
                {details.types.map((type, index) => (
                    <p key={index} className='pokecard__type'>{type.type.name}</p>
                ))}
            </div>
        </div>
    );
}

export default PokeCard;
