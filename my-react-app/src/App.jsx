import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    console.log('Hello from component')
    const now = new Date()
    const a = 10
    const b = 20

    return (
        <div>
            <p>Hello world</p>
            <p>
                {a} plus {b} is {a + b}
            </p>
        </div>
    )
}
export default App