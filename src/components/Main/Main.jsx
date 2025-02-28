// Importo useContext
import { useContext } from "react";

// Importo FilmSection
import FilmSection from "./FilmSection";

// importo serie
import SerieSection from "./SerieSection";


// Importo GlobalContext
import GlobalContex from "./../../contexts/GlobalContext"

export default function Main() {
    // Destrutturiamo e ricaviamo [film, setFilm] dove abbiamo i dati dell Api
    const { films, series } = useContext(GlobalContex)

    return (
        <>
            <main>

                <div>
                    {films.length === 0 ?
                        <div className="set-nofilm">
                            <h2>Nessun Film trovato</h2>
                            <p>Suggerimento:</p>
                            <ul>
                                <li>Clicca sull icona cerca e inserisci il tuo Film</li>
                            </ul>
                        </div>
                        :
                        <h2 id="set-title">Film</h2>}
                </div>

                <div className="container">

                    {films.map(film => (

                        <FilmSection film={film} key={film.id} />
                    ))}
                </div>



                <div id="set-title">
                    {films.length === 0 ?
                        <div className="set-nofilm">
                            <h2>Nessuna Serie Tv trovata</h2>
                            <p>Suggerimento:</p>
                            <ul>
                                <li>Clicca sull icona cerca e inserisci la tua Serie Tv</li>
                            </ul>
                        </div>
                        :
                        <h2 id="set-title">Serie Tv</h2>}
                </div>
                
                <div className="container">

                    {series.map(serie => (

                        <SerieSection serie={serie} key={serie.id} />
                    ))}
                </div>

            </main>
        </>
    );
}
