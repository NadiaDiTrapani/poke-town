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
            <img src={details.sprites.front_default} alt='pokemon' className='pokecard__image'/>
            <p className='pokecard__name'>{details.name}</p>
            <p className='pokecard__type'>{details.types[0].type.name}</p>
        </div>
    );
}

export default PokeCard;
