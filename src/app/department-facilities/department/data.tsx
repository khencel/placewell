"use client"
import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoDocumentSharp, IoCalculator  } from "react-icons/io5";
import { useTranslations } from "next-intl";

export function getDepartmentList(){
    const t = useTranslations('department');
    return [
        {
            icon:<RiTeamFill style={{fontSize:"2rem"}} />,
            title:t('international'),
            description: t('internationalDesc'),
            image:{
                img1:"/img/department/DSC03279.jpg",
                img2:"/img/department/DSC04561.jpg",
                img3:"/img/department/DSC04593.jpg",
            }
        },
        {
            icon:<FaUser style={{fontSize:"2rem"}} />,
            title: t('manpower'),
            description: t('manpowerDesc'),
            image:{
                img1:"/img/department/DSC04678.jpg",
                img2:"/img/department/DSC04655.jpg",
                img3:"/img/department/DSC04658.jpg",
            }
        },
        {
            icon:<GiInjustice style={{fontSize:"2rem"}} />,
            title: t('ofw'),
            description: t('ofwDesc'),
            image:{
                img1:"/img/department/DSC04632.jpg",
                img2:"/img/department/DSC04888.jpg",
                img3:"/img/department/DSC04895.jpg",
            }
        },
        {
            icon:<IoDocumentSharp style={{fontSize:"2rem"}} />,
            title: t('process'),
            description: t('processDesc'),
            image:{
                img1:"/img/department/DSC04614.jpg",
                img2:"/img/department/DSC04629.jpg",
                img3:"/img/department/DSC04621.jpg",
            }
        },
        
    ]
}


export function getAccount(){
    const t = useTranslations('department');
    return {
            icon:<IoCalculator style={{fontSize:"2rem"}} />,
            title: t('accounting'),
            description: t('accountingDesc'),
            image:{
                img1:"/img/department/DSC03421.jpg",
                img2:"/img/department/DSC04865.jpg",
                img3:"/img/department/DSC04852.jpg",
            }
        }
}