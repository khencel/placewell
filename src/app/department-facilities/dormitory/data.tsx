import { FaBuilding } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi";
export function getDormitory(t:any){
    return [
        {
            icon:<FaBuilding style={{fontSize:"20px"}}/>,
            title:t("Exterior"),
            desc:t("ExteriorDesc"),
            img:"/img/banner/dorm.png",
            img2:"/DSC04737.jpg",
            img3:"/img/dormitory/ext3.png"
        },
        {
            icon:<IoIosBed style={{fontSize:"20px"}}/>,
            title:t("Rooms"),
            desc:t("RoomsDesc"),
            img:"/img/dormitory/room1.png",
            img2:"/img/dormitory/room2.png",
            img3:"/img/dormitory/room3.png"
        },
        {
            icon:<ImSpoonKnife style={{fontSize:"20px"}}/>,
            title:t("Cafeteria"),
            desc:t("CafeteriaDesc"),
            img:"/img/dormitory/caffe1.png",
            img2:"/img/dormitory/caffe2.png",
            img3:"/img/dormitory/caffe3.png"
        },
        {
            icon:<MdOutlineLocalLaundryService style={{fontSize:"20px"}}/>,
            title:t("Laundry"),
            desc:t("LaundryDesc"),
            img:"/img/dormitory/laundry.jpg",
            img2:"/img/dormitory/laundry1.jpg",
            img3:"/img/dormitory/laundry2.jpg"
        },
        {
            icon:<BiMaleFemale style={{fontSize:"20px"}}/>,
            title:t("Restrooms"),
            desc:t("RestroomsDesc"),
            img:"/img/dormitory/comfort.jpg",
            img2:"/img/dormitory/comfort1.jpg",
            img3:"/img/dormitory/comfort2.jpg"
        },
    ]
}