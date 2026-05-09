import s from '@/styles/whatsApp.module.css'

export default function WhatsApp(){
    return (
        <>
            <section>
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-4 border">
                                <h2 className={s.title}>WhatsApp and Line <br />Group Chat System</h2>
                                <div className={s.divider} />
                                <div>
                                    <span className={s.description}>
                                        To ensure fast and efficient communication with all our partners and clients, we use a group chat system managed by our dedicated staff. We prioritize quick and accurate responses, recognizing the importance of time in the recruitment process.
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-3 border d-flex">
                                <div>
                                    test
                                </div>
                                <div>
                                    <span className={s.title} style={{fontSize:"14px"}}>WhatsApp Groups</span>
                                    <br />
                                    <span className={s.description}>
                                        Instant messaging and updates for smooth communication
                                    </span>
                                    
                                </div>
                            </div>
                            <div className="col-md-5 border">
                                test
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}