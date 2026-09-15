'use client'

import { useEffect } from 'react'

export default function Error(
    { error, retry }: {
        error: Error & { digest?: string },
        retry: () => void
    }
) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <>
            <h1>Something went wrong.</h1>
            <p>Error message: {error.message}</p>
            <button
                className='btn'
                onClick={
                    // Attempt to recover by re-fetching and re-rendering the segment
                    () => retry()
                }
            >
                Try again
            </button>
        </>
    )
}