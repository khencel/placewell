import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";

export default function navFormMobile() {
    return (
        <>
            <li className="forMobile"><div className="ms-2">Home</div></li>
            <li className="forMobile">
                <div className="accordion forMobile" id="accordionExample">
                    <div className="">
                    
                        <span className="accordion-button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About Our Company
                        </span>
                    
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="mega-grid">
                                <strong>Explore our Network</strong>
                                <div className="mega-item">
                                    <FaHospital className="social-icon" />
                                    <div>
                                    <h4>Our Hospitals & Other Facilities</h4>
                                    <p>Meet who make up our network.</p>
                                    </div>
                                </div>

                                <div className="mega-item">
                                    <FaUserDoctor className="social-icon" />
                                    <div>
                                    <h4>Find a Doctor</h4>
                                    <p>Find the doctor who fits your needs.</p>
                                    </div>
                                </div>

                                <div className="mega-item">
                                    <FaSyringe className="social-icon" />
                                    <div>
                                    <h4>Our Services</h4>
                                    <p>Browse the services offered by our partners.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </li>
            <li className="forMobile">
                <div className="accordion forMobile" id="accordionExample">
                    <div className="">
                    
                        <span className="accordion-button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Engage With Us
                        </span>
                    
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="mega-grid">
                                <strong>Explore our Network</strong>
                                <div className="mega-item">
                                    <FaHospital className="social-icon" />
                                    <div>
                                    <h4>Our Hospitals & Other Facilities</h4>
                                    <p>Meet who make up our network.</p>
                                    </div>
                                </div>

                                <div className="mega-item">
                                    <FaUserDoctor className="social-icon" />
                                    <div>
                                    <h4>Find a Doctor</h4>
                                    <p>Find the doctor who fits your needs.</p>
                                    </div>
                                </div>

                                <div className="mega-item">
                                    <FaSyringe className="social-icon" />
                                    <div>
                                    <h4>Our Services</h4>
                                    <p>Browse the services offered by our partners.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </li>
            <li className="forMobile"><div className="ms-2">Our Training Centers</div></li>
            <li className="forMobile"><div className="ms-2">Testimonials</div></li>
            <li className="forMobile"><div className="ms-2">Gallery</div></li>
            <li className="forMobile"><div className="ms-2">Contact Us</div></li>
        </>
    )
}