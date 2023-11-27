import React, { useState } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Blogs from "../../Components/Blogs/Blogs";
import './Landingpage.css';
import { BsArrowRight } from "react-icons/bs"
import { FaBook, FaCalculator, FaClipboardCheck, FaFileAlt, FaMoneyCheckAlt, FaChartBar, FaGavel , FaGasPump } from 'react-icons/fa';

const LandingPage = () =>{

    const [showAll, setShowAll] = useState(false);

    const services = [
        {
          icon: <FaBook style={{ color: '#ac8743', width: '48px', height: '48px', marginTop: '10px' }} />,
          title: 'Bookkeeping',
          description: 'Our professional bookkeeping services ensure accurate and organized financial records for your business. From transaction entries to ledger maintenance, we handle it all, allowing you to focus on growing your business with confidence.',
          link: '/Bookkeeping'
        },
        {
          icon: <FaCalculator style={{ color: '#ac8743', width: '48px', height: '48px', marginTop: '10px' }} />,
          title: 'Tax Preparation and Planning',
          description: 'Navigate the complexities of tax regulations with our comprehensive tax preparation and planning services. We tailor strategies to optimize your tax position, ensuring compliance and maximizing deductions, so you can minimize liabilities and plan for the future.',
          link: '/TaxPreparation'
        },
        {
          icon: <FaClipboardCheck style={{ color: '#ac8743', width: '48px', height: '48px', marginTop: '10px' }} />,
          title: 'Audit and Assurance',
          description: 'Gain trust and transparency with our audit and assurance services. We meticulously examine your financial statements, providing insights and assurance to stakeholders. Our commitment to integrity and accuracy sets the foundation for your financial credibility.',
          link: '/AuditAssurance'
        },
        {
          icon: <FaFileAlt style={{ color: '#ac8743', width: '48px', height: '48px', marginTop: '10px' }} />,
          title: 'Financial Statement Preparation',
          description: 'Gain trust and transparency with our audit and assurance services. We meticulously examine your financial statements, providing insights and assurance to stakeholders. Our commitment to integrity and accuracy sets the foundation for your financial credibility.',
          link: '/FinancialStatementPrep'
        },
        {
          icon: <FaMoneyCheckAlt style={{ color: '#ac8743', width: '48px', height: '48px', marginTop: '10px' }} />,
          title: 'Payroll Services',
          description: 'Streamline payroll processes with our efficient payroll services. From calculating wages to managing deductions and compliance, we handle every aspect of payroll, allowing you to focus on what matters most—your business and your employees.',
          link: '/PayrollServices'
        },
        {
          icon: <FaChartBar style={{ color: '#ac8743', width: '48px', height: '48px', marginTop: '10px' }} />,
          title: 'Management Accounting',
          description: 'Empower informed decision-making with our management accounting services. We provide strategic financial insights, budgeting, and forecasting to help you steer your business toward sustainable growth and profitability.',
          link: '/ManagementAccounting'
        },
        {
          icon: <FaGavel style={{ color: '#ac8743', width: '48px', height: '48px', marginTop: '10px' }} />,
          title: 'Government Compliance',
          description: 'Navigate the complex landscape of government regulations effortlessly. Our compliance services ensure your business adheres to all relevant laws and regulations, mitigating risks and fostering a reputation for ethical and responsible business practices.',
          link: '/GovernmentCompliance'
        },
        {
          icon: <FaGasPump style={{ color: '#ac8743', width: '48px', height: '48px', marginTop: '10px' }} />,
          title: 'Fuel Accounting Services',
          description: 'Optimize your fuel-related financial processes with our specialized accounting services. From tracking fuel expenses to compliance management, we provide tailored solutions to keep your operations running smoothly and cost-effectively.',
          link: '/FuelAccountingServices'
        },
      ];

      const visibleServices = showAll ? services : services.slice(0, 4);
      

    return(
        <>
            <Navbar />  
            <div className="container-fluid hero-bg">
                <div className="container">
                    <div className="row py-lg-5">
                        <div className="col-12 col-lg-8 py-5">
                            <h1>Empower Your Business Success with <span style={{color: '#ac8743'}}>Shekim </span>Business Consultancy<span style={{fontSize: '12px', color: '#ac8743'}}> - Your Partner in Growth</span></h1>
                            <p className="my-lg-4 py-4">
                            Shekim Business Consultancy is your trusted partner for all your business needs.
                                We specialize in providing top-notch accounting, tax planning, and business advisory services.
                                Our team of experienced professionals is dedicated to helping you achieve your business goals.
                            </p>
                            <button className="cta">
                                Talk to an Expert
                                <BsArrowRight style={{marginLeft: "8px"}} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-5">
                <div className="container my-lg-5">  
                    <h1 className="text-center">Accounting Services</h1>
                    <div className="row py-lg-4">
                        {visibleServices.map((service, index) => (
                            <div key={index} className="col-lg-6 col-sm-12 col-md-6 item p-2 my-2">
                                <a href={service.link} style={{textDecoration: 'none'}}>
                                    <div className="card card-block p-5 h-100" id="item-card">
                                        <div className="row">
                                            <div className="col-3">
                                            {service.icon}
                                            </div>
                                            <div className="col-9">
                                                <h2 className="card-title mt-3 mb-3" style={{ color: '#ac8743' }}>{service.title}</h2>
                                                <p className="card-text">{service.description}</p>
                                                <div className="d-flex justify-content-end">
                                                    <BsArrowRight id="rightArrow" style={{ marginLeft: "8px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}      
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        {!showAll && services.length > 4 && (
                            <button
                            className="free-consultation"
                            onClick={() => setShowAll(true)}
                            >
                            Load More
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-lg-4 py-lg-5" id="whychooseus">
                <div class="row">
                    <div class="col-lg-4 p-5 d-flex align-items-center">
                        <div className="container">
                            <h1 className="choose-us-text" style={{ color: '#000', marginTop: '60px'}}>Why Choose Us?</h1>
                        </div>
                    </div>
                    <div class="col-lg-8 p-lg-5" style={{overflowY: 'auto', height: '700px'}} id="values">
                        <ul>
                            <li className="card card-block p-5 my-3" id="item-card" style={{background: '#ac87437e'}}>
                                <h3 style={{ color: '#000'}}>i. Client-Centric Approach</h3>
                                <p style={{color: '#000'}}>At Shekim Business Consultancy, our clients are at the heart of everything we do. We take the time to understand your business and tailor our services to meet your unique needs.</p>
                            </li>
                            <li className="card card-block p-5 my-3" id="item-card" style={{background: '#ac87436e'}}>
                                <h3 style={{ color: '#000'}}>ii. Proven Track Record</h3>
                                <p style={{color: '#000'}}>Our proven track record of delivering results speaks for itself. We have helped numerous businesses achieve their goals through our innovative solutions.</p>
                            </li>
                            <li className="card card-block p-5 my-3" id="item-card" style={{background: '#ac87436e'}}>
                                <h3 style={{ color: '#000'}}>iii. Commitment to Excellence</h3>
                                <p style={{color: '#000'}}>We are committed to delivering the highest level of service. Our team continually strives for excellence in all areas of our work.</p>
                            </li>
                            <li className="card card-block p-5 my-3" id="item-card" style={{background: '#ac87436e'}}>
                                <h3 style={{ color: '#000'}}>iv. Innovative Solutions</h3>
                                <p style={{color: '#000'}}>We leverage the latest technologies and methodologies to deliver innovative solutions that keep your business ahead of the curve.</p>
                            </li>
                            <li className="card card-block p-5 my-3" id="item-card" style={{background: '#ac87436e'}}>
                                <h3 style={{ color: '#000'}}>v. Transparent Communication</h3>
                                <p style={{color: '#000'}}>We believe in maintaining open and transparent communication with our clients, ensuring you are always informed and involved in the decision-making process.</p>
                            </li>
                            <li className="card card-block p-5 my-3" id="item-card" style={{background: '#ac87436e'}}>
                                <h3 style={{ color: '#000'}}>vi. Ethical Practices</h3>
                                <p style={{color: '#000'}}>We adhere to the highest ethical standards in all our operations, providing you with services you can trust.</p>
                            </li>
                            <li className="card card-block p-5 my-3" id="item-card" style={{background: '#ac87436e'}}>
                                <h3 style={{ color: '#000'}}>vii. Continuous Support</h3>
                                <p style={{color: '#000'}}>We offer continuous support and guidance even after project completion, ensuring your business continues to thrive.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Blogs />
            <Footer />
        </>
    );
}

export default LandingPage;