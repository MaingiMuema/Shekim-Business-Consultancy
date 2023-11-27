import React from "react";
import Logo from '../../assets/Shekim Logo.svg';
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaTelegramPlane, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () =>{
       
    return(
        <div>
            <footer className="footer-section">
                <div className="container-fluid px-5">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <FaMapMarkerAlt style={{color: '#ac8743', width: '64px', height: '28px', margin: '20px'}}/>
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <span><h4>Find us</h4></span>
                                        <span>At PEAK COMPLEX, MLOLONGO, MACHAKOS. P.O BOX 22944, 00100 - G.P.O NAIROBI</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <FaPhone style={{color: '#ac8743', width: '64px', height: '28px', margin: '20px'}}/>
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span> 0707986401</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <FaEnvelopeOpen style={{color: '#ac8743', width: '64px', height: '28px', margin: '20px'}}/>
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <a href="mailto: info@shekimbusinessconsultancy.com" style={{textDecoration: 'none'}}>info@shekimbusinessconsultancy.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6  mb-50">
                                <div className="footer-widget">
                                    <div className="d-flex">
                                        <div className="footer-logo">
                                            <div className="footer-logo-bg d-flex justify-content-center align-items-center">
                                                <a class="navbar-brand d-flex gap-2" href="/"><img style={{width: '64px', height: '64px'}} src={Logo} alt="Logo" /></a>
                                            </div>
                                        </div>
                                        <span className="text-white d-md-block" style={{marginLeft: '10px', marginTop: '22px'}}><b><span style={{color: '#ac8743'}}>Shekim</span> Business Consultancy</b></span><br/>
                                    </div>
                                    <div className="footer-text">
                                        <p>
                                        Shekim Business Consultancy is a premier provider of accounting solutions and business advisory services.
                                        Our team of certified accountants and financial experts leverage their extensive industry experience to 
                                        deliver innovative, tailored solutions that help your business soar. We specialize in tax planning, 
                                        financial management, and strategic business planning, ensuring your business is always on the path to success.
                                        </p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><FaFacebookF className="facebook-bg media-icon" /></a>
                                        <a href="#"><FaTwitter className="twitter-bg media-icon" /></a>
                                        <a href="#"><FaLinkedin className="linkedin media-icon" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about-us">About Us</a></li>
                                        <li><a href="/free-consultation">Free Consultation</a></li>
                                        <li><a href="blogs">Blogs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Services</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/Bookkeeping">Bookkeeping</a></li>
                                        <li><a href="/TaxPreparation">Tax Preparation and Planning</a></li>
                                        <li><a href="/AuditAssurance">Audit and Assurance</a></li>
                                        <li><a href="/FinancialStatement">Financial Statement Preparation</a></li>
                                        <li><a href="/PayrollServices">Payroll Services</a></li>
                                        <li><a href="/ForensicAccounting">Forensic Accounting</a></li>
                                        <li><a href="/ManagementAccounting">Management Accounting</a></li>
                                        <li><a href="/GovernmentCompliance">Government Compliance</a></li>
                                        <li><a href="/VirtualCFO">Virtual CFO Services</a></li>
                                        <li><a href="/InternationalAccounting">International Accounting</a></li>
                                        <li><a href="/FuelAccountingServices">Fuel Accounting Services</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><FaTelegramPlane style={{ transform: 'rotate(-6deg)', fontSize: '22px', color: '#fff'}} /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Shekim Business Consultancy</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Terms and Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;