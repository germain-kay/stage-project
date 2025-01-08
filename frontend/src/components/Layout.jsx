import {Navbar} from "./Navbar.jsx";
import {Outlet} from "react-router-dom";


export function Layout() {
    return (
        <>
            <Navbar />
            <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
                <Outlet />
            </main>
        </>
    )
}