import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: 'Favorites',
 description: 'Pokemons list',
};

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <span className="text-4xl my-2">Favorite pokemons <small className="text-blue-500">Global state</small></span>

            <PokemonsGrid pokemons={ [] } />
        </div>
    );
}
