import s from '@/styles/whatsApp.module.css'

export default function WhatsApp(){
    return (
        <>
            <section>
                <div className="row m-0 justify-content-center">
                    <div className={`${s.contSection} col-md-10 border`}>
                        <div className={`row`}>
                            <div className="col-md-4 p-3">
                                <h2 className={s.title} style={{fontSize:"20px"}}>WhatsApp and Line <br />Group Chat System</h2>
                                <div className={s.divider} />
                                <div>
                                    <span className={s.description} style={{fontSize:"12px"}}>
                                        To ensure fast and efficient communication with all our partners and clients, we use a group chat system managed by our dedicated staff. We prioritize quick and accurate responses, recognizing the importance of time in the recruitment process.
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 p-3 justify-content-center align-items-center">
                                <div className='d-flex'>
                                    <div style={{width:"25%"}}>
                                        <img src="/img/icon/whatsapp.png" style={{width:"70%"}} alt="" />
                                    </div>
                                    <div>
                                        <span className={s.title} style={{fontSize:"14px"}}>WhatsApp Groups</span>
                                        <br />
                                        <span className={s.description}>
                                            Instant messaging and updates for smooth communication
                                        </span>
                                        
                                    </div>
                                </div>
                                <div className='d-flex mt-3'>
                                    <div style={{width:"25%"}}>
                                        <img src="/img/icon/line.png" style={{width:"70%"}} alt="" />
                                    </div>
                                    <div>
                                        <span className={s.title} style={{fontSize:"14px"}}>LINE Groups</span>
                                        <br />
                                        <span className={s.description}>
                                            Organized group chats for better coordination and collaboration.
                                        </span>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-md-4">
                                <div className={s.socBackground}>
                                    <img src="/img/phone.png" style={{height:"100%"}} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}