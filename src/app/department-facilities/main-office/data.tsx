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
                img1:"/img/mainOffice/1.jpg",
                img2:"/img/mainOffice/2.jpg",
                img3:"/img/mainOffice/3.jpg",
            }
        },
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: t("conferences"),
            description: t("conferencesDesc"),
            image:{
                img1:"/img/mainOffice/4.jpg",
                img2:"/img/mainOffice/5.jpg",
                img3:"/img/mainOffice/6.jpg",
            }
        },
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: t("interview"),
            description: t("interviewDesc"),
            image:{
                img1:"/img/mainOffice/7.jpg",
                img2:"/img/mainOffice/8.jpg",
                img3:"/img/mainOffice/9.jpg",
            }
        },
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: t("orientation"),
            description: t("orientationDesc"),
            image:{
                img1:"/img/department/10.jpg",
                img2:"/img/department/11.jpg",
                img3:"/img/department/12.jpg",
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
            img1:"/img/mainOffice/10.jpg",
            img2:"/img/mainOffice/11.jpg",
            img3:"/img/mainOffice/12.jpg",
        }
    }
}
