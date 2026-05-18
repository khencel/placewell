"use client";
import { useState } from "react";
import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavForDesktop() {
    const [megaOpen, setMegaOpen] = useState(false);
    const [megaOpen2, setMegaOpen2] = useState(false);
    const [megaOpen3, setMegaOpen3] = useState(false);
    const t = useTranslations();

    return (
        <>
            <li className="d-none d-md-block"><Link href="/">{t("nav.home")}</Link></li>
            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                >
                <a href="#" className="nav-link active">
                    {t("nav.about")}
                </a>

                <div className={`mega-menu ${megaOpen ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>{t("nav.about")}</strong>
                        <Link href="/about/corporate-identity" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>{t("nav.identity")}</h4>
                            <p>
                                {t("nav_sub.identity")}
                            </p>
                            </div>
                        </Link>

                        <div className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                                <Link href="/about">
                                    <h4>{t("nav.services")}</h4>
                                </Link>
                                <p style={{
                                                color: "#64748b",
                                                fontWeight: "600",
                                                fontSize: "12px",
                                            }}>
                                    {t.rich("nav_sub.services", {
                                        link: (chunks) => (
                                        <Link 
                                            href="/trade-test"
                                            style={{
                                                color: "#448153",
                                                fontWeight: "bold",
                                                fontSize: "12px",
                                                textDecoration: "underline",
                                            }}
                                            >
                                            {chunks}
                                        </Link>
                                        )
                                    })}
                                </p>
                            </div>
                        </div>

                        <Link href="/about/branches" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>{t("nav.branchOffices")}</h4>
                            <p>{t("nav_sub.branchOffices")} </p>
                            </div>
                        </Link>
                        <Link href="/worldwide-careers" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>{t("nav.worldWide")}</h4>
                            <p>{t("nav_sub.worldWide")} </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </li>

            <li className="d-none d-md-block"><Link href="/engage-with-us">{t("nav.engage")}</Link></li>

            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen2(true)}
                onMouseLeave={() => setMegaOpen2(false)}
                >
                <a href="#" className="nav-link active">
                    {t("nav.department")}
                </a>

                <div className={`mega-menu ${megaOpen2 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>{t("nav.department")}</strong>
                        <Link href="/department-facilities/department" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>{t("nav.dept")}</h4>
                            <p>{t("nav_sub.dept")}</p>
                            </div>
                        </Link>
                        

                        <Link href="/department-facilities/main-office" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>{t("nav.main")}</h4>
                            <p>{t("nav_sub.main")} </p>
                            </div>
                        </Link>

                        <Link href="/department-facilities/branch-offices" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>{t("nav.branch")}</h4>
                            <p>{t("nav_sub.branch")} </p>
                            </div>
                        </Link>

                        <Link href="/department-facilities/dormitory" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>{t("nav.dorm")}</h4>
                            <p>{t("nav_sub.dorm")}</p>
                            </div>
                        </Link>

                        <div className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>{t("nav.pro")}</h4>
                            <p>{t("nav_sub.pro")}</p>
                            </div>
                        </div>

                        <Link href="/department-facilities/hashira" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>{t("nav.hashira")}</h4>
                            <p>{t("nav_sub.hashira")}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </li>

            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen3(true)}
                onMouseLeave={() => setMegaOpen3(false)}
                >
                <a href="#" className="nav-link active">
                    {t("nav.testimonials")}
                </a>

                <div className={`mega-menu ${megaOpen3 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>{t("nav.testimonials")}</strong>
                        <Link href="/testimonials/client-testimonials" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>{t("nav.client")}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Link>

                        <Link href="/testimonials/OFW-testimonials" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>{t("nav.ofw")}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </li>

            <li className="d-none d-md-block"><Link href="/gallery">{t("nav.gallery")}</Link></li>
            <li className="d-none d-md-block">
                <Link href="/contact-us">{t("nav.contact")}</Link>
            </li>
        </>
    )
}