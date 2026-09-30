import BlobYellow from "../svgs/BlobYellow"
import BlobBlue from "../svgs/BlobBlue"

export default async function Background() {
    'use cache'

    return (
        <div>
            <BlobYellow id='blob-yellow' className="absolute -z-1 right-0 top-0 text-[#FFFAD1] dark:opacity-80" aria-hidden />
            <BlobBlue id='blob-blue' className="absolute -z-1 left-0 bottom-0 text-[#DEEBF8] dark:opacity-80" aria-hidden />
        </div>
    )
}