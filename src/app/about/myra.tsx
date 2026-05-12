import style from '../../styles/myra.module.css'


export default function Myra(){
    return (
        <>
            <section className='mt-3 mb-3'>
                <div className="row m-0 justify-content-center">
                    <div className={`${style.contSection} col-md-10 border`}>
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <div style={{width:"15%"}}>
                                    <img src="/img/icon/line.png" style={{width:"100%"}} alt="" />
                                </div>
                                <div style={{width:"85%"}} className='p-3'>
                                    <h2 className={style.title}>Myra</h2>
                                    <small style={{color:"#0d6308"}}>(Manpower Database)</small>
                                    <p className={style.description}>
                                        Myra is Placewell’s personalized manpower support system that ensures all selected workers’ relevant information and documents are properly organized, upholding an accurate and timely deployment process. It also maintains a readily available pool of candidates across various industries, with filters for quick and easy searching and sorting. Placewell also provides employers with their own personalized Myra accounts, offering customized features tailored to their specific industry needs.
                                    </p>
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                                <div className={style.leftContent}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}