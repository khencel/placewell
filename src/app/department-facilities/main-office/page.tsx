import Banner from "@/components/Banner"
import CustomSectionLight from "@/components/CustomSectionLight"
import {getDataList}  from "./data"


export default function MainOffice() {
    const dataList = getDataList();

    return (
        <>
            <Banner
                backgroundImage="/img/img2.jpg"
                title="Departments and Facilities"
                subtitle="Main Office"
                description="Explore our five-storey headquarters in Makati." 
            />

            <CustomSectionLight 
                headerTitle="Welcome to our HQ!" 
                itemList={dataList}
                isList={true}
            />
        </>
    )
}