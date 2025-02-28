// Importo Flag
import Flag from 'react-world-flags';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function FilmSection(props) {
    // Faccio destructoring di props passando l elemento iesimo
    const { film } = props

    // BANDIERE 
    const languageToCountry = {
        en: "GB",
        it: "IT",
        fr: "FR",
        es: "ES",
        de: "DE",
    
    };

    // Condizione per la bandiera se non trova uno di languageToCountry
    const countryCode = languageToCountry[film.original_language] || "ZW";

    // Voto della stellina dove math.ceil arrotondo a numero pieno
    const votoFilm = Math.ceil(film.vote_average / 2)
    

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

        <section className="set-section" >
            <img src={`https://image.tmdb.org/t/p/w780${film.poster_path}`} alt="" className="img-post" />

            <div className="card-content">
                <h5>Titolo: {film.title}</h5>
                <h5>Titolo Originale: {film.original_title}</h5>
                <p><Flag code={countryCode} style={{ width: 50, height: 30 }} /></p>
                <p>Overview:{film.overview}</p>

                <p>{stelle}</p>
            </div>


        </section>
    )
}
