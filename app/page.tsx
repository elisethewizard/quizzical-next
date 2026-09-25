import Game from "./components/Game"
import { Suspense } from "react"
import Loading from "./loading"

export default function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <Game />
        </Suspense>
    )
}
