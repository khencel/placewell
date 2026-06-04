"use client"

import Banner from "@/components/Banner"
import BranchLocator from "./branches"
import { useTranslations } from "next-intl";

export default function AboutBranches() {
    const t = useTranslations("branch");
    return (
        <>
            <Banner
                backgroundImage="/img/banner/philippines.jpg"
                title={t("title")}
                subtitle={t("subtitle")}
                description={t("desc")}
            />

            <BranchLocator />
            
        </>
    )
}