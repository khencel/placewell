import { useTranslations } from "next-intl";
import { getGallery } from "./gallery";



export function getRollingData() {
    const t = useTranslations();
    return [
        {
            image: "img/why_placewell/Facade-400x267.jpg",
            title: t("home.aTrusted"),
            description: t("home.aTrustedDesc"),
        },
        {
            image: "img/why_placewell/Executive-Conference-Room-400x267.jpg",
            title: t("home.one"),
            description: t("home.oneDesc"),
        },
        {
            image: "img/why_placewell/branches-400x267.jpg",
            title: t("home.20Branch"),
            description: t("home.20BranchDesc"),
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

const workerImages = getGallery()
    .filter(item =>
        ["interview", "tradetest"].includes(item.category)
    )
    .map(item => item.imageUrl);

const getRandomImage = () => {
    return workerImages[Math.floor(Math.random() * workerImages.length)];
};

export function getWhyHireFilipino() {
    return [
        {
            image: getRandomImage(),
            title: "Well-known as People who work abroad",
            description: "There are Filipinos all over the world from Europe to the Middle East, North America, and all across Asia. Filipino workers have been known to be hard-working, friendly, and loyal to their employers.",
        },
        {
            image: getRandomImage(),
            title: "Low average age",
            description: "The average in the Philippines is around 25 years old, which means that there is a lot of youthful energy available for work.",
        },
        {
            image: getRandomImage(),
            title: "English Speaking",
            description: "The demand for workers who are competent in the English language is growing with the rise of Globalization. The English language is especially important in the hotel and restaurant industry. Almost all Filipinos are proficient in English and are happy to share and utilize their skills.",
        },
        {
            image: getRandomImage(),
            title: "Cost-effective high quality labor",
            description: "Although it may cost less to hire Filipino workers than locals, there will be no sacrifice in the quality of work. In fact, Filipinos who work abroad tend to work even harder than locals because of their feelings of gratitude and urgency to perform.",
        },
        {
            image: getRandomImage(),
            title: "Low minimum wage",
            description: "The minimum wage in the Philippines is around $200 USD/month. This fact has driven Filipinos to find employment in foreign countries. They work extremely hard because they feel blessed to be earning higher wages abroad.",
        }
 
    ]
}

export function getAllClient(){
    return [
        {
            image:"/img/client/client1.png"
        },
        {
            image:"/img/client/client2.png"
        },
        {
            image:"/img/client/client3.png"
        },
        {
            image:"/img/client/client4.png"
        },
        {
            image:"/img/client/client5.png"
        },
        {
            image:"/img/client/client6.png"
        },
        {
            image:"img/client/client7.png"
        },
        {
            image:"/img/client/client8.png"
        },
        {
            image:"/img/client/client9.png"
        },
        {
            image:"/img/client/client10.png"
        },
        {
            image:"/img/client/client11.png"
        },
        {
            image:"/img/client/client12.png"
        },
        {
            image:"/img/client/client13.png"
        },
        {
            image:"/img/client/client14.png"
        },
        {
            image:"/img/client/client15.png"
        },
        {
            image:"/img/client/client16.png"
        },
        {
            image:"/img/client/client17.png"
        },
        {
            image:"/img/client/client18.png"
        },
        {
            image:"/img/client/client19.png"
        },
        {
            image:"/img/client/client20.png"
        },
        {
            image:"/img/client/client21.png"
        },
        {
            image:"/img/client/client22.png"
        },
        {
            image:"/img/client/client23.png"
        },
        {
            image:"/img/client/client24.png"
        },
        {
            image:"/img/client/client25.png"
        },
        {
            image:"/img/client/client26.png"
        },
        {
            image:"/img/client/client27.png"
        },
        {
            image:"/img/client/client28.png"
        },
        {
            image:"/img/client/client29.png"
        }
    ]
}

export function ShowGallery(){
    return [
        {
            image: getRandomImage(),
        },
        {
            image: getRandomImage(),
        },
        {
            image: getRandomImage(),
        },
        {
            image: getRandomImage(),
        },
        {
            image: getRandomImage(),
        },
        {
            image: getRandomImage(),
        },
        {
            image: getRandomImage(),
        },
        {
            image: getRandomImage(),
        },
        {
            image: getRandomImage(),
        },
        {
            image: getRandomImage(),
        }
    ]
}