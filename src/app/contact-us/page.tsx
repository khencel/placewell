"use client"
import Banner from "@/components/Banner"
import s from "@/styles/contactUs.module.css"
import { FaFacebookF } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function ContactUs(){
    const t = useTranslations("contactUs");
    return (
        <>
            <Banner
                backgroundImage="/img/banner/124009.jpg"
                title={t('title')}
                subtitle={t('subtitle')}
                // description={t('desc')}
                customFontSize={true}
            />

            <section  className={`${s.testimonialSection} `}>
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div >
                        
                        <div className="header">
                            <h2 className="title">{t('connect')}</h2>
                            {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
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
                                        <h4>{t('contactInformation')}</h4>

                                        <div className={s.infoItem}>
                                            <span>📍</span>
                                            <div>
                                            <strong>{t('Address')}</strong>
                                            <p>JMC Centre 6488 P. Medina St. Brgy. Pio Del Pilar, Makati, Philippines</p>
                                            </div>
                                        </div>

                                        <div className={s.infoItem}>
                                            <span>📞</span>
                                            <div>
                                            <strong>{t('Phone')}</strong>
                                            <p>+63 928 862 4421</p>
                                            </div>
                                        </div>

                                        {/* <div className={s.infoItem}>
                                            <span>📞</span>
                                            <div>
                                            <strong>Trunkline</strong>
                                            <p>+632 526 4838</p>
                                            </div>
                                        </div> */}

                                        <div className={s.infoItem}>
                                            <span>📧</span>
                                            <div>
                                            <strong>{t('Email')}</strong>
                                            <p>Marketing@placewellinternational.com</p>
                                            </div>
                                        </div>

                                        <div className={s.infoItem}>
                                            <span><FaFacebookF /></span>
                                            <div>
                                            <strong>{t('Facebook')}</strong>
                                            <Link href="https://www.facebook.com/PlacewellInternational" target="_blank" rel="noopener noreferrer">
                                                <p style={{color:"blue"}}>Placewell International Services Corporation</p>
                                            </Link>
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