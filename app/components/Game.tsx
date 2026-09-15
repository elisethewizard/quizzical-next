'use client'

import { SubmitEvent, useEffect, useRef, useState } from "react"
import { GameState, QuizItem } from "../lib/types"
import Landing from "./Landing"
import { getAnswers, getData, getToken, resetToken } from "../lib/data"
import Card from "./Card"

export default function Game() {

    const [gameState, setGameState] = useState<GameState>('land')
    const [data, setData] = useState<QuizItem[]>([])
    const [score, setScore] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const token = useRef<string|undefined|null>(null)

    useEffect(() => {
        if (!token.current) {
            setToken()
        }
    }, [])

    async function setToken() {
        const data = await getToken()
        token.current = data
    }
    
    async function loadData() {
        if (!token.current) {
            await setToken()
        }
        const newData = await getData(token.current!)
        if (!newData) {
            setError('failed to start game.')
            return
        }
        
        // dealing with possible error response codes
        if (typeof newData === "number") {
            switch (newData) {
                case 3: {
                    // if code is 'token not found', set it and try again
                    await setToken()
                    await loadData()
                    break
                }
                case 4: {
                    // if code is 'token empty', reset it and try again
                    await resetToken(token.current!)
                    await loadData()
                    break
                }
                case 5: {
                    // if code is 'rate limiting', try again in 5 seconds
                    const id = setTimeout(async () => {
                        await loadData()
                        return clearTimeout(id)
                    }, 5000)
                    break
                }
                default: {
                    setError(`LoadData failed with response code ${data}.`)
                    return
                }
            }
            return
        }

        setData(newData)
    }

    async function startGame() {
        setLoading(true)
        try {
            if (score) {
                setScore(0)
            }
            await loadData()
            setGameState('play')
        } catch(err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const selectIsDone = data.every((item) => item.selectedAnswer)
        if (selectIsDone || gameState === 'play-unfinished') {
            const dataWithAnswers = await getAnswers(data)
            const scoreThisRound = dataWithAnswers.filter((item) => item.selectedAnswer === item.correctAnswer).length
            setScore(scoreThisRound)
            setData(dataWithAnswers)
            setGameState('check')
        } else {
            setGameState('play-unfinished')
        }
    }

    if (gameState === 'land') {
        return <Landing startGame={startGame} />
    }

    function Result() {
        switch (gameState) {
            case 'play':
                return (
                    <button className='btn check-btn'>Check answers</button>
                )
            case 'play-unfinished':
                return (
                    <>
                        <h1 className='unfinished-text'>Some quiestions have no answer selected.</h1>
                        <button className='btn check-btn'>Check anyway</button>
                    </>
                )
            case 'check':
                return (
                    <>
                        <h1 className='replay-text'>You scored {score}/{data.length} correct answers</h1>
                        <button className='btn replay-btn' type='button' onClick={startGame}>Play again</button>
                    </>
                )
            default:
                console.error(`Result component function called while gameState is landing. This should never happen.`)
                break
        }
    }

    if ((loading) || !data.length) {
        return <h1>Loading...</h1>
    }

    if (error) {
        throw new Error(error)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>

            {data.map((item) => <Card
                {...item}
                gameState={gameState}
                setData={setData}
                key={item.question}
            />)}

            <div className='result-check-cont'>
                <Result />
            </div>

        </form>
    )
}