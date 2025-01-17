import { Outlet } from "react-router-dom";
import NaviBar from "./NaviBar.jsx";

export function Layout() {
    return (
        <>
            <NaviBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}
