import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import NaviBar from "./NaviBar.jsx";

export function Layout() {
    return (
        <>
            <NaviBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
