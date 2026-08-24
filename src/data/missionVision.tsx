import { useTranslations } from "next-intl";


export default function getMissionVision() {
    const t = useTranslations();

    

    return [
        {
            title: t("corporateIdentity.missionTitle"),
            icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="#709C6B" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            ),
            text: t("corporateIdentity.missionDesc"),
        },
        {
            title: t("corporateIdentity.visionTitle"),
            icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#8F6843" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="6" stroke="#8F6843" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="2" fill="#8F6843"/>
                <line x1="12" y1="2" x2="12" y2="5" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="12" y1="19" x2="12" y2="22" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="2" y1="12" x2="5" y2="12" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="19" y1="12" x2="22" y2="12" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            ),
            text: t("corporateIdentity.visionDesc"),
        },
        {
            title: t("corporateIdentity.corporate"),
            icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#448153" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="9" cy="7" r="4" stroke="#448153" strokeWidth="1.5"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#448153" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#448153" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            ),
            text: t("corporateIdentity.corporatePhilosophy"),
            isHtml: false,
        }
    ]
}