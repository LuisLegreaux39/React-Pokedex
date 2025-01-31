import {
    createSlice,
} from "@reduxjs/toolkit";

import { getPokemonsExtraReducer } from './thunks/getAllPokemons';
import { getPokemonExtraReducers } from './thunks/getPokemonById';
import { getAbilitiesExtraReducer } from './thunks/getAllAbilities';
import { getAllTypesExtraReducer } from './thunks/getAllTypes';
import { getMovesExtraReducers } from './thunks/getMoves';

const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: {
        home: {
            list: [],
            pokemonCount: 0,
            status: null,
            next:null,
            previous:null
        },
        details: {
            pokemon: null,
            status: null,
        },
        abilities: {
            list: [],
            status: null
        },
        types: {
            list: [],
            status: null
        },
        moves: {
            list: [],
            status: null
        }
    },
    extraReducers: builder => {
        getPokemonsExtraReducer(builder),
            getPokemonExtraReducers(builder),
            getAbilitiesExtraReducer(builder),
            getAllTypesExtraReducer(builder),
            getMovesExtraReducers(builder)
    }
})

export default pokemonSlice;

export const pokemonsSelector = state => state.pokemons.home;
export const pokemonDetailsSelector = state => state.pokemons.details;
export const typesSelector = state => state.pokemons.types;
// export const selectPokemonById = (id) => {
//     return createSelector(
//         pokemonsSelector,
//         (pokemons) => {
//             console.log({ pokemons, id })
//         }
//     )
// }
