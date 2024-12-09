//calling PokeAPI with pokemon id 

import axios from "axios"

const fetchPokemonData = async (id) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const { name, sprites } = response.data;
        return {
            id,    
            name: name.charAt(0).toUpperCase() + name.slice(1),
            image: sprites.other['official-artwork']['front_default'],
        }

    } catch (error) {
        console.error('Error fetching data', error);
    }
}


const getRandomId = () => Math.floor(Math.random() * 1010) + 1;


const fetchMultiplePokemon = async (count) => {
    const promise = Array.from({ length: count }, () => fetchPokemonData(getRandomId()));
    const data = await Promise.all(promise)
    return data;
}



export default fetchMultiplePokemon;