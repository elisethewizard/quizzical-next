import Image from "next/image"
import Game from "./components/Game"
import { Suspense } from "react"

export default function Home() {
    return (
        <Suspense>
            <Game />
        </Suspense>
    )
}
