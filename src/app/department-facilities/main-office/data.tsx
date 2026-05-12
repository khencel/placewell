import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoDocumentSharp, IoCalculator  } from "react-icons/io5";


export function getDataList(){
    return [
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: "Reception",
            description: "Our reception area offers a welcoming and professional environment, designed to provide comfort and a positive first impression for all visitors.",
            image:{
                img1:"/img/mainOffice/1.jpg",
                img2:"/img/mainOffice/2.jpg",
                img3:"/img/mainOffice/3.jpg",
            }
        },
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: "Conference Rooms",
            description: "Our conference rooms are designed to support productive meetings.",
            image:{
                img1:"/img/mainOffice/4.jpg",
                img2:"/img/mainOffice/5.jpg",
                img3:"/img/mainOffice/6.jpg",
            }
        },
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: "Interview Rooms",
            description: "We have interview rooms for one on one interviews, panel interviews and online interviews.",
            image:{
                img1:"/img/mainOffice/7.jpg",
                img2:"/img/mainOffice/8.jpg",
                img3:"/img/mainOffice/9.jpg",
            }
        },
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: "Orientation Rooms",
            description: "These are our designated rooms for conducting Pre-Departure orientations.",
            image:{
                img1:"/img/department/10.jpg",
                img2:"/img/department/11.jpg",
                img3:"/img/department/12.jpg",
            }
        }
    ]
}

export function getCafeteria(){
    return {
        icon:<RiTeamFill style={{fontSize:"40px"}} />,
        title: "Cafeteria",
        description: "We have a cafeteria where employees and applicants can enjoy meals at a reasonable price.",
        image:{
            img1:"/img/mainOffice/10.jpg",
            img2:"/img/mainOffice/11.jpg",
            img3:"/img/mainOffice/12.jpg",
        }
    }
}
