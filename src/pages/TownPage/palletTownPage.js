import './townPage.scss';
import SubNav from "../../components/SubNav/subNav";
import map from '../../assets/images/PalletTownCrop-icon.png';
import PokeCard from '../../components/PokeCard/pokeCard';

import axios from 'axios';
import { useEffect, useState } from 'react';

function PalletTownPage() {
    const [details, setDetails] = useState(null);
    const [pokeData, setPokeData] = useState(null);

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
        const getPokeData = async () => {
            try {
                // Iterate through each Pokemon in the details array and fetch its data
                if (details) {
                    const promises = details.map(async pokemon => {
                        const response = await axios.get(pokemon.url);
                        return response.data;
                    });
                    const pokemonData = await Promise.all(promises);
                    setPokeData(pokemonData);
                }
            } catch (err) {
                console.log(err);
            }
        };

        getPokeData();
    }, [details]);

    if (!details) {
        return <div>Getting Pokémon... Please hold tight!</div>;
    }


    return (
        <div className='town'>
            <SubNav />
            <div> <img src={map} alt='map' className='town__map'/> </div>
            <div>
                <div className='town__title-cont'>
                    <h1 className='town__title'>pallet town</h1>
                </div>
                {details.map((pokemon, index) => (
                    <div key={index}>
                        <PokeCard pokemon={pokemon} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PalletTownPage;
