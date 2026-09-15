import { AnswerProps } from "../lib/types"

export default function Answer(props: AnswerProps) {
    const { question, correctAnswer, selectedAnswer, gameState, setData, answer } = props

    const isSelected = selectedAnswer === answer
    const isCorrect = correctAnswer === answer

    const classesPlay = isSelected ? 'selected' : ''
    const classesCheck = isCorrect ? 'correct' : isSelected ? 'wrong' : 'unselected'

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
        <label className={`${gameState === 'check' ? classesCheck : classesPlay} answer-label`} >
            <input
                type='radio'
                name={question}
                value={answer}
                className='answer-input'
                onChange={() => updateSelection(question, answer)} />
            {answer}
        </label>
    )
}