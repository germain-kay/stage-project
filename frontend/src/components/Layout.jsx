import {Navbar} from "./Navbar.jsx";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";

export function Layout() {
    return (
        <>
            <Navbar />
            <Header/>
            <main>
                <Outlet />
            </main>
        </>
    )
}