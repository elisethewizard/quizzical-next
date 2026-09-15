
import Image from "next/image"
import blobYellow from '@/public/blob-yellow.svg'
import blobBlue from '@/public/blob-blue.svg'

export default async function Background() {
    'use cache'

    return (
        <div className="bg-cont">
            <Image src={blobYellow} alt='' id='blob-yellow' loading="eager" />
            <Image src={blobBlue} alt='' id='blob-blue' loading="eager" />
        </div>
    )
}