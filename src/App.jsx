import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./component/Header"
import MainApp2 from './component/MainApp2'
import Footer from './component/Footer'

// Definizione degli oggetti libro
const libri = [
  {
    titolo: 'Il signore degli anelli',
    autore: 'J.R.R. Tolkien',
    immagineCopertina: 'https://m.media-amazon.com/images/I/81d4-08jXnL._AC_UF894,1000_QL80_.jpg',
    prezzo: 15.99
  },
  {
    titolo: 'Harry Potter e la pietra filosofale',
    autore: 'J.K. Rowling',
    immagineCopertina: 'https://m.media-amazon.com/images/I/813azBbGnnL._AC_UF1000,1000_QL80_.jpg',
    prezzo: 12.99
  },
  {
    titolo: 'Il codice Da Vinci',
    autore: 'Dan Brown',
    immagineCopertina: 'https://www.ibs.it/images/9788804667223_0_536_0_75.jpg',
    prezzo: 10.99
  },
  {
    titolo: 'Harry Potter e il calice di fuoco',
    autore: 'J.K. Rowling',
    immagineCopertina: 'https://m.media-amazon.com/images/I/51yBfRjsDKL._AC_UF1000,1000_QL80_.jpg',
    prezzo: 18.99
  },
  {
    titolo: 'Harry Potter e il prigioniero di Azkaban',
    autore: 'J.K. Rowling',
    immagineCopertina: 'https://www.libracciourbino.it/59106-large_default/harry-potter-e-il-prigioniero-di-azkaban.jpg',
    prezzo: 14.99
  },
  {
    titolo: 'Lo Hobbit',
    autore: 'J.R.R. Tolkien',
    immagineCopertina: 'https://www.libraccio.it/images/9788845274343_0_500_0_75.jpg',
    prezzo: 9.99
  },
  {
    titolo: 'Angeli e demoni',
    autore: 'Dan Brown',
    immagineCopertina: 'https://www.mondadoristore.it/img/Angeli-e-demoni-Dan-Brown/ea978880455557/BL/BL/01/NZO/?tit=Angeli+e+demoni&aut=Dan+Brown',
    prezzo: 8.99
  },
  {
    titolo: 'Io Robot',
    autore: 'Isaac Asimov',
    immagineCopertina: 'https://www.ibs.it/images/9788804735113_0_536_0_75.jpg',
    prezzo: 13.99
  }
];

function App() {
  const [titoloRicerca, setTitoloRicerca] = useState('');
  const [autoreRicerca, setAutoreRicerca] = useState('');
  const [risultatiRicerca, setRisultatiRicerca] = useState([]);

  const cercaLibri = () => {
    const risultati = libri.filter(libro => {
      return (
        libro.titolo.toLowerCase().includes(titoloRicerca.toLowerCase()) &&
        libro.autore.toLowerCase().includes(autoreRicerca.toLowerCase())
      );
    });

    setRisultatiRicerca(risultati);
  };

  return (
    <div>
      <Header />
      <MainApp2
        titoloRicerca={titoloRicerca}
        autoreRicerca={autoreRicerca}
        setTitoloRicerca={setTitoloRicerca}
        setAutoreRicerca={setAutoreRicerca}
        cercaLibri={cercaLibri}
        risultatiRicerca={risultatiRicerca}
        setRisultatiRicerca={setRisultatiRicerca}
      />
      <Footer />
    </div>
  );
}

export default App
