import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";
import Link from "next/link";

export default function navFormMobile() {
    return (
        <>
            <li className="forMobile"><Link href="/" className="ms-2">Home</Link></li>
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
                                <Link href="/about/corporate-identity" className="mega-item">
                                    <FaHospital className="social-icon" />
                                    <div>
                                    <h4>Corporate Identity</h4>
                                    <p>Know all about one of the Philippines’ leading manpower agencies</p>
                                    </div>
                                </Link>

                                <div className="mega-item">
                                    <FaUserDoctor className="social-icon" />
                                    <div>
                                        <Link href="/about">
                                            <h4>Our Services</h4>
                                        </Link>
                                        <p>
                                            From Skills and Language  
                                            <a href="/training">Training</a> 
                                            to  
                                            <a href="/trade-testing">Trade Testing</a> 
                                            – we do it all!
                                        </p>
                                    </div>
                                </div>

                                <Link href="/about/branches" className="mega-item">
                                    <FaSyringe className="social-icon" />
                                    <div>
                                    <h4>Branch Offices</h4>
                                    <p>We have nationwide presence and recruit workers from all over the Philippines</p>
                                    </div>
                                </Link>
                                <Link href="/worldwide-careers" className="mega-item">
                                    <FaSyringe className="social-icon" />
                                    <div>
                                    <h4>Worldwide Careers</h4>
                                    <p>Over 200,000 Filipinos deployed to more than 30 different countries</p>
                                    </div>
                                </Link>
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
                        Departments and Facilities 
                        </span>
                    
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="mega-grid">
                                    <strong>Departments and Facilities</strong>
                                    <Link href="/department-facilities/department" className="mega-item">
                                        <FaHospital className="social-icon" />
                                        <div>
                                        <h4>Departments</h4>
                                        <p>Discover how we deliver streamlined operations</p>
                                        </div> 
                                    </Link>

                                    <Link href="/department-facilities/main-office" className="mega-item">
                                        <FaUserDoctor className="social-icon" />
                                        <div>
                                        <h4>Main Office</h4>
                                        <p>Explore our five-storey headquarters in Makati</p>
                                        </div>
                                    </Link>

                                    <Link href="/department-facilities/branch-offices" className="mega-item">
                                        <FaSyringe className="social-icon" />
                                        <div>
                                        <h4>Branch Offices</h4>
                                        <p>Learn more about our nationwide locations</p>
                                        </div>
                                    </Link>

                                    <div className="mega-item">
                                        <FaSyringe className="social-icon" />
                                        <div>
                                        <h4>Dormitory</h4>
                                        <p>View our well-maintained housing facilities for selected workers</p>
                                        </div>
                                    </div>

                                    <div className="mega-item">
                                        <FaSyringe className="social-icon" />
                                        <div>
                                        <h4>Pro-Tech Skills</h4>
                                        <p>Our TESDA accredited Hospitality and Caregiving Training Center</p>
                                        </div>
                                    </div>

                                    <div className="mega-item">
                                        <FaSyringe className="social-icon" />
                                        <div>
                                        <h4>Hashira Skills</h4>
                                        <p>Our TESDA accredited Japanese Language and Construction Training Center</p>
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
                        Testimonials 
                        </span>
                    
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="mega-grid">
                                    <strong>Testimonials</strong>
                                    <div className="mega-item">
                                        <FaHospital className="social-icon" />
                                        <div>
                                        <h4>Client Testimonials</h4>
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