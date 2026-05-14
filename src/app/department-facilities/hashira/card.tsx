import s from "./card.module.css"

import { IconType } from "react-icons";

interface cardProps {
    title: string;
    subtitle: string;
    icon: IconType;
}

export default function Card({title, subtitle, icon: Icon}: cardProps){
    return (
        <>
            <div className={s.cardContainer}>
                <div className="text-center pt-4 mb-3">
                    <span className={`${s.iconContainer} badge`}><Icon className={s.icon} /></span>
                </div>
                <div className="text-center mb-3">
                    <span className="title" style={{fontSize:"18px"}}>{title}</span>
                </div>
                <div  className="text-center pb-4 w-75 mx-auto">
                    <p className="subtitle" style={{fontSize:"14px"}}>
                        {subtitle}
                    </p>
                </div>
            </div>
        </>
    )
}