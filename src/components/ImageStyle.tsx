import s from "../components/styles/ImageStyle.module.css"

interface ImageProps {
    image?: string
}

export default function ImageStyle ({image}:ImageProps){
    return (
        <>
            <img className={`${s.imgStyle} img-fluid`} src={image} alt="" />
        </>
    );
}