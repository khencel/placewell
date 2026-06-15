import { FaBuilding } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineLocalLaundryService } from "react-icons/md";
export function getDormitory(){
    return [
        {
            icon:<FaBuilding style={{fontSize:"20px"}}/>,
            title:"Exterior",
            desc:"Our centrally located facility offers modern, safe, and comfortable accommodations, able to accommodate 300+ residents. Designed with the well-being of our workers in mind, it includes secure entry, recreational areas, and easy access to local amenities. We prioritize community and support for a positive living experience.",
            img:"/img/dormitory/ext.png",
            img2:"/img/dormitory/ext2.png",
            img3:"/img/dormitory/ext3.png"
        },
        {
            icon:<IoIosBed style={{fontSize:"20px"}}/>,
            title:"Rooms",
            desc:"Our rooms are thoughtfully designed to provide a comfortable and restful living space. Each unit features secure storage, proper ventilation, and a clean, organized layout, with double-deck beds arranged to maximize space and privacy. We prioritize comfort, hygiene, and a sense of community in every room.",
            img:"/img/dormitory/room1.png",
            img2:"/img/dormitory/room2.png",
            img3:"/img/dormitory/room3.png"
        },
        {
            icon:<ImSpoonKnife style={{fontSize:"20px"}}/>,
            title:"Cafeteria",
            desc:"Our cafeteria provides a clean and welcoming space where workers can enjoy their meals comfortably. With ample seating, good ventilation, and natural lighting, it's designed to accommodate large groups while maintaining a relaxed atmosphere. We prioritize cleanliness, proper food handling areas, and a space that encourages rest and community during meal times.",
            img:"/img/dormitory/caffe1.png",
            img2:"/img/dormitory/caffe2.png",
            img3:"/img/dormitory/caffe3.png"
        },
        {
            icon:<MdOutlineLocalLaundryService style={{fontSize:"20px"}}/>,
            title:"Laundry Area",
            desc:"Our laundry area provides workers with a convenient and well-maintained space to keep their belongings clean. Equipped with reliable washing facilities and designated drying areas, it's designed for easy access and efficient use. We prioritize cleanliness, proper organization, and a hassle-free laundry experience for all residents.",
            img:"/img/dormitory/laundry.png",
            img2:"/img/dormitory/laundry1.png",
            img3:"/img/dormitory/laundry2.png"
        },
    ]
}