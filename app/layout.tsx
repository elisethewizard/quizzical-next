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
            <body>
                <div className='app-cont'>
                    {children}
                    <Background />
                </div>
            </body>
        </html>
    )
}
