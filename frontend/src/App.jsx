import {Routes, Route } from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {Clients} from "./pages/clients.jsx";
import {Layout} from "./components/Layout.jsx";
import {Produits} from "./pages/products.jsx";
import './i18n';
import { I18nextProvider } from "react-i18next";


const App = () => {

    return (

          <I18nextProvider i18n={i18n}>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/clients" element={<Clients/>}  />
                    <Route path="/products" element={<Produits/>}  />
                </Route>
            </Routes>
            </I18nextProvider>

    )
}
export default App
