import React, { useState } from 'react';
import ListaPokemon from './components/ListaPokemon';


function App() {
  
  const [limit, setLimit] = useState(10);
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;


  const cargarMas = () => {

    setLimit(prevLimit => prevLimit + 10);

  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="py-8 bg-gradient-to-r from-yellow-400 to-orange-500 w-full text-center shadow-lg">
        <h1 className="text-5xl font-bold text-white">Lista Pokémon</h1>
      </header>

      <main className="w-full ">

        <ListaPokemon apiUrl={apiUrl} />

        <button className='fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg transition bg-yellow-400  text-white' onClick={cargarMas}>Cargar más</button>
        
      </main>

    </div>
  );
}

export default App;
