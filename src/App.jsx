// Importo Header
import Header from "./components/Header/Header"

// Importo libreria Axios
import axios from "axios"
// Importo UseState
import { useState, useEffect } from "react"

// Importo Global Context cosi rendo la chiamata API accessibile da qualsiasi componente
import GlobalContext from "./contexts/GlobalContext"


function App() {
  
  // Variabile di stato cosi aggiorniamo i dati che ci arrivano dall Api con setFilm
  const [film, setFilm] = useState([])

  // Funzione che gestisce la chiamata API ()
  function fetchFilm() {
    // Chiamata di tipo get con libreria Axios 
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=5f71a957843568c6817e780ec58232d4&query=ritorno+al+futuro")

    //Risposta ricevuta dall Api 
    .then((res) => setFilm(res.data.results))
    
    // Se la richiesta fallisce 
    .catch(err => console.log(err))
  }

  // Inseriamo lo useEffect cosi che al caricamento il componente viene montato una volta  e basta con [] , se volessimo far si che un valore cambia lo mettiamo [valore], dove seguira useEffect ogni volta che valore cambia
  useEffect(fetchFilm, []);

  return (
    <>

      <GlobalContext.Provider value={{film ,setFilm}}>


        <Header />


      </GlobalContext.Provider>

    </>
  )
}

export default App
