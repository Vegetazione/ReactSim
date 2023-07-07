

import React from 'react';





function MainApp2({ titoloRicerca, autoreRicerca, setTitoloRicerca, setAutoreRicerca, cercaLibri, risultatiRicerca,setRisultatiRicerca }) {
  function Reset() {
    setTitoloRicerca("");
    setAutoreRicerca("");
    setRisultatiRicerca([]);
  }

  return (
    <div>
      <input className="border border-gray-300 rounded-md py-2 p-8 m-4  w-1/4 hover:bg-slate-500"
        type="text"
        placeholder="Inserisci il titolo del libro"
        value={titoloRicerca}
        onChange={(e) => setTitoloRicerca(e.target.value)}
      />
      <input className="border border-gray-300 rounded-md py-2 p-8 m-4  w-1/4 hover:bg-slate-500"
        type="text"
        placeholder="Inserisci l'autore del libro"
        value={autoreRicerca}
        onChange={(e) => setAutoreRicerca(e.target.value)}
      />
      <button  className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-4 px-4 rounded ml-4" onClick={cercaLibri}>Cerca</button>

      {risultatiRicerca.length > 0 ? (
        <div className="flex flex-col gap-4 mt-8">
          {risultatiRicerca.map((book) => (
            <div
              key={book.titolo}
              className="bg-white shadow-xl rounded-md p-4"
            >
              <img
                src={book.immagineCopertina}
                alt={book.titolo}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2">{book.titolo}</h2>
              <p className="text-gray-700 mb-2">Autore: {book.autore}</p>
              <p className="text-gray-700">Prezzo: {book.prezzo} €</p>
            </div>
          ))}
          <button
            onClick={Reset}
            className="bg-gray-500 hover:bg-gray-800 py-4 px-4 rounded ml-4"
          >
           <span className='text-white font-bold text-4xl'  >Reset</span> 
          </button>
        </div>
      ) : autoreRicerca === "" || titoloRicerca === "" ? (
        <span className='flex flex-col text-4xl font-semibold'>Inserisci valore</span>
      ) : (
        <p className="text-lg font-bold mt-8">Nessun libro trovato</p>
      )}
    </div>
  );
}




export default MainApp2