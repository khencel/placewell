import Banner from "@/components/Banner"
import {getDataList, getCafeteria}  from "./data"
import s from "../../department-facilities/department/department.module.css"


export default function MainOffice() {
    const dataList = getDataList();
    const cafeteria = getCafeteria();
    return (
        <>
            <Banner
                backgroundImage="/img/img2.jpg"
                title="Departments and Facilities"
                subtitle="Main Office"
                description="Explore our five-storey headquarters in Makati." 
            />

            <section className="mb-3" style={{background:"#f4f3f3"}}>
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            {
                                dataList.map((department,index)=>{
                                    return (
                                        <div className="col-md-6 py-3" key={index}>
                                            <div className={s.departmentContainerBottom}>
                                                <div style={{width:"60%"}} className="">
                                                    <div className="d-flex mb-3">
                                                        <div className="mt-3 d-flex justify-content-center align-items-center" style={{width:"30%"}}>
                                                            <span className="badge p-3 rounded-circle" style={{background:"#709C6B"}}>{department?.icon}</span>
                                                        </div>
                                                        <div className="mt-3" style={{width:"70%"}}>
                                                            <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>{department.title}</span>
                                                        </div>
                                                    </div> 
                                                    <div className="p-3">
                                                        <div className={s.descriptioCont}>
                                                            <p className="subtitle">
                                                                {department.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{width:"40%"}} className="p-3 text-center">
                                                    <div className={s.imageSize} style={{backgroundImage:`url(${department?.image?.img1})`}}>

                                                    </div>
                                                    <div className={s.imageSize} style={{backgroundImage:`url(${department?.image?.img2})`}}>

                                                    </div>
                                                    <div className={s.imageSize} style={{backgroundImage:`url(${department?.image?.img3})`}}>

                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>


                        <div className="row d-md-none">
                            <div className="col-md-6 py-3">
                                <div className={s.departmentContainer}>
                                    <div style={{width:"60%"}} className="">
                                        <div className="d-flex mb-3">
                                            <div className="mt-3 d-flex justify-content-center align-items-center" style={{width:"30%"}}>
                                                <span className="badge p-3 rounded-circle" style={{background:"#709C6B"}}>{cafeteria.icon}</span>
                                            </div>
                                            <div className="mt-3" style={{width:"70%"}}>
                                                <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>{cafeteria.title}</span>
                                            </div>
                                        </div> 
                                        <div className="p-3">
                                            <div className={s.descriptioCont}>
                                                <p className="subtitle">
                                                    {cafeteria.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:"40%"}} className="p-3 text-center">
                                        <div className={s.imageSize} style={{backgroundImage:`url(${cafeteria?.image?.img1})`}}>

                                        </div>
                                        <div className={s.imageSize} style={{backgroundImage:`url(${cafeteria?.image?.img2})`}}>

                                        </div>
                                        <div className={s.imageSize} style={{backgroundImage:`url(${cafeteria?.image?.img3})`}}>

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3 d-none d-md-block">
                            <div className="col-md-12"> 
                                <div className={s.departmentContainerBottom}>
                                    <div style={{width:"30%"}} >
                                        <div className="d-flex mb-3">
                                            <div className="mt-3 d-flex justify-content-center align-items-center" style={{width:"30%"}}>
                                                <span className="badge p-3 rounded-circle" style={{background:"#709C6B"}}>{cafeteria.icon}</span>
                                            </div>
                                            <div className="mt-3" style={{width:"70%"}}>
                                                <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>{cafeteria.title}</span>
                                            </div>
                                        </div> 
                                        <div className="p-3">
                                            <div className={s.descriptioCont}>
                                                <p className="subtitle">
                                                    {cafeteria.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:"70%"}} className=" d-flex">
                                        <div className={s.imageSize} style={{backgroundImage:`url(${cafeteria?.image?.img1})`,margin:"10px",height:"150px"}}>

                                        </div>
                                        <div className={s.imageSize} style={{backgroundImage:`url(${cafeteria?.image?.img2})`,margin:"10px",height:"150px"}}>

                                        </div>
                                        <div className={s.imageSize} style={{backgroundImage:`url(${cafeteria?.image?.img3})`,margin:"10px",height:"150px"}}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}