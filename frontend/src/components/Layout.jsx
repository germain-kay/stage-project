import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import NaviBar from "./NaviBar.jsx";

export function Layout() {
    return (
        <>
            <NaviBar />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
