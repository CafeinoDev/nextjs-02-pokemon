import { SimplePokemon } from ".."
import { CardPokemon } from "./CardPokemon"

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonsGrid = ({ pokemons }: Props) => {
    return (
        <div className="grid grid-cols-2 gap-4 items-center justify-center ">
            {
                pokemons.map(pokemon => (<CardPokemon key={pokemon.id} pokemon={ pokemon } />))
            }
        </div>
    )
}
