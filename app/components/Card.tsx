import { CardProps } from "../lib/types"
import Answer from "./Answer"

export default function Card(props: CardProps){
    return (
        <div className="card-cont">
            <h1 className='question'>
                {props.question}
            </h1>
            <div className="options-cont">
                {props.answers.map(item => <Answer
                    {...props}
                    answer={item}
                    key={item} 
                />)}
            </div>
        </div>
    )
}