import { useTranslations } from "next-intl";




export function getRollingData() {
    const t = useTranslations();
    return [
        {
            image: "img/why_placewell/branches-400x267.jpg",
            title: t("home.20Branch"),
            description: t("home.20BranchDesc"),
        },
        {
            image: "img/why_placewell/Executive-Conference-Room-400x267.jpg",
            title: t("home.one"),
            description: t("home.oneDesc"),
        },
        {
            image: "img/why_placewell/Facade-400x267.jpg",
            title: t("home.aTrusted"),
            description: t("home.aTrustedDesc"),
        },
        {
            image: "img/why_placewell/govt-400x267.jpg",
            title: t("home.good"),
            description: t("home.goodDesc"),
        },
        {
            image: "img/why_placewell/groupchat-400x267.jpg",
            title:  t("home.fast"),
            description: t("home.fastDesc"),
        },
    ]
}

export function getWhyHireFilipino() {
    return [
        {
            image: "img/why_hire/Bartender-400x267.jpg",
            title: "Low average age",
            description: "The average in the Philippines is around 25 years old, which means that there is a lot of youthful energy available for work.",
        },
        {
            image: "img/why_hire/Caregiver-400x267.jpg",
            title: "Cost-effective high quality labor",
            description: "Although it may cost less to hire Filipino workers than locals, there will be no sacrifice in the quality of work. In fact, Filipinos who work abroad tend to work even harder than locals because of their feelings of gratitude and urgency to perform.",
        },
        {
            image: "img/why_hire/deliver-support-1.jpg",
            title: "Low minimum wage",
            description: "The minimum wage in the Philippines is around $200 USD/month. This fact has driven Filipinos to find employment in foreign countries. They work extremely hard because they feel blessed to be earning higher wages abroad.",
        },
        {
            image: "img/why_hire/Engineer-400x267.jpg",
            title: "Well-known as People who work abroad",
            description: "There are Filipinos all over the world from Europe to the Middle East, North America, and all across Asia. Filipino workers have been known to be hard-working, friendly, and loyal to their employers.",
        },
        {
            image: "img/why_hire/Light-Driver-400x267.jpg",
            title: "English Speaking",
            description: "The demand for workers who are competent in the English language is growing with the rise of Globalization. The English language is especially important in the hotel and restaurant industry. Almost all Filipinos are proficient in English and are happy to share and utilize their skills.",
        },
    ]
}

export function getAllClient(){
    return [
        {
            image:"/img/client/1.jpg"
        },
        {
            image:"/img/client/2.jpg"
        },
        {
            image:"/img/client/3.jpg"
        },
        {
            image:"/img/client/4.jpg"
        },
        {
            image:"/img/client/5.jpg"
        },
        {
            image:"/img/client/1.jpg"
        },
        {
            image:"img/client/2.jpg"
        }
    ]
}