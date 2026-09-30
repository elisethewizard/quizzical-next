import type { SVGProps } from "react"

export default function Sun(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 48 48" 
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth='3'
            strokeLinecap="round"
            {...props}
        >
            <circle cx="24" cy="24" r="9" fill="transparent" />
            <line x1='4' x2='9' y1='24' y2='24' />
            <line x1='44' x2='39' y1='24' y2='24' />
            <line x1='24' x2='24' y1='4' y2='9' />
            <line x1='24' x2='24' y1='44' y2='39' />
            <line x1='9' x2='13' y1='9' y2='13' />
            <line x1='9' x2='13' y1='39' y2='35' />
            <line x1='39' x2='35' y1='39' y2='35' />
            <line x1='39' x2='35' y1='9' y2='13' />
        </svg>
    )
}