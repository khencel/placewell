"use client"
import Banner from "@/components/Banner"
import TradeTestItem from "./tradeTestItem"
import { getData } from "./data"
import { useTranslations } from "next-intl";
import test from '@/styles/testimonials.module.css'

export default function TradeTest() {
    const data = getData();
    const t = useTranslations();
    return (
        <>
            <Banner
                backgroundImage="/img/banner/welding.jpg"
                title={t("tradeTest.title")}
                subtitle={t("tradeTest.subtitle")}
                description={t("tradeTest.desc")}
            />
            
            <section className={test.testimonialSection}>
                <div className={test.containerContent}>
                    <div className="row justify-content-center m-0">
                        <div className="col-md-10">
                            {data.map((item) => (
                                <TradeTestItem key={item.number} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}