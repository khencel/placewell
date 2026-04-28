import s from "../components/styles/leftImageContentStandard.module.css"

interface ImageRightProps {
    image?:         string;
    title?:         string;
    subtitle?:      string;
    number?:        number;
} 

export default function RightImageContent({image, title, subtitle, number}:ImageRightProps){
    return (
        <>
            <div className="row m-0 justify-content-center mt-2">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-7 rounded-5 position-relative order-2 order-md-1">
                            <div className={`${s.contentContRight} d-flex align-items-center justify-content-center`}>
                                <div>
                                    <span className="badge bg-success p-2">{number}</span> <span className="title" style={{fontSize:'18px',fontWeight:"bold"}}>{title}</span>
                                    <br />
                                    <br />
                                    <p className="subtitle">
                                        {subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-1 order-md-2">
                            <div className={s.imagstyle} style={{backgroundImage:`url(${image})`}}>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}