"use client"

import Banner from "@/components/Banner"

import { useTranslations } from "next-intl";
import FAQComponent from "./faq";

export default function FAQ() {
    const t = useTranslations("faq");
    return (
        <>
            <Banner
                backgroundImage="/img/banner/philippines.jpg"
                title={t('title')}
                subtitle={t('subtitle')}
                description=""
                customFontSize={true}
            />
            
            <div className="row justify-content-center my-5">
                <div className="col-md-10">
                    <FAQComponent t={t} />
                </div>
            </div>
        </>
    )
}