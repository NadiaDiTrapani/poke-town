import './townPage.scss';
import SubNav from "../../components/SubNav/subNav";
import map from '../../assets/images/CeruleanCityCrop-icon.png'
import PokeCard from '../../components/PokeCard/pokeCard';
import Pokedex from 'pokedex-promise-v2';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CeruleanCityPage() {
    const P = new Pokedex();
    const [details, setDetails] = useState(null);
    const [pokemonEncounters, setPokemonEncounters] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
                setDetails(response.data.results);
            } catch (err) {
                console.log(err);
            }
        };
        getDetails();
    }, []);

    useEffect(() => {
        P.getLocationAreaByName("cerulean-city-area")
            .then((response) => {
                setPokemonEncounters(response.pokemon_encounters);
            })
            .catch((error) => {
                console.log('There was an ERROR: ', error);
            });
    }, [P]);

    if (!details || pokemonEncounters.length === 0) {
        return <div>Getting Pokémon... Please hold tight!</div>;
    }

    return (
        <div className='town'>
            <SubNav />
            <div className='town__map-cont'> <img src={map} alt='map' className='town__map'/> </div>
            <div className='town__card-cont'>
                <div className='town__title-cont'>
                    <h1 className='town__title'>cerulean city</h1>
                </div>
                
                <div className="town__grid">
                    {pokemonEncounters.map((encounter, index) => {
                        // Find the details of the encountered Pokemon
                        const pokemonDetails = details.find(pokemon => pokemon.name === encounter.pokemon.name);
                        if (!pokemonDetails) return null; // If details not found, skip
                        return (
                            <div key={index} className="pokemon-card">
                                <PokeCard pokemon={pokemonDetails} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CeruleanCityPage;
