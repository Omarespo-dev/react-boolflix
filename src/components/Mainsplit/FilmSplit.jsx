// Importo useContext
import { useContext } from "react";

// Importo FilmSection
import FilmSection from "../Main/FilmSection";

// Importo GlobalContext
import GlobalContex from "./../../contexts/GlobalContext"




export default function FilmSplit() {
    
// Destrutturiamo e ricaviamo [film, setFilm] dove abbiamo i dati dell Api
const { films } = useContext(GlobalContex)


    return (<>
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
                <h2 className="set-title">Film</h2>}
        </div>

        <div className="container">

            {films.map(film => (

                <FilmSection film={film} key={film.id} />
            ))}
        </div>
    </>

    )
}
