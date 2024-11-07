import { useState, useEffect } from 'react';

function usePokemonData(apiUrl) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

        
        try {
            
            setLoading(true);
            const response = await fetch(apiUrl);
        
            if (!response.ok) throw new Error('Error al obtener los datos');
            const result = await response.json();

            console.log(result);
            
            const detailedData = await Promise.all(

                result.results.map(async (pokemon) => {

                    const pokemonDetail = await fetch(pokemon.url);
                    const pokemonData = await pokemonDetail.json();

                    return {

                        id: pokemonData.id,
                        name: pokemonData.name,
                        types: pokemonData.types.map((t) => t.type.name),

                        image: pokemonData.sprites.front_default,

                    };
                })
            );

            setData((prevData) => [...prevData, ...detailedData]);
            setLoading(false);
      
        } catch (err) {

            setError(err.message);
            setLoading(false);
        } 
    };

    fetchData();

  }, [apiUrl]);
  
  return { data, loading, error };
};

export default usePokemonData;
