import Image from "next/image"
import { SimplePokemon } from ".."
import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";

interface Props {
    pokemon: SimplePokemon
}

export const CardPokemon = ({ pokemon }: Props) => {
    const { name, id } = pokemon;
    
    return (
        <div className="relative flex mx-auto w-full max-w-[26rem] flex-col rounded bg-white text-gray-700 shadow-lg h-full justify-between p-4">
            <div className="relative py-4 overflow-hidden rounded-xl text-white mx-auto my-auto">
                <Image
                    src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg` }
                    width={100}
                    height={100}
                    alt={ name }
                    priority={ false }
                />
            </div>
            <div className="absolute left-2 top-2 flex items-center gap-1.5 bg-blue-100 rounded p-2 cursor-pointer hover:scale-110 transition-all">
                <div className="text-red-500 antialised text-2xl">
                    <IoHeartOutline width={ 40 } height={ 40 } />
                </div>
                <span className="text-sm text-slate-600 font-semibold">
                    No es favorito
                </span>
            </div>
            <div className="mt-2">
                <div className="mb-3 flex items-center justify-between">
                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 capitalize">
                        { name }
                    </h5>
                    <Link href={`/dashboard/pokemons/${ name }`} className="bg-blue-950 text-white rounded px-2 py-1 hover:scale-110 transition-all">Ver pokemon</Link>
                </div>
            </div>
        </div>
    )
}
