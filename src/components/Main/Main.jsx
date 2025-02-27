// Importo useContext
import { useContext } from "react";

// Importo GlobalContext
import GlobalContex from "./../../contexts/GlobalContext"

export default function Main() {

    // Destrutturiamo e ricaviamo [film, setFilm] dove abbiamo i dati dell Api
    const { films, series } = useContext(GlobalContex)

    return (
        <>
            <main>
                <h1>FILM</h1>
                {films.map(film => (
                    <section className="set-section" key={film.id}>
                        <h2>{film.title}</h2>
                        <h3>{film.original_title}</h3>
                        <p>{film.original_language}</p>
                        <p>{film.vote_average}</p>
                    </section>
                ))}

                <h1>SERIE TV</h1>
                {series.map(serie => (

                    <section className="set-section" key={series.id}>
                        <h2>{serie.name}</h2>
                        <h3>{serie.original_name}</h3>
                        <p>{serie.original_language}</p>
                        <p>{serie.vote_average}</p>
                    </section>
                ))}


            </main>
        </>
    )
}
