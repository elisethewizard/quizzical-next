import { CardProps } from "../lib/types"
import Answer from "./Answer"

export default function Card(props: CardProps){
    return (
        <div className="border-b border-lightgray py-4 w-full">
            <h1 className='font-karla font-bold text-base leading-[1.15] mb-3 xs:text-2xl md:text-[1.625rem]'>
                {props.question}
            </h1>
            <div className="flex-wrap flex gap-y-1.5 gap-x-3">
                {props.answers.map(item => <Answer
                    {...props}
                    answer={item}
                    key={item} 
                />)}
            </div>
        </div>
    )
}