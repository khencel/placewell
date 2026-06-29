"use client";

import { useState, useEffect, useCallback } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import s from "../components/styles/ImageThumbnail.module.css"
import Rolling from "@/components/Rolling";

interface ImageThumbnailProps {
    src: string;
    title: string;
    address: string;
    contact: string[];
    mon?: string;
    sat?: string;
    imgs?: any[];
}

const getImgSrc = (img: any): string => {
    if (!img) return "";
    if (typeof img === "string") return img;
    return (
        img.src ||
        img.url ||
        img.image ||
        img.imageUrl ||
        img.path ||
        img.photo ||
        img.thumbnail ||
        img.secure_url ||
        ""
    );
};

export default function ImageThumbnail({
    src,
    title,
    address,
    contact,
    mon,
    sat,
    imgs,
}: ImageThumbnailProps) {
    const [showModal, setShowModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const gallery = imgs && imgs.length > 0 ? imgs : [src];

    const handleOpen = (index = 0) => {
        setActiveIndex(index);
        setShowModal(true);
    };
    const handleClose = () => setShowModal(false);

    const goPrev = useCallback(() => {
        setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    }, [gallery.length]);

    const goNext = useCallback(() => {
        setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    }, [gallery.length]);

    useEffect(() => {
        if (!showModal) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [showModal, goPrev, goNext]);

    return (
        <>
            <div
                className="border rounded-4 shadow-sm mb-5 d-flex flex-column"
                style={{ height: "550px" }}
            >
                <div style={{ height: "220px", overflow: "hidden", flexShrink: 0 }}>
                    <Rolling data={imgs ?? []} perSlide={1} isContain={false} />
                </div>
                <div className="p-3 d-flex flex-column flex-grow-1" style={{ overflow: "hidden" }}>
                    <div>
                        <span className="title" style={{ fontSize: "20px" }}>{title}</span>
                    </div>
                    <div className="d-flex align-items-center gap-3 mt-3">
                        <span><FaLocationDot style={{ color: "#448153" }} /></span>
                        <span className="subtitle" style={{ fontSize: "12px" }}>{address}</span>
                    </div>
                    <div className="mt-3">
                        <div className="d-flex align-items-center">
                            <span><FaCalendarAlt style={{ color: "#448153" }} /></span>
                            <span className="subtitle" style={{ fontSize: "12px" }}>{mon}</span>
                        </div>
                        {/* <div className="d-flex align-items-center ">
                            <span><FaCalendarAlt style={{ color: "#448153" }} /></span>
                            <span className="subtitle" style={{ fontSize: "12px" }}>{sat}</span>
                        </div> */}
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="d-flex align-items-center gap-3">
                            <span><FaPhone style={{ color: "#448153" }} /></span>
                            <div className="row">
                                {contact.map((phone, index) => (
                                    <div className="col-md-6 subtitle" style={{ fontSize: "12px" }} key={index}>{phone}</div>
                                ))}
                                
                            </div>
                           
                        </div>
                    </div>

                    <div className="d-flex justify-content-end mt-auto">
                        <button
                            className="btnprimary"
                            style={{ fontSize: "12px", padding: "5px 10px" }}
                            onClick={() => handleOpen(0)}
                        >
                            View All
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <div
                    onClick={handleClose}
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.92)",
                        zIndex: 1050,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                    }}
                >
                    <button
                        onClick={handleClose}
                        aria-label="Close"
                        style={{
                            position: "fixed", top: "24px", right: "24px",
                            width: "44px", height: "44px", borderRadius: "50%",
                            border: "none", background: "rgba(255,255,255,0.1)",
                            color: "#fff", fontSize: "20px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <IoClose />
                    </button>

                    <div
                        style={{
                            position: "fixed", top: "30px", left: "50%",
                            transform: "translateX(-50%)",
                            color: "rgba(255,255,255,0.8)", fontSize: "14px",
                        }}
                    >
                        {activeIndex + 1} / {gallery.length}
                    </div>

                    {gallery.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                                aria-label="Previous image"
                                style={{
                                    position: "fixed", left: "24px", top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "48px", height: "48px", borderRadius: "50%",
                                    border: "none", background: "rgba(255,255,255,0.12)",
                                    color: "#fff", fontSize: "18px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    cursor: "pointer",
                                }}
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); goNext(); }}
                                aria-label="Next image"
                                style={{
                                    position: "fixed", right: "24px", top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "48px", height: "48px", borderRadius: "50%",
                                    border: "none", background: "rgba(255,255,255,0.12)",
                                    color: "#fff", fontSize: "18px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    cursor: "pointer",
                                }}
                            >
                                <FaChevronRight />
                            </button>
                        </>
                    )}

                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "900px", width: "100%" }}
                    >
                        <img
                            src={getImgSrc(gallery[activeIndex])}
                            alt={`${title} ${activeIndex + 1}`}
                            className="rounded-4"
                            style={{ maxWidth: "100%", maxHeight: "60vh", objectFit: "cover", width: "100%" }}
                        />

                        <div className="text-center mt-3">
                            <div style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginTop: "4px" }}>
                                {title}
                            </div>
                        </div>

                        {gallery.length > 1 && (
                            <div className="d-flex gap-2 mt-4" style={{ flexWrap: "wrap", justifyContent: "center" }}>
                                {gallery.map((img, index) => (
                                    <img
                                        key={index}
                                        src={getImgSrc(img)}
                                        alt={`thumbnail ${index + 1}`}
                                        onClick={() => setActiveIndex(index)}
                                        className="rounded-3"
                                        style={{
                                            width: "70px", height: "50px", objectFit: "cover",
                                            cursor: "pointer",
                                            opacity: index === activeIndex ? 1 : 0.5,
                                            border: index === activeIndex ? "2px solid #448153" : "2px solid transparent",
                                            transition: "opacity 0.2s, border-color 0.2s",
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}