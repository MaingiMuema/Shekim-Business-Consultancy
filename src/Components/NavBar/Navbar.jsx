import React from "react";
import Logo from '../../assets/Shekim Logo.svg';
import './Navbar.css';

const Navbar = () =>{
    document.querySelectorAll('.dropdown-toggle').forEach(item => {
        item.addEventListener('click', event => {
       
          if(event.target.classList.contains('dropdown-toggle') ){
            event.target.classList.toggle('toggle-change');
          }
          else if(event.target.parentElement.classList.contains('dropdown-toggle')){
            event.target.parentElement.classList.toggle('toggle-change');
          }
        })
      });
      
    return(
        <div className="nav-container" style={{borderBottom: '0.5px solid black', position: 'relative'}}>
            <div className="ribbon-container">
                <div className="ribbon"></div>
            </div>
            <div className="container py-4">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand d-flex gap-2" href="/" style={{backgroundColor: "white"}}><img style={{width: '64px', height: '64px'}} src={Logo} alt="Logo" /><span className="company-name d-none d-md-block"><b><span style={{color: '#ac8743'}}>Shekim</span> Business Consultancy</b></span><br/></a>
                        <button class="navbar-toggler m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Accounting Services
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/Bookkeeping">Bookkeeping</a></li>
                                        <li><a class="dropdown-item" href="/TaxPreparation">Tax Preparation and Planning</a></li>
                                        <li><a class="dropdown-item" href="/AuditAssurance">Audit and Assurance</a></li>
                                        <li><a class="dropdown-item" href="/FinancialStatement">Financial Statement Preparation</a></li>
                                        <li><a class="dropdown-item" href="/PayrollServices">Payroll Services</a></li>
                                        <li><a class="dropdown-item" href="/ForensicAccounting">Forensic Accounting</a></li>
                                        <li><a class="dropdown-item" href="/ManagementAccounting">Management Accounting</a></li>
                                        <li><a class="dropdown-item" href="/GovernmentCompliance">Government Compliance</a></li>
                                        <li><a class="dropdown-item" href="/VirtualCFO">Virtual CFO Services</a></li>
                                        <li><a class="dropdown-item" href="/InternationalAccounting">International Accounting</a></li>
                                        <li><a class="dropdown-item" href="/FuelAccountingServices">Fuel Accounting Services</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/About">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Contact">Contact</a>
                                </li>
                                <div class="nav-item pt-1 consultation-btn">
                                    <a class="free-consultation" href="/free-consultation">Free Consultation</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;

