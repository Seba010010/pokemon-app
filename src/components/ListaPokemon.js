import React from 'react';
import usePokemonData from '../hooks/useDatosPokemon';


function ListaPokemon ({ apiUrl }) {

  const { data, loading, error } = usePokemonData(apiUrl);

  if (loading) return <p className="text-center text-lg font-bold animate-pulse text-yellow-500">Cargando...</p>;

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (

    <div  className="p-5 bg-gradient-to-b from-blue-500 via-purple-600 to-indigo-900 min-h-screen pb-20">

      <p className="text-center text-white text-lg mb-6">Pokémon encontrados:{" "}
        <span className="font-bold text-yellow-300">{data.length}</span>
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {data.map((pokemon) => (

          <li

            key={pokemon.id}
            
            className={`relative text-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 hover:rotate-1 flex flex-col items-center border border-700`}

            style={{
              animation: "fadeIn 0.8s forwards",
            }}
          >

          <img
            src={pokemon.image}        
            className="w-32 h-32 object-contain mb-4 drop-shadow-lg transition-transform hover:scale-110"
            loading="lazy"
          />

          <p className="text-2xl font-semibold capitalize mb-2">
            {pokemon.name}
          </p>

          <div className="flex flex-wrap justify-center space-x-2 mb-4">
              {pokemon.types.map((type) => (
                <span
                  key={type}
                  className="text-xs font-bold rounded-full px-3 py-1"
                >
                  {type}
                </span>
              ))}

            </div>

          </li>
        
        ))}
      </ul>
    </div>

  );
}

export default ListaPokemon;
