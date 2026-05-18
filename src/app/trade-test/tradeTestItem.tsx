"use client"

import YouTube from "react-youtube";

export default function TradeTestItem(){
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className="d-flex">
                        <div style={{width:"10%"}}>
                            <span style={{fontSize:"14px"}} className="badge bg-success p-2">1</span>
                        </div>
                        <div style={{width:"90%"}}>
                            <div>
                                <span className="title" style={{fontSize:"20px",fontWeight:"600"}}>Domestic Work NC II</span>
                                <p className="subtitle" style={{fontSize:"14px"}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cumque iure incidunt placeat a minima, cum consequuntur dolor quaerat corrupti pariatur nesciunt doloremque, vero tenetur sint! Corporis libero explicabo eos?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <YouTube
                        videoId="1vIU3R-BIDQ"
                        opts={{
                            width: "100%",
                            height: "300px",
                            playerVars: {
                            autoplay: 0,
                            controls: 1,
                            mute: 1,
                            loop: 1,
                            playlist: "1vIU3R-BIDQ",
                            },
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <img src="/img/2148269340.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-md-3">
                    <img src="/img/2148269340.jpg" className="img-fluid" alt="" />
                </div>
            </div>
        </>
    )
}