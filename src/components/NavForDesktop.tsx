"use client";
import { useState } from "react";
import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";


export default function NavForDesktop() {
    const [megaOpen, setMegaOpen] = useState(false);
    const [megaOpen2, setMegaOpen2] = useState(false);
    
    return (
        <>
            <li className="d-none d-md-block"><a href="">Home</a></li>
            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                >
                <a href="#" className="nav-link active">
                    About Our Company
                </a>

                <div className={`mega-menu ${megaOpen ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

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
            </li>

            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen2(true)}
                onMouseLeave={() => setMegaOpen2(false)}
                >
                <a href="#" className="nav-link active">
                    Our Services
                </a>

                <div className={`mega-menu ${megaOpen2 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

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
            </li>

            <li className="d-none d-md-block"><a href="#">Grow with us</a></li>
            <li className="d-none d-md-block"><a href="#">Get in touch</a></li>
            <li className="d-none d-md-block"><a href="#">Get in touch</a></li>
            <li className="d-none d-md-block"><a href="#">Get in touch</a></li>
        </>
    )
}