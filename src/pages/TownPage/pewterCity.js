import './townPage.scss';
import SubNav from "../../components/SubNav/subNav";
import map from '../../assets/images/PewterCityCrop-icon.png'
import PokeCard from '../../components/PokeCard/pokeCard';
import Pokedex from 'pokedex-promise-v2';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PewterCityPage() {
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
        P.getLocationAreaByName("kanto-route-2-north-towards-pewter-city")
            .then((response) => {
                setPokemonEncounters(response.pokemon_encounters);
            })
            .catch((error) => {
                console.log('There was an ERROR: ', error);
            });
    }, [P]);

    if (!details ) {
        return <div>Getting Pokémon... Please hold tight!</div>;
    }

    // P.getLocationAreasList()
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log('There was an ERROR: ', error);
    // });

    return (
        <div className='town'>
            <SubNav />
            <div> <img src={map} alt='map' className='town__map'/> </div>
            <div className='town__card-cont'>
                <div className='town__title-cont'>
                    <h1 className='town__title'>pewter city</h1>
                </div>
                <div className="pokemon-cards">
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

export default PewterCityPage;
