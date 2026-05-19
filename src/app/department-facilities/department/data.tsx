import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoDocumentSharp, IoCalculator  } from "react-icons/io5";

export function getDepartmentList(){
    return [
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: "International Human Resource Department",
            description: "We assign dedicated contact persons for each market we serve. They maintain constant communication with our clients through a group chat system, ensuring timely and accurate responses for an efficient deployment process. We have designated departments for the Middle East, Europe, Japan, Hong Kong, and other Asian countries.",
            image:{
                img1:"/img/department/DSC03279.jpg",
                img2:"/img/department/DSC04561.jpg",
                img3:"/img/department/DSC04593.jpg",
            }
        },
        {
            icon:<FaUser style={{fontSize:"40px"}} />,
            title: "Manpower Support Department",
            description: "The Manpower Support Team is responsible for recruiting workers and coordinating interview schedules. They screen applicants, verify qualifications, and arrange interviews with employers. The team also manages and maintains a database of tens of thousands of qualified Filipino workers within our Myra System.",
            image:{
                img1:"/img/department/DSC04678.jpg",
                img2:"/img/department/DSC04655.jpg",
                img3:"/img/department/DSC04658.jpg",
            }
        },
        {
            icon:<GiInjustice style={{fontSize:"40px"}} />,
            title: "OFW Welfare (Legal) Department",
            description: "Placewell prioritizes the welfare of its deployed workers through ongoing support and care. Our dedicated call center operates nearly 24/7 to promptly address concerns and provide assistance to distressed workers abroad.",
            image:{
                img1:"/img/department/DSC04632.jpg",
                img2:"/img/defaultImage.png",
                img3:"/img/defaultImage.png",
            }
        },
        {
            icon:<IoDocumentSharp style={{fontSize:"40px"}} />,
            title: "Processing Department",
            description: "Our dedicated team handles all required documentation efficiently and accurately to ensure minimal delays in the deployment process.",
            image:{
                img1:"/img/department/DSC04614.jpg",
                img2:"/img/department/DSC04629.jpg",
                img3:"/img/department/DSC04621.jpg",
            }
        },
        
    ]
}


export function getAccount(){
    return {
            icon:<IoCalculator style={{fontSize:"40px"}} />,
            title: "Accounting Department",
            description: "We maintain disciplined and organized financial management across all operations.",
            image:{
                img1:"/img/department/DSC03421.jpg",
                img2:"/img/defaultImage.png",
                img3:"/img/defaultImage.png",
            }
        }
}