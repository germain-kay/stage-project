import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export function Layout() {
    return (
        <>
            <Navbar />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
