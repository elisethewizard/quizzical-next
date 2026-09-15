'use server'

import { decode } from 'html-entities'
import type { QuizItem } from './types'

const answersMap = new Map()

function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

export async function getToken() {
    try {
        const res = await fetch('https://opentdb.com/api_token.php?command=request')
        const data: {token: string} = await res.json()
        return data.token
    } catch (err: any) {
        console.error(err)
        throw new Error('Error while running getToken: ', err)
    }
}

export async function resetToken(token: string) {
    try {
        fetch(`https://opentdb.com/api_token.php?command=reset&token=${token}`)
    } catch (err: any) {
        console.error(err)
        throw new Error('Error while running resetToken: ', err)
    }
}

export async function getData(token: string) {
    try {
        const url = `https://opentdb.com/api.php?amount=5&type=multiple&token=${token}`
        const res = await fetch(url)
        const data: { response_code: number, results: any[] } = await res.json()

        if (data.response_code !== 0) {
            return data.response_code
        }

        const decodedData: QuizItem[] = data.results.map((item: any) => {
            const [question, correctAnswer] = [decode(item.question), decode(item.correct_answer)]
            answersMap.set(question, correctAnswer)
            return {
                question: question,
                answers: shuffle([...item.incorrect_answers, item.correct_answer].map((answer) => decode(answer)))
            }
        })
        return decodedData
    } catch (err: any) {
        console.error(err)
        throw new Error('Error while running getData: ', err)
    }
}

export async function getAnswers(data: QuizItem[]) {
    return data.map((item) => {
        return {
            ...item,
            correctAnswer: answersMap.get(item.question)
        }
    })
}