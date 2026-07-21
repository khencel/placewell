"use client";

import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguagePicker } from "./langSelector";

interface NavForMobileProps {
    onClose: () => void;
}

export default function NavForMobile({ onClose }: NavForMobileProps) {
    const t = useTranslations();

    // Helper: isara ang accordion at nav
    const handleLinkClick = () => {
        // I-close lahat ng bukas na Bootstrap accordions
        document.querySelectorAll(".accordion-collapse.show").forEach((el) => {
            el.classList.remove("show");
        });
        document.querySelectorAll(".accordion-button").forEach((btn) => {
            btn.classList.add("collapsed");
        });
        onClose();
    };

    return (
        <>
            <li className="forMobile">
                <Link href="/" className="ms-2" onClick={handleLinkClick}>
                    {t("nav.home")}
                </Link>
            </li>

            {/* ABOUT */}
            <li className="forMobile">
                <div className="accordion" id="mobileAboutAccordion">
                    <span
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mobileAbout"
                    >
                        {t("nav.about")}
                    </span>

                    <div id="mobileAbout" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <div className="mega-grid">
                                <strong>{t("nav.about")}</strong>

                                <Link
                                    href="/about/corporate-identity"
                                    className="mega-item"
                                    onClick={handleLinkClick}
                                >
                                    <FaHospital className="social-icon" />
                                    <div>
                                        <h4>{t("nav.identity")}</h4>
                                        <p>{t("nav_sub.identity")}</p>
                                    </div>
                                </Link>

                                <div className="mega-item">
                                    <FaUserDoctor className="social-icon" />
                                    <div>
                                        <Link href="/about" onClick={handleLinkClick}>
                                            <h4>{t("nav.services")}</h4>
                                        </Link>

                                        <p
                                            style={{
                                                color: "#64748b",
                                                fontWeight: "600",
                                                fontSize: "12px",
                                            }}
                                        >
                                            {t.rich("nav_sub.services", {
                                                br: () => <br />,
                                                link: (chunks) => (
                                                    <Link
                                                        href="/trade-test"
                                                        onClick={handleLinkClick}
                                                        style={{
                                                            color: "#448153",
                                                            fontWeight: "bold",
                                                            fontSize: "12px",
                                                            textDecoration: "underline",
                                                        }}
                                                    >
                                                        {chunks}
                                                    </Link>
                                                ),
                                            })}
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href="/about/competitive-advantages"
                                    className="mega-item"
                                    onClick={handleLinkClick}
                                >
                                    <FaSyringe className="social-icon" />
                                    <div>
                                        <h4>{t("nav.Competitive")}</h4>
                                        <p>{t("nav_sub.CompetitiveDesc")}</p>
                                    </div>
                                </Link>

                                <Link
                                    href="/about/branches"
                                    className="mega-item"
                                    onClick={handleLinkClick}
                                >
                                    <FaSyringe className="social-icon" />
                                    <div>
                                        <h4>{t("nav.branchOffices")}</h4>
                                        <p>{t("nav_sub.branchOffices")}</p>
                                    </div>
                                </Link>

                                <Link
                                    href="/worldwide-careers"
                                    className="mega-item"
                                    onClick={handleLinkClick}
                                >
                                    <FaSyringe className="social-icon" />
                                    <div>
                                        <h4>{t("nav.worldWide")}</h4>
                                        <p>{t("nav_sub.worldWide")}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li className="forMobile">
                <Link href="/engage-with-us" className="ms-2" onClick={handleLinkClick}>
                    {t("nav.engage")}
                </Link>
            </li>

            {/* DEPARTMENTS */}
            <li className="forMobile">
                <div className="accordion" id="mobileDepartmentAccordion">
                    <span
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mobileDepartment"
                    >
                        {t("nav.department")}
                    </span>
                    <div id="mobileDepartment" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <div className="mega-grid">
                                <strong>{t("nav.department")}</strong>
                                <Link href="/department-facilities/department" className="mega-item" onClick={handleLinkClick}>
                                    <FaHospital className="social-icon" />
                                    <div><h4>{t("nav.dept")}</h4><p>{t("nav_sub.dept")}</p></div>
                                </Link>
                                <Link href="/department-facilities/main-office" className="mega-item" onClick={handleLinkClick}>
                                    <FaUserDoctor className="social-icon" />
                                    <div><h4>{t("nav.main")}</h4><p>{t("nav_sub.main")}</p></div>
                                </Link>
                                <Link href="/department-facilities/branch-offices" className="mega-item" onClick={handleLinkClick}>
                                    <FaSyringe className="social-icon" />
                                    <div><h4>{t("nav.branch")}</h4><p>{t("nav_sub.branch")}</p></div>
                                </Link>
                                <Link href="/department-facilities/dormitory" className="mega-item" onClick={handleLinkClick}>
                                    <FaSyringe className="social-icon" />
                                    <div><h4>{t("nav.dorm")}</h4><p>{t("nav_sub.dorm")}</p></div>
                                </Link>
                                <Link href="/department-facilities/pro-tech" className="mega-item" onClick={handleLinkClick}>
                                    <FaSyringe className="social-icon" />
                                    <div><h4>{t("nav.pro")}</h4><p>{t("nav_sub.pro")}</p></div>
                                </Link>
                                <a href="https://www.hashiraskills.net/" target="_blank" rel="noopener noreferrer" className="mega-item" onClick={handleLinkClick}>
                                    <FaSyringe className="social-icon" />
                                    <div><h4>{t("nav.hashira")}</h4><p>{t("nav_sub.hashira")}</p></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            {/* TESTIMONIALS */}
            <li className="forMobile">
                <div className="accordion" id="mobileTestimonialsAccordion">
                    <span
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mobileTestimonials"
                    >
                        {t("nav.testimonials")}
                    </span>

                    <div id="mobileTestimonials" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <div className="mega-grid">
                                <strong>{t("nav.testimonials")}</strong>

                                <Link
                                    href="/testimonials/client-testimonials"
                                    className="mega-item"
                                    onClick={handleLinkClick}
                                >
                                    <FaHospital className="social-icon" />
                                    <div>
                                        <h4>{t("nav.client")}</h4>
                                        <p>{t("nav_sub.client")}</p>
                                    </div>
                                </Link>

                                <Link
                                    href="/testimonials/OFW-testimonials"
                                    className="mega-item"
                                    onClick={handleLinkClick}
                                >
                                    <FaUserDoctor className="social-icon" />
                                    <div>
                                        <h4>{t("nav.ofw")}</h4>
                                        <p>{t("nav_sub.client")}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li className="forMobile">
                <Link href="/gallery" className="ms-2" onClick={handleLinkClick}>
                    {t("nav.gallery")}
                </Link>
            </li>
            <li className="forMobile">
                <Link href="/contact-us" className="ms-2" onClick={handleLinkClick}>
                    {t("nav.contact")}
                </Link>
            </li>
        </>
    );
}