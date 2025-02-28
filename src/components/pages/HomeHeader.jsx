// Importo link e navlink
import { Link, NavLink } from "react-router-dom";

export default function HomeHeader() {
    return (

        <nav>
            <Link to="/">Home</Link>
            <Link to="/film">Film</Link>
            <Link to="/serietv">Serie Tv</Link>
        </nav>


    )
}
