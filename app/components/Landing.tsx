import { LandingProps } from "../lib/types"

export default function Landing(props: LandingProps) {
    const { startGame } = props

    return (
        <div className='flex flex-col items-center'>
            <h1 className="font-bold text-[2rem] xs:text-5xl/tight md:text-[3.5rem]">Quizzical</h1>
            <h2 className="mt-2.5 mb-7.5 xs:text-2xl/tight md:mt-3.5 md:mb-9 md:text-[1.625rem]">Test your trivia knowledge</h2>
            <button className='btn text-base/5' onClick={startGame}>Start quiz</button>
        </div>
    )
}