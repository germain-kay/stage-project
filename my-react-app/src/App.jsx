import { AppWindow } from "@phosphor-icons/react";
import './App.css'

const App = () => {
    console.log('Hello from component')

    return (
        <div>
            <AppWindow size={32} weight="fill"/>
        <p>Hello world</p>
        </div>
    )
}
export default App