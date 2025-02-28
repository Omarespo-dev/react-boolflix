// Importo Flag
import Flag from 'react-world-flags';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function SerieSection(props) {
    // Faccio destructoring di props passando l elemento iesimo serie
    const { serie } = props

    // BANDIERE 
    const languageToCountry = {
        en: "GB",
        it: "IT",
        fr: "FR",
        es: "ES",
        de: "DE",
    
    };

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
        <section className="set-section">
        <img src={`https://image.tmdb.org/t/p/w780${serie.poster_path}`} alt="" className="img-post" />

        <div className="card-content">
            <h5>Titolo: {serie.name}</h5>
            <h5>Titolo Originale: {serie.original_name}</h5>
            <p><Flag code={countryCode} style={{ width: 50, height: 30 }} /></p>
            <p>Overview:{serie.overview}</p>

            <p>{stelle}</p>

        </div>

    </section>
    )
}
