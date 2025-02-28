// Importo Header
import Header from "./components/Header/Header"
// Importo Main
import Main from "./components/Main/Main"

// IMporto compoennti splittati
import FilmSplit from "./components/Mainsplit/FilmSplit";
import SerieSplit from "./components/Mainsplit/SerieSplit";

// Importo rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importo pagina 
import HomeContent from "./components/pages/HomeContent";


// Importo libreria Axios
import axios from "axios"


// Importo UseState
import { useState, useEffect } from "react"

// Importo Global Context cosi rendo la chiamata API accessibile da qualsiasi componente
import GlobalContext from "./contexts/GlobalContext"


function App() {

  // Variabile di stato che gestice il risultato della ricerca
  const [ricerca, setRicerca] = useState("")

  // setto variabile di stato per l input
  const [formData, setFormData] = useState("")



  ///////////////////  FILM ///////////////////////////// 

  // Variabile di stato cosi aggiorniamo i dati che ci arrivano dall Api con setFilm
  const [films, setFilms] = useState([])


  // Funzione che gestisce la chiamata API ()
  function fetchFilms(ricerca) {
    // Chiamata di tipo get con libreria Axios 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5f71a957843568c6817e780ec58232d4&query=${ricerca}`)

      //Risposta ricevuta dall Api 
      .then((res) => setFilms(res.data.results))

      // Se la richiesta fallisce 
      .catch(err => console.log(err))
  }

  // Inseriamo lo useEffect cosi che al caricamento il componente viene montato una volta  e basta con [] , se volessimo far si che un valore cambia lo mettiamo [valore], dove seguira useEffect ogni volta che valore cambia
  useEffect(() => { fetchFilms(ricerca) }, [ricerca]);



  ///////////////////  SERIE TV  /////////////////////////////  


  // Variabile di stato cosi aggiorniamo i dati che ci arrivano dall Api con setFilm
  const [series, setSeries] = useState([])

  // Funzione che gestisce la chiamata API ()
  function fetchSeries(ricerca) {
    // Chiamata di tipo get con libreria Axios 
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=5f71a957843568c6817e780ec58232d4&query=${ricerca}`)

      //Risposta ricevuta dall Api 
      .then((res) => setSeries(res.data.results))

      // Se la richiesta fallisce 
      .catch(err => console.log(err))
  }

  // Inseriamo lo useEffect cosi che al caricamento il componente viene montato una volta  e basta con [] , se volessimo far si che un valore cambia lo mettiamo [valore], dove seguira useEffect ogni volta che valore cambia
  useEffect(() => { fetchSeries(ricerca) }, [ricerca]);


  return (
    <GlobalContext.Provider value={{ films, setRicerca, series, formData, setFormData }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent /> } />
          <Route path="/film" element={<FilmSplit />} />
          <Route path="/serietv" element={<SerieSplit />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
  
}

export default App
