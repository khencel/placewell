import { useTranslations } from "next-intl";



export default function HistoryList(t:any) {
    
    return [
        {
            imageObjectFit: "contain",
            year: "1978",
            image:"/logo.png",
            title:t("Establishment"),
            description:t("Placewell")
        },
        {
            imageObjectFit: "cover",
            year: "1980s",
            image:"/saudi.png",
            title:t("First"),
            description:t("PlacewellInternational")
        },
        {
            imageObjectFit: "cover",
            year: "1993",
            image:"/eli.jpg",
            title:t("Leadership"),
            description:t("After")
        },
        {
            imageObjectFit: "cover",
            year: "2000s",
            image:"/hongkong.jpg",
            title:t("FirstDeployment"),
            description:t("FirstDeploymentDesc")
        },
        {
            imageObjectFit: "cover",
            year: "2010",
            image:"/comelec.jpg",
            title:t("COMELEC"),
            description:t("COMELECDesc")
        },
        {
            imageObjectFit: "contain",
            year: "2015",
            image:"/iso.png",
            title:t("ISO"),
            description:t("ISODesc")
        },
        {
            imageObjectFit: "cover",
            year: "2016",
            image:"/img/img2.jpg",
            title:t("Moved"),
            description:t("MovedDesc")
        },
        {
            imageObjectFit: "cover",
            year: "2017",
            image:"/img/banner/proTechBanner.png",
            title:t("EstablishmentProtech"),
            description:t("EstablishmentProtechDesc")
        },
        {
            imageObjectFit: "cover",
            year: "2018",
            image:"/japan.jpg",
            title:t("FirstDeploymentJapan"),
            description:t("FirstDeploymentJapanDesc")
        },
        {
            imageObjectFit: "contain",
            year: "2020",
            image:"/hashira.jpg",
            title:t("EstablishmentHashira"),
            description:t("EstablishmentHashiraDesc")
        },
        {
            imageObjectFit: "contain",
            year: "2023",
            image:"/europe.avif",
            title:t("FirstEurope"),
            description:t("FirstEuropeDesc")
        }
    ]
}