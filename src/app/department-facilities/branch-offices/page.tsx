"use client"
import Banner from "@/components/Banner"
import ImageThumbnail from "@/components/ImageThumbnail"
import { getBranchData } from "./data"
import { useTranslations } from "next-intl";

export default function BranchOffices() {
    const branchData = getBranchData();
    const t = useTranslations('banchOffices');
    return (
        <>
            <Banner
                backgroundImage="/img/banner/map.jpg"
                title={t("title")}
                subtitle={t("subtitle")}
                description={t("desc")}
            />

            <section className="mt-5">
                <div className="header">
                    <h2 className="title">{t("our")}</h2>
                    {/* <p className="subtitle">Find a Branch new you. We're here to serve you better.</p> */}
                </div>

                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            {
                                branchData.map((item, index) => (
                                    <div className="col-md-3" key={index}>
                                        <ImageThumbnail 
                                            src={item.image} 
                                            title={item.title} 
                                            address={item.address} 
                                            contact={item.contact}
                                        />
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}