// Importo useContext e useState
import { useContext, useState } from "react"

// Img netflix
import ImageNetf from "./ImageNetf"

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell} from '@fortawesome/free-solid-svg-icons';

// Importo Global Context cosi rendo la chiamata API accessibile da qualsiasi componente
import GlobalContext from "./../../contexts/GlobalContext"

export default function Header() {

    // setto variabile di stato per l input
    const [formData, setFormData] = useState("")

    //3 Ora andiamo a gestire l onChange che e un evento con una funzione. La sua funzione e quando l utente scrive nel campo di testo rileva ogni cambiamento dell input
    // QUesta funzione serve a salvare i dati che l utente inserisce nel form e aggiornarli nello stato formData
    function handleFormData(e) {
        setFormData(e.target.value)
    }

    // Prova console.log
    console.log(formData)


    // Importo con il global context setRicerca
    const { setRicerca } = useContext(GlobalContext)


    function handleSubmit(e) {
        e.preventDefault()

        // Aggiorno setRicerca con il valore che inseriamo nel formData
        setRicerca(formData)

        // Reset Form
        setFormData("")

        
    }

    // Variabile di stato per la comparsa e scomparsa dell input
   const [none, setNone] = useState(false)
    

    return (
        <header>



            <form onSubmit={handleSubmit}>
                <ImageNetf />
               
                <div className="set-input-button">
                    {none &&
                        <input
                        type="text"
                        placeholder='Inserisci il nome'
                        name="film"
                        value={formData}
                        onChange={handleFormData}
                        
                    />}
                    
                    <button onClick={() => setNone(!none)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                    </button>
                    <p>BAMBINI</p>
                    <FontAwesomeIcon icon={faBell} style={{color: "#ffffff",}} />
                </div>

            </form>

        </header>

    )
}
