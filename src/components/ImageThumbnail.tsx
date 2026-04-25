import { FaLocationDot, FaPhone } from "react-icons/fa6";
import s from "../components/styles/ImageThumbnail.module.css"

interface ImageThumbnailProps {
    src: string;
    title: string;
    address: string;
    contact: string[];
}

export default function ImageThumbnail({ src, title, address, contact }: ImageThumbnailProps) {
    return (
        <>
            <div className="border rounded-4 shadow-sm mb-5">
                <div>
                    <img src={src} alt="" className={`${s.imgStyle} img-fluid`} />
                </div>
                <div className="p-3" style={{minHeight:"180px"}}>
                    <div>
                        <span className="title" style={{fontSize:"20px"}}>{title}</span>
                    </div>
                    <div className="d-flex align-items-center gap-3 mt-3">
                        <span><FaLocationDot style={{color:"#448153"}} /></span><span className="subtitle" style={{fontSize:"12px"}}>{address}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="d-flex align-items-center gap-3">
                            <span><FaPhone style={{color:"#448153"}} /></span>
                            <span className="subtitle" style={{fontSize:"12px"}}>
                                {contact.map((phone, index) => (
                                    <div key={index}>{phone}</div>
                                ))}
                            </span>
                        </div>

                        <button className="btnprimary" style={{fontSize:"12px",padding:"5px 10px"}}>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}