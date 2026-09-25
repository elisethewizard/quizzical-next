import { clsx } from 'clsx/lite'
import { AnswerProps } from "../lib/types"

export default function Answer(props: AnswerProps) {
    const { question, correctAnswer, selectedAnswer, gameState, setData, answer } = props

    const isSelected = selectedAnswer === answer
    const isCorrect = correctAnswer === answer

    const classesPlay = isSelected ? 'border border-selected-hl bg-selected-hl' : ''
    const classesCheck = isCorrect ? 'border border-correct-hl bg-correct-hl' : isSelected ? 'border border-wrong-hl bg-wrong-hl opacity-50' : 'opacity-50'
    const classesAlways = 'text-xs/[1] font-medium py-1 px-2 border border-blue rounded-lg cursor-pointer transition-all duration-225 ease-in-out xs:text-sm md:text-lg/[normal] md:rounded-[.625rem] md:py-1 md:px-4.5'

    function updateSelection(question: string, answer: string) {
        if (gameState === 'check') {
            return
        }
        setData((prevData) => prevData.map((item) => {
            return item.question === question ? {
                ...item,
                selectedAnswer: answer
            } : item
        }))
    }

    return (
        <label className={clsx(gameState === 'check' ? classesCheck : classesPlay, classesAlways)}>
            <input
                type='radio'
                name={question}
                value={answer}
                className='appearance-none'
                onChange={() => updateSelection(question, answer)} />
            {answer}
        </label>
    )
}