import {AppWindow} from "@phosphor-icons/react";

export function Home() {
    console.log('Hello from component')
    return (
        <div>
            <AppWindow size={32} weight="fill"/>
            <p>Hello world</p>
        </div>
    )
}