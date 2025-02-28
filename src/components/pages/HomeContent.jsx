import { useEffect, useState } from "react"

// importo axios
import axios from "axios"

// Importo Flag
import Flag from 'react-world-flags';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function HomeContent() {
    // Film Popular chiamata

    // Variabile di stato cosi ricaviamo i dati da Api
    const [filmsPopular, setFilmsPopular] = useState([])

    // Chiamta API con Axios
    function fetchFilmPopular() {
        // Chiamata di tipo get con libreria Axios 
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=5f71a957843568c6817e780ec58232d4')

            //Risposta ricevuta dall Api 
            .then((res) => setFilmsPopular(res.data.results))

            // Se la richiesta fallisce 
            .catch(err => console.log(err))
    }

    // Uso useEffect
    useEffect(fetchFilmPopular, [])


    // // BANDIERE 
    const languageToCountry = {
        en: "GB",
        it: "IT",
        fr: "FR",
        es: "ES",
        de: "DE",

    };

    

    return (<>
        <h2 className="set-title">Popular</h2>
        <div className="container">
            {filmsPopular.map((popular) => {

                // Condizione per la bandiera se non trova uno di languageToCountry
                const countryCode = languageToCountry[popular.original_language] || "ZW";

                
                // Voto della stellina dove math.ceil arrotondo a numero pieno
                const votoPopular = Math.ceil(popular.vote_average / 2);
                
                // ciclo per le stelel e faccio push
                const stelle = [];
                for (let i = 0; i < 5; i++) {
                    stelle.push(
                        <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            style={{ color: i < votoPopular ? "#ffff80" : "#c0c0c0" }} />
                    );
                }
                
                return (
                    
                    <section className="set-section" key={popular.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w780${popular.poster_path}`} 
                            alt={popular.title} 
                            className="img-post" 
                        />

                        <div className="card-content">
                            <h5>Titolo: {popular.title}</h5>
                            <h5>Titolo Originale: {popular.original_title}</h5>
                            <p>
                                <Flag code={countryCode} style={{ width: 50, height: 30 }} />
                            </p>
                            <p>Overview: {popular.overview}</p>
                            <p>{stelle}</p>
                        </div>
                    </section>
                );
            })}
        </div>
    
    </>
        
    );
}
