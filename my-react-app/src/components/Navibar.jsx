import {Link} from "react-router-dom";

export function Navibar() {
    return (
        <>
            <Link to="/">
                 <button>Accueil</button>
            </Link>
            <Link to="/Clients">
                <button>Clients</button>
            </Link>
        </>
    )

}