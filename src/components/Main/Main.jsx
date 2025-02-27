// Importo useContext
import { useContext } from "react";

// Importo GlobalContext
import GlobalContex from "./../../contexts/GlobalContext"

export default function Main() {

    // Destrutturiamo e ricaviamo [film, setFilm] dove abbiamo i dati dell Api
    const { films } = useContext(GlobalContex)

    return (
        <>
            <main>
                {films.map(film => (
                    <section className="set-section" key={film.id}>
                        <h2>{film.title}</h2>
                        <h3>{film.original_title}</h3>
                        <p>{film.original_language}</p>
                        <p>{film.vote_average}</p>
                    </section>
                ))}
            </main>
        </>
    )
}
