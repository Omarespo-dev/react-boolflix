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
                <div className="container">

                    {films.map(film => {

                        const countryCode = languageToCountry[film.original_language] || "ZW";

                        const votoFilm = Math.ceil(film.vote_average / 2)
                        // console.log(votoFilm)

                        // Genero stelle utilizzo ciclo for
                        let stelle = []
                        for (let i = 0; i < 5; i++) {
                            stelle.push(
                                <FontAwesomeIcon
                                    key={i}
                                    icon={faStar}
                                    style={{ color: i < votoFilm ? "#ffff80" : "#c0c0c0" }} />
                            )

                        }

                        return (
                            <section className="set-section" key={film.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" className="img-post" />

                                <div className="card-content">
                                    <h5>Titolo: {film.title}</h5>
                                    <h5>Titolo Originale: {film.original_title}</h5>
                                    <p><Flag code={countryCode} style={{ width: 50, height: 30 }} /></p>
                                    <p>Overview:{film.overview}</p>

                                    <p>{stelle}</p>
                                </div>


                            </section>

                        );
                    })}
                </div>



                <h1>SERIE TV</h1>
                <div className="container">

                    {series.map(serie => {
                        const countryCode = languageToCountry[serie.original_language] || "ZW";
                        const votoSerie = Math.ceil(serie.vote_average / 2)
                        // console.log(votoSerie)

                        // Genero stelle utilizzo ciclo for
                        let stelle = []
                        for (let i = 0; i < 5; i++) {
                            stelle.push(
                                <FontAwesomeIcon
                                    key={i}
                                    icon={faStar}
                                    style={{ color: i < votoSerie ? "#ffff80" : "#c0c0c0" }} />
                            )

                        }

                        return (
                            <section className="set-section" key={serie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt="" className="img-post" />

                                <div className="card-content">
                                    <h5>Titolo: {serie.name}</h5>
                                    <h5>Titolo Originale: {serie.original_name}</h5>
                                    <p><Flag code={countryCode} style={{ width: 50, height: 30 }} /></p>
                                    <p>Overview:{serie.overview}</p>

                                    <p>{stelle}</p>

                                </div>

                            </section>



                        );
                    })}
                </div>

            </main>
        </>
    );
}
