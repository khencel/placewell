"use client";

import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";
import Myra from "../myra";
import WhatsApp from "../whatsApp";
import FacebookMarketing from "../facebook";

export default function CompetitiveAdvantages() {
    const t = useTranslations("branch");

    const countries = [
        {
            name: "Saudi Arabia",
            flag: "🇸🇦",
            color: "#448153",
            softBg: "#EAF3EC",
            description:
                "We have a large worker pool and fast processing times because of our good track record and strong relationship with the DMW and Embassy of Saudi Arabia. ",
            items: [
                { title: "Large Worker Pool", image: "/img/competitive/DSC04559.jpg" },
                { title: "Fast Processing", image: "/img/competitive/2b935ffd-c4bc-4b08-813d-23ca50e65458.jpg" },
                { title: "Strong Govt. Relations", subtitle: "DMW & Embassy", image: "/img/competitive/DSC04621.jpg" },
            ],
        },
        {
            name: "Japan",
            flag: "🇯🇵",
            color: "#D32F2F",
            softBg: "#FCEAEA",
            description:
                "In our affiliated Japanese school, we recruit, screen and train workers before lining them up for interviews. Thanks to this system, our clients are able to interview candidates who are already JFT A2 passers or JLPT N4 passers.",
            items: [
                { title: "Recruit & Screen", image: "/img/competitive/DSC03883.jpg" },
                { title: "Train & Prepare", image: "/img/competitive/DSC04481.jpg" },
                { title: "JFT A2 / JLPT N4", subtitle: "Passers", image: "/img/competitive/att.JRqNjpfRXhon_U15ATkHKEduHz8MIgq5yJTZMENSHYo.JPG" },
            ],
        },
        {
            name: "Europe",
            flag: "🇪🇺",
            color: "#1565C0",
            softBg: "#E8F1FB",
            description:
                "We have a pool of workers who are already screened for English proficiency and are actively gathering their required documents, making the process for deployment much faster and more efficient.",
            items: [
                { title: "English Proficiency", subtitle: "Screened", image: "/img/competitive/WhatsApp Image 2026-04-13 at 8.18.08 PM (11).jpg" },
                { title: "Complete Document", subtitle: "Preparation", image: "/img/competitive/DSC03616.jpg" },
                { title: "Faster & More Efficient", subtitle: "Deployment", image: "/img/competitive/WhatsApp Image 2026-04-13 at 8.18.08 PM (7).jpg" },
            ],
        },
        {
            name: "Hong Kong",
            flag: "🇭🇰",
            color: "#EF6C00",
            softBg: "#FDF0E3",
            description:
                "Our Myra system has well-made videos of hundreds of highly qualified domestic helpers who are available for reservation with just the click of a button.",
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
                backgroundImage="/img/banner/competitive.jpeg"
                title={t("title")}
                subtitle="Competitive Advantages"
                description="See what sets us apart"
                customFontSize
            />

            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Our Competitive Advantages</h2>
                        <p className="text-muted">
                            Discover what makes Placewell International a trusted
                            recruitment partner across multiple global markets.
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