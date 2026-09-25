import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./index.css"
import Background from "./components/Background"

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Quizzical",
    description: "Trivia quiz app created with Next.js",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={inter.variable}>
            <body className='bg-light '>
                <div className='flex flex-col justify-center items-center min-w-dvw min-h-dvh px-5 text-darkblue'>
                    {children}
                    <Background />
                </div>
            </body>
        </html>
    )
}
