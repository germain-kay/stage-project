import {Navibar} from "./components/Navibar.jsx";
import {Outlet} from "react-router-dom";


export function Layout() {
    return (
        <>
            <Navibar />
            <main>
                <Outlet />
            </main>
        </>
    )
}