"use client"

import Banner from "@/components/Banner"
import ProjectsGallery from "./LandingGallery"
import { useTranslations } from "next-intl";


export default function Gallery(){
    const t = useTranslations("gallery");
    return(
        <>
            <Banner
                backgroundImage="/img/banner/gallery.jpg"
                title={t("title")}
                subtitle={t("subtitle")}
                description={t("desc")}
            />

            <ProjectsGallery />
        </>
    )


// Our Workers
// Interviews 
// Trade Tests 
// Facilities
// Testimonies 
// Others
}