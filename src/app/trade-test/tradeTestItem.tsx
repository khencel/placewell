"use client"

import YouTube from "react-youtube";
import s from "@/styles/tradeTest.module.css";

interface TradeTestItemProps {
    number: number;
    title: string;
    description: string;
    videoId: string;
    image1: string;
    image2: string;
    image3?: string;
}

export default function TradeTestItem({ number, title, description, videoId, image1, image2, image3 }: TradeTestItemProps){

    return (
        <>
            <div className={s.tradeCard}>
                <div className="row p-3">
                    <div className="col-md-6">
                        <div className="d-flex">
                            <div style={{ width: "15%" }}>
                                <span className="badge bg-success p-2" style={{ fontSize: "14px" }}>
                                    {number}
                                </span>
                            </div>

                            <div style={{ width: "85%" }}>
                                <span className="title" style={{ fontSize: "20px", fontWeight: 600 }}>
                                    {title}
                                </span>
                                <p className="subtitle" style={{ fontSize: "14px" }}>
                                    {description}
                                </p>
                            </div>
                        </div>

                        <video width="100%" height="340px" controls muted loop playsInline>
                            <source src={videoId||"no vid"} type="video/mp4" />
                        </video>
                    </div>

                    <div className="col-md-4">
                        <img src={image2} className={s.mainImageStyle} alt="" />
                    </div>

                    <div className="col-md-2">
                        <div className="mb-1">
                            <img src={image1} className={s.imageStyle} alt="" />
                        </div>
                        <div>
                            <img src={image3} className={s.imageStyle} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}