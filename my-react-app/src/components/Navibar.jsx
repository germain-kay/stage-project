import {Link} from "react-router-dom";

export function Navibar() {
    return (
        <>
            <Link to="/">
                 Accueil
            </Link>
            <Link to="/clients">
                Clients
            </Link>
        </>
    )

}
