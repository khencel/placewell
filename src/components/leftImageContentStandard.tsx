import s from "../components/styles/leftImageContentStandard.module.css"

interface ImageLeftProps {
    image?:         string;
    title?:         string;
    subtitle?:      React.ReactNode;
    number?:        number;
} 

export default function LeftImageContent({image, title, subtitle, number}:ImageLeftProps){
    return (
        <>
            <div className="row m-0 justify-content-center  mt-2">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-5">
                            <div className={s.imagstyle} style={{backgroundImage:`url(${image})`}}>

                            </div>
                        </div>
                        <div className="col-md-7 rounded-5 position-relative">
                            <div className={`${s.contentCont} d-flex align-items-center justify-content-center`}>
                                <div>
                                    <span className="badge bg-success p-2">{number}</span> <span className="title" style={{fontSize:'18px',fontWeight:"bold"}}>{title}</span>
                                    <br />
                                    <br />
                                    <div className="subtitle">
                                        {subtitle}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}