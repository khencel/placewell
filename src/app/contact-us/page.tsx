import Banner from "@/components/Banner"
import s from "@/styles/contactUs.module.css"
import { FaFacebookF } from "react-icons/fa6";


export default function ContactUs(){
    return (
        <>
            <Banner
                backgroundImage="/img/banner/124009.jpg"
                title="Contact Us"
                subtitle="We’re here to assist you"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, dolorum quibusdam. Debitis dolorem obcaecati placeat ea totam, hic reprehenderit dicta, quam optio, iure exercitationem facilis. Enim sunt magnam illo nobis!"
            />

            <section  className={`${s.testimonialSection} `}>
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div >
                        
                        <div className="header">
                            <h2 className="title">Let’s Connect</h2>
                            <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        {/* MAIN */}
                        <section className={` container`}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div >
                                        <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.743829638057!2d121.00617261068406!3d14.556636485865777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9ebe115c34b%3A0x3cdacf768e5e983d!2sPlacewell%20International%20Services%20Corporation!5e0!3m2!1sen!2sph!4v1777863205609!5m2!1sen!2sph"></iframe>
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className={`${s.contactCard} ${s.card}`}>
                                        <h4>Contact Information</h4>

                                        <div className={s.infoItem}>
                                            <span>📍</span>
                                            <div>
                                            <strong>Address</strong>
                                            <p>JMC Centre 6488 P. Medina St. Brgy. Pio Del Pilar, Makati, Philippines</p>
                                            </div>
                                        </div>

                                        <div className={s.infoItem}>
                                            <span>📞</span>
                                            <div>
                                            <strong>Phone</strong>
                                            <p>+63 908 850 8508</p>
                                            </div>
                                        </div>

                                        <div className={s.infoItem}>
                                            <span>📞</span>
                                            <div>
                                            <strong>Trunkline</strong>
                                            <p>+632 526 4838</p>
                                            </div>
                                        </div>

                                        <div className={s.infoItem}>
                                            <span>📧</span>
                                            <div>
                                            <strong>Email</strong>
                                            <p>manila@placewellinternational.com</p>
                                            </div>
                                        </div>

                                        <div className={s.infoItem}>
                                            <span><FaFacebookF /></span>
                                            <div>
                                            <strong>Facebook</strong>
                                            <p>Placewell International Services Corporation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </section>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}