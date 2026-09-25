
import Image from "next/image"
import blobYellow from '@/public/blob-yellow.svg'
import blobBlue from '@/public/blob-blue.svg'

export default async function Background() {
    'use cache'

    return (
        <div>
            <Image src={blobYellow} alt='' id='blob-yellow' loading="eager" className="absolute -z-1 right-0 top-0" />
            <Image src={blobBlue} alt='' id='blob-blue' loading="eager" className="absolute -z-1 left-0 bottom-0" />
        </div>
    )
}