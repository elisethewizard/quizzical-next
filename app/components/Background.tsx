import BlobYellow from "../svgs/BlobYellow"
import BlobBlue from "../svgs/BlobBlue"

export default async function Background() {
    'use cache'

    return (
        <div aria-hidden>
            <BlobYellow id='blob-yellow' className="absolute -z-1 right-0 top-0 text-lightyellow dark:opacity-80" />
            <BlobBlue id='blob-blue' className="absolute -z-1 left-0 bottom-0 text-lightblue dark:opacity-80" />
        </div>
    )
}