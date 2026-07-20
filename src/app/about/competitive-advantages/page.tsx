"use client";

import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";
import Myra from "../myra";
import WhatsApp from "../whatsApp";
import FacebookMarketing from "../facebook";

export default function CompetitiveAdvantages() {
    const t = useTranslations("competitive");

    const countries = [
        {
            name: t("Saudi"),
            flag: "🇸🇦",
            color: "#448153",
            softBg: "#EAF3EC",
            description:
                t("SaudiDesc"),
            items: [
                { title: "Large Worker Pool", image: "/img/competitive/DSC04559.jpg" },
                { title: "Fast Processing", image: "/img/competitive/2b935ffd-c4bc-4b08-813d-23ca50e65458.jpg" },
                { title: "Strong Govt. Relations", subtitle: "DMW & Embassy", image: "/img/competitive/DSC04621.jpg" },
            ],
        },
        {
            name: t("Japan"),
            flag: "🇯🇵",
            color: "#D32F2F",
            softBg: "#FCEAEA",
            description:
                t("JapanDesc"),
            items: [
                { title: "Recruit & Screen", image: "/img/competitive/DSC03883.jpg" },
                { title: "Train & Prepare", image: "/img/competitive/DSC04481.jpg" },
                { title: "JFT A2 / JLPT N4", subtitle: "Passers", image: "/img/competitive/att.JRqNjpfRXhon_U15ATkHKEduHz8MIgq5yJTZMENSHYo.JPG" },
            ],
        },
        {
            name: t("Europe"),
            flag: "🇪🇺",
            color: "#1565C0",
            softBg: "#E8F1FB",
            description:
                t("EuropeDesc"),
            items: [
                { title: "English Proficiency", subtitle: "Screened", image: "/img/competitive/WhatsApp Image 2026-04-13 at 8.18.08 PM (11).jpg" },
                { title: "Complete Document", subtitle: "Preparation", image: "/img/competitive/DSC03616.jpg" },
                { title: "Faster & More Efficient", subtitle: "Deployment", image: "/img/competitive/WhatsApp Image 2026-04-13 at 8.18.08 PM (7).jpg" },
            ],
        },
        {
            name: t("Hong"),
            flag: "🇭🇰",
            color: "#EF6C00",
            softBg: "#FDF0E3",
            description:
                t("HongDesc"),
            items: [
                { title: "Hundreds of Video", subtitle: "Profiles", image: "/img/competitive/DSC04895.jpg" },
                { title: "Easy Search &", subtitle: "Browse", image: "/img/competitive/73b3c255-2165-4005-8773-67261f92763e.jpg" },
                { title: "Reserve with Just", subtitle: "One Click", image: "/img/competitive/DSC03579.jpeg" },
            ],
        },
    ];

    return (
        <>
            <Banner
                backgroundImage="/13698 (1).jpg"
                title={t("title")}
                subtitle={t("subtitle")}
                description={t("desc")}
                customFontSize
            />

            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">{t("Our")}</h2>
                        <p className="text-muted">
                            {t("Discover")}
                        </p>
                    </div>

                    <div className="row g-4">
                        {countries.map((country, index) => (
                            <div className="col-lg-6" key={index}>
                                <div
                                    className="shadow rounded-4 overflow-hidden h-100 bg-white"
                                    style={{ borderTop: `6px solid ${country.color}` }}
                                >
                                    <div className="p-4">
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: 56,
                                                    height: 56,
                                                    backgroundColor: country.softBg,
                                                    fontSize: 26,
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {country.flag}
                                            </div>
                                            <h3
                                                className="fw-bold mb-0"
                                                style={{ color: country.color }}
                                            >
                                                {country.name}
                                            </h3>
                                        </div>

                                        <p className="text-secondary mb-4">
                                            {country.description}
                                        </p>

                                        <div className="row g-3">
                                            {country.items.map((item, i) => (
                                                <div className="col-4" key={i}>
                                                    <div className="card border-0 shadow-sm h-100">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="card-img-top"
                                                            style={{
                                                                height: 160,
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Myra />
            <WhatsApp />
            <FacebookMarketing />
        </>
    );
}