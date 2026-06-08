"use client"
import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoDocumentSharp, IoCalculator  } from "react-icons/io5";
import { useTranslations } from "next-intl";

export function getDataList(){
    const t = useTranslations('mainOffice');
    return [
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: t("reception"),
            description: t("receptionDesc"),
            image:{
                img1:"/img/mainOffice/DSC04873.jpg",
                img2:"/img/mainOffice/DSC04881.jpg",
                img3:"/img/mainOffice/IMG_2356.JPG",
            }
        },
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: t("conferences"),
            description: t("conferencesDesc"),
            image:{
                img1:"/img/mainOffice/DSC03433.jpeg",
                img2:"/img/mainOffice/DSC04913.jpg",
                img3:"/img/mainOffice/DSC04924.jpg",
            }
        },
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: t("interview"),
            description: t("interviewDesc"),
            image:{
                img1:"/img/mainOffice/DSC03356.jpeg",
                img2:"/img/mainOffice/DSC04825.jpg",
                img3:"/img/mainOffice/DSC04832.jpg",
            }
        },
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: t("orientation"),
            description: t("orientationDesc"),
            image:{
                img1:"/img/mainOffice/DSC03475.jpeg",
                img2:"/img/mainOffice/DSC03486.jpeg",
                img3:"/img/mainOffice/DSC03517.jpeg",
            }
        }
    ]
}

export function getCafeteria(){
    const t = useTranslations('mainOffice');
    return {
        icon:<RiTeamFill style={{fontSize:"40px"}} />,
        title: t("cafeteria"),
        description: t("cafeteriaDesc"),
        image:{
            img1:"/img/mainOffice/DSC03402.jpeg",
            img2:"/img/mainOffice/DSC04805.jpg",
            img3:"/img/mainOffice/DSC04935.jpg",
        }
    }
}
