import { getStrapiMedia } from "../lib/media";
import Image from "next/image";
import {buildUrl} from 'cloudinary-build-Url'
const Images = ({ image}) => {
    const imageUrl = getStrapiMedia(image);
    
    return (
            <Image
                src={imageUrl}
                alt={image.alternativeText || image.name}
                width={500}
                height={300}
                layout="intrinsic"
                priority
            />
    );
};

export default Images;