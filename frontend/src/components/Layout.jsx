import NaviBar from "./Navibar.jsx";
import { Outlet } from "react-router-dom";

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
