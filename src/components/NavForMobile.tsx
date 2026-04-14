import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";

export default function navFormMobile() {
    return (
        <>
            <li className="forMobile"><div className="ms-2">Home</div></li>
            <li className="forMobile">
                <div className="accordion forMobile" id="accordionExample">
                    <div className="">
                    
                        <span className="accordion-button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About Us
                        </span>
                    
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="mega-grid">
                                <strong>About Us</strong>
                                <div className="mega-item">
                                    <FaHospital className="social-icon" />
                                    <div>
                                    <h4>Corporate Identity</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                                <div className="mega-item">
                                    <FaUserDoctor className="social-icon" />
                                    <div>
                                    <h4>Our Services</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                                <div className="mega-item">
                                    <FaSyringe className="social-icon" />
                                    <div>
                                    <h4>Branch Offices</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="mega-item">
                                    <FaSyringe className="social-icon" />
                                    <div>
                                    <h4>Worldwide Careers</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </li>

            <li className="forMobile"><div className="ms-2">Engage with Us</div></li>

            <li className="forMobile">
                <div className="accordion forMobile" id="accordionExample">
                    <div className="">
                    
                        <span className="accordion-button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Facilities and Divisions 
                        </span>
                    
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="mega-grid">
                                    <strong>Facilities and Divisions</strong>
                                    <div className="mega-item">
                                        <FaHospital className="social-icon" />
                                        <div>
                                        <h4>Main Office</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>

                                    <div className="mega-item">
                                        <FaUserDoctor className="social-icon" />
                                        <div>
                                        <h4>Branch Offices</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>

                                    <div className="mega-item">
                                        <FaSyringe className="social-icon" />
                                        <div>
                                        <h4>Dormitory</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>

                                    <div className="mega-item">
                                        <FaSyringe className="social-icon" />
                                        <div>
                                        <h4>Pro-Tech Skills</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>

                                    <div className="mega-item">
                                        <FaSyringe className="social-icon" />
                                        <div>
                                        <h4>Hashira Skills</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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
                        TESTIMONIALS 
                        </span>
                    
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="mega-grid">
                                    <strong>TESTIMONIALS</strong>
                                    <div className="mega-item">
                                        <FaHospital className="social-icon" />
                                        <div>
                                        <h4>Client TesDmonials</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>

                                    <div className="mega-item">
                                        <FaUserDoctor className="social-icon" />
                                        <div>
                                        <h4>OFW Testimonials</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </li>
            <li className="forMobile"><div className="ms-2">Gallery</div></li>
            <li className="forMobile"><div className="ms-2">Contact Us</div></li>
        </>
    )
}