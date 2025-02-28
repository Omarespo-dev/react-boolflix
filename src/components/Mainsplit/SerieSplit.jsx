// Importo useContext
import { useContext } from "react";

// importo serie
import SerieSection from "../Main/SerieSection";

// Importo GlobalContext
import GlobalContex from "./../../contexts/GlobalContext"



export default function SerieSplit() {
    // Destrutturiamo e ricaviamo [film, setFilm] dove abbiamo i dati dell Api
    const { series } = useContext(GlobalContex)
    return (
        <>
            <div id="set-title">
                {series.length === 0 ?
                    <div className="set-nofilm">
                        <h2>Nessuna Serie Tv trovata</h2>
                        <p>Suggerimento:</p>
                        <ul>
                            <li>Clicca sull icona cerca e inserisci la tua Serie Tv</li>
                        </ul>
                    </div>
                    :
                    <h2 className="set-title">Serie Tv</h2>}
            </div>

            <div className="container">

                {series.map(serie => (

                    <SerieSection serie={serie} key={serie.id} />
                ))}
            </div>
        </>
    )
}
