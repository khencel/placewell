import styles from "./slide4.module.css"
import {
  FaCheckCircle,
  FaUsers,
  FaBuilding,
  FaGraduationCap
} from "react-icons/fa";

export default function Slide4(){
    return (
        <>
            <section className={styles.sectionStyle}>
                <div className="row">
                    <div className="col-md-6 border">
                        <div>
                            <h2 className={styles.header_1} style={{marginTop:"10%"}}>Excellence</h2>
                            <h1 className={styles.header_1} style={{color:"#8F6843"}}>Delivered</h1>
                            <h4 className={styles.header_1}>Experience. Modern Facilities. Skilled Workforce</h4>

                            <div style={{ marginLeft: "15%", marginTop: "15%" }}>
                                <div className="d-flex align-items-center mb-3">
                                    <span className="badge bg-success rounded-5 p-2"><FaCheckCircle size={34}/></span>
                                    
                                    <div className={`${styles.itemStyle} ms-3`}>Proven Track Record</div>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <span className="badge bg-success rounded-5 p-2"><FaUsers size={34} /></span>
                                    <div className={`${styles.itemStyle} ms-3`}>Massive and Organized Recruitment</div>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <span className="badge bg-success rounded-5 p-2"><FaBuilding size={34} /></span>
                                    <div className={`${styles.itemStyle} ms-3`}>Modern Facilities</div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <span className="badge bg-success rounded-5 p-2"><FaGraduationCap size={34} /></span>
                                    <div className={`${styles.itemStyle} ms-3`}>In-House Skills and Language Training</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}