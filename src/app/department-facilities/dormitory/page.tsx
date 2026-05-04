import Banner from "@/components/Banner"
import s from "../../../styles/dormitory.module.css"

export default function Dormitory() {
    return (
        <>
            <Banner
                backgroundImage="/img/banner/dorm.jpg"
                title="Departments and Facilities"
                subtitle="Dormitory"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            />

            <section>
                <div className="row m-0 justify-content-center mb-3">
                    <div className="col-md-10">
                        <div className="header">
                            <h2 className="title">Our Dormitory</h2>
                            <p className="subtitle">Find a Branch new you. We're here to serve you better.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className={s.card}>
                                    <img src="/img/branches/1.jpg" className={`${s.imgStyle} img-fluid`} alt="" />

                                    <div className={s.overlay}>
                                        <span className={s.overlayTitle}>Comfortable Rooms</span>
                                        <p className={s.overlayText}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={s.card}>
                                    <img src="/img/branches/2.jpg" className={`${s.imgStyle} img-fluid`} alt="" />

                                    <div className={s.overlay}>
                                        <span className={s.overlayTitle}>Comfortable Rooms</span>
                                        <p className={s.overlayText}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={s.card}>
                                    <img src="/img/branches/3.jpg" className={`${s.imgStyle} img-fluid`} alt="" />

                                    <div className={s.overlay}>
                                        <span className={s.overlayTitle}>Comfortable Rooms</span>
                                        <p className={s.overlayText}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}