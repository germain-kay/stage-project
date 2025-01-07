import './App.css'
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {Clients} from "./pages/clients.jsx";
import {Layout} from "./Layout.jsx";


const App = () => {

    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/clients" element={<Clients/>}  />
                </Route>
            </Routes>
        </Router>
    )
}
export default App