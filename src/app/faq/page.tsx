"use client"

import Banner from "@/components/Banner"

import { useTranslations } from "next-intl";
import FAQComponent from "./faq";

export default function FAQ() {
    const t = useTranslations("branch");
    return (
        <>
            <Banner
                backgroundImage="/img/banner/philippines.jpg"
                title="FAQ"
                subtitle="Frequently Asked Questions"
                description=""
                customFontSize={true}
            />
            
            <div className="row justify-content-center my-5">
                <div className="col-md-10">
                    <FAQComponent />
                </div>
            </div>
        </>
    )
}