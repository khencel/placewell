import Banner from "@/components/Banner"
import CustomSectionLight from "@/components/CustomSectionLight"
import ImageWithThumbnail from "@/components/ImageWithThumbnail";
import {getDepartmentList}  from "./data"
export default function DepartmentPage() {
    const departments = getDepartmentList();
    return (
        <>
            <Banner
                backgroundImage="/img/banner/5900600_3742.jpg"
                title="Departments and Facilities"
                subtitle="Departments"
                description="Placewell structures its departments to ensure streamlined, efficient, and well-organized operations."
            />

            <CustomSectionLight 
                headerTitle="Our Departments" 
                itemList={departments}
                isList={true}
            />
        </>
    )
}