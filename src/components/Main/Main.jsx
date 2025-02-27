// Importo useContext
import { useContext } from "react";

// Importo Flag
import Flag from 'react-world-flags';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const languageToCountry = {
    en: "GB",
    it: "IT",
    fr: "FR",
    es: "ES",
    de: "DE",

};


// Importo GlobalContext
import GlobalContex from "./../../contexts/GlobalContext"

export default function Main() {
    // Destrutturiamo e ricaviamo [film, setFilm] dove abbiamo i dati dell Api
    const { films, series } = useContext(GlobalContex)

    return (
        <>
            <main>
                <h1>FILM</h1>
                {films.map(film => {
                    
                    const countryCode = languageToCountry[film.original_language] || "ZW";  

                    const votoFilm =Math.ceil(film.vote_average / 2)
                    // console.log(votoFilm)

                    // Genero stelle utilizzo ciclo for
                    let stelle = []
                    for (let i = 0; i < 5; i++) {
                        stelle.push(
                            <FontAwesomeIcon 
                            key={i}
                            icon={faStar} 
                            style={{color: i < votoFilm ? "#ffff80" : "#c0c0c0"}} />
                        )

                    }

                    return (
                        <section className="set-section"key={film.id}>
                            <h2>{film.title}</h2>
                            <h3>{film.original_title}</h3>
                            <img src={`https://image.tmdb.org/t/p/w342${film.backdrop_path}`} alt={`${film.original_title}`} />
                            <p>{film.original_language}
                                <Flag code={countryCode} style={{ width: 50, height: 30 }} />
                            </p>
                            <p>{votoFilm.toFixed(0)}</p>
                            <div>
                                <p>
                                    {stelle}
                                </p>
                            </div>
                        </section>

                    );
                })}


                <h1>SERIE TV</h1>
                {series.map(serie => {
                    const countryCode = languageToCountry[serie.original_language] || "ZW";  
                    const votoSerie=Math.ceil(serie.vote_average / 2)
                    // console.log(votoSerie)

                    // Genero stelle utilizzo ciclo for
                    let stelle = []
                    for (let i = 0; i < 5; i++) {
                        stelle.push(
                            <FontAwesomeIcon 
                            key={i}
                            icon={faStar} 
                            style={{color: i < votoSerie ? "#ffff80" : "#c0c0c0"}} />
                        )

                    }
                    
                    return (
                        <section className="set-section" key={serie.id}>
                            <h2>{serie.name}</h2>
                            <h3>{serie.original_name}</h3>
                            <img src={`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`} alt={`${serie.name}`} />
                            <p>{serie.original_language}
                                <Flag code={countryCode} style={{ width: 50, height: 30 }} />
                            </p>
                            <p>{votoSerie.toFixed(0)}</p>
                            <div>
                                <p>
                                    {stelle}
                                </p>
                            </div>
                        </section>
                    );
                })}
            </main>
        </>
    );
}
