import {Routes, Route } from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {Clients} from "./pages/clients.jsx";
import {Layout} from "./components/Layout.jsx";
import {Produits} from "./pages/products.jsx";


const App = () => {

    return (

            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/clients" element={<Clients/>}  />
                    <Route path="/products" element={<Produits/>}  />
                </Route>
            </Routes>

    )
}
export default App
