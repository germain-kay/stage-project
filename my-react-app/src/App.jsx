import './App.css'
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import {Accueil} from "./pages/accueil.jsx";
import {Clients} from "./pages/clients.jsx";
import {Layout} from "./Layout.jsx";


const App = () => {

    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Accueil/>}/>
                    <Route path="/clients" element={<Clients/>}  />
                </Route>
            </Routes>
        </Router>
    )
}
export default App