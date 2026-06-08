"use client"
import { useTranslations } from "next-intl";

export function getData(){
    const t = useTranslations();
    return [
        {
            number:1,
            title:t("tradeTest.welding"),
            description:t("tradeTest.weldingDesc"),
            videoId:"/video/welding.mp4",
            image1:"/img/trade/DSC03612.jpg",
            image2:"/img/trade/DSC03614.jpeg",
            image3:"/img/trade/DSC03616.jpg",
        },
        {
            number:2,
            title:t("tradeTest.carpentry"),
            description:t("tradeTest.carpentryDesc"),
            videoId:"",
            image1:"/img/trade/DSC03717.jpeg",
            image2:"/img/trade/DSC03739.jpg",
            image3:"/img/trade/DSC03744.jpeg",
        },
        {
            number:3,
            title:t("tradeTest.trailer"),
            description:t("tradeTest.trailerDesc"),
            videoId:"1vIU3R-BIDQ",
            image1:"/img/defaultImage.png",
            image2:"/img/defaultImage.png",
            image3:"/img/trade/DSC03744.jpeg",
        },
        // {
        //     number:4,
        //     title:t("tradeTest.masonry"),
        //     description:t("tradeTest.masonryDesc"),
        //     videoId:"1vIU3R-BIDQ",
        //     image1:"/img/defaultImage.png",
        //     image2:"/img/defaultImage.png"
        // },
        // {
        //     number:5,
        //     title:t("tradeTest.painting"),
        //     description:t("tradeTest.paintingDesc"),
        //     videoId:"1vIU3R-BIDQ",
        //     image1:"/img/defaultImage.png",
        //     image2:"/img/defaultImage.png"
        // },
        // {
        //     number:6,
        //     title:t("tradeTest.scaffolding"),
        //     description:t("tradeTest.scaffoldingDesc"),
        //     videoId:"1vIU3R-BIDQ",
        //     image1:"/img/defaultImage.png",
        //     image2:"/img/defaultImage.png"
        // },
        // {
        //     number:7,
        //     title:t("tradeTest.heavy"),
        //     description:t("tradeTest.heavyDesc"),
        //     videoId:"1vIU3R-BIDQ",
        //     image1:"/img/defaultImage.png",
        //     image2:"/img/defaultImage.png"
        // },
        // {
        //     number:8,
        //     title:t("tradeTest.caregiving"),
        //     description:t("tradeTest.caregivingDesc"),
        //     videoId:"1vIU3R-BIDQ",
        //     image1:"/img/defaultImage.png",
        //     image2:"/img/defaultImage.png"
        // },
        // {
        //     number:9,
        //     title:t("tradeTest.food"),
        //     description:t("tradeTest.foodDesc"),
        //     videoId:"1vIU3R-BIDQ",
        //     image1:"/img/defaultImage.png",
        //     image2:"/img/defaultImage.png"
        // },
        // {
        //     number:10,
        //     title:t("tradeTest.house"),
        //     description:t("tradeTest.cleaningDesc"),
        //     videoId:"1vIU3R-BIDQ",
        //     image1:"/img/defaultImage.png",
        //     image2:"/img/defaultImage.png"
        // }
    ]
}