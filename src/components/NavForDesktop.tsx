"use client";
import { useState } from "react";
import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";


export default function NavForDesktop() {
    const [megaOpen, setMegaOpen] = useState(false);
    const [megaOpen2, setMegaOpen2] = useState(false);
    const [megaOpen3, setMegaOpen3] = useState(false);
    
    return (
        <>
            <li className="d-none d-md-block"><a href="">Home</a></li>
            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                >
                <a href="#" className="nav-link active">
                    About Us
                </a>

                <div className={`mega-menu ${megaOpen ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>About Us</strong>
                        <div className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>Corporate Identity</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>Our Services</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Branch Offices</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Worldwide Careers</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li className="d-none d-md-block"><a href="#">Engage with Us</a></li>

            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen2(true)}
                onMouseLeave={() => setMegaOpen2(false)}
                >
                <a href="#" className="nav-link active">
                    Facilities and Divisions
                </a>

                <div className={`mega-menu ${megaOpen2 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>Facilities and Divisions</strong>
                        <div className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>Main Office</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>Branch Offices</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Dormitory</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Pro-Tech Skills</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Hashira Skills</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen3(true)}
                onMouseLeave={() => setMegaOpen3(false)}
                >
                <a href="#" className="nav-link active">
                    TESTIMONIALS
                </a>

                <div className={`mega-menu ${megaOpen3 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>TESTIMONIALS</strong>
                        <div className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>Client TesDmonials</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>OFW Testimonials</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </li>

            <li className="d-none d-md-block"><a href="#">GALLERY</a></li>
            <li className="d-none d-md-block"><a href="#">Contact Us</a></li>
        </>
    )
}