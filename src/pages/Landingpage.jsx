import React from "react";
import profile from "../assets/profile.png";
import "./Landingpage.css";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <div>
        <div>
          <nav className="navbar navbar-dark bg-dark border-bottom border-body">
            <div className="container-fluid">
              <a href="http://localhost:3000/" className="navbar-brand">
                <img
                  className="logoimg"
                  src="./logo.png"
                  alt="IIT Ropar Logo"
                  height="80"
                />
              </a>
              <div className="d-flex">
                <button className="btn btn-outline-success me-2" type="submit">
                  Login
                </button>
                <button className="btn btn-outline-success" type="submit">
                  Signup
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div className="half-yellow">
          <div className="title-box1">
            Medical Claims
           
          </div>
          <p className="paragraph">
            An online portal for submitting and tracking medical reimbursement
            requests, thus digitalizing the process, making it more accessible
            and convenient for the staff. They can submit requests from anywhere
            with an internet connection and track the progress of their request
            without having to visit a physical office or make phone calls.{" "}
          </p>
          <div className="title-box2">
            Medical Department
          
          </div>
        </div>
        <div className="sameline">
          <div className="card">
            <div className="top">
              <h2 className="name">Hitesh Singla</h2>
              <img className="circle-img" src="./hitesh.jpg" alt="avatar_img" />
            </div>
            <div className="bottom">
              <p className="info">
                <i className="fas fa-user"></i> Director
              </p>
              <p className="info">
                <i className="fas fa-phone"></i> 9050477612
              </p>
              <p className="info">
                <i className="fas fa-envelope"></i> hiteshsingla071@gmail.com
              </p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <h2 className="name">Mohit Meena</h2>
              <img className="circle-img" src={profile} alt="avatar_img" />
            </div>
            <div className="bottom">
              <p className="info">
                <i className="fas fa-user"></i> Dean
              </p>
              <p className="info">
                <i className="fas fa-phone"></i> 9050477612
              </p>
              <p className="info">
                <i className="fas fa-envelope"></i> mohit@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="sameline">
          <div className="card">
            <div className="top">
              <h2 className="name">Mohit Kumar</h2>
              <img className="circle-img" src="./hitesh.jpg" alt="avatar_img" />
            </div>
            <div className="bottom">
              <p className="info">
                <i className="fas fa-user"></i>HOD
              </p>
              <p className="info">
                <i className="fas fa-phone"></i>9050477612
              </p>
              <p className="info">
                <i className="fas fa-envelope"></i>mohit2gmail.com
              </p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <h2 className="name">Imrozepal Singh</h2>
              <img className="circle-img" src={profile} alt="avatar_img" />
            </div>
            <div className="bottom">
              <p className="info">
                <i className="fas fa-user"></i>Dean
              </p>
              <p className="info">
                <i className="fas fa-phone"></i>9050477612
              </p>
              <p className="info">
                <i className="fas fa-envelope"></i>imrozepal@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* <div className="b-example-divider"></div>

        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a
                  href="https://www.iitrpr.ac.in/"
                  className="nav-link px-2 text-body-secondary"
                >
                  IIT Ropar
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://twitter.com/?lang=en"
                  className="nav-link px-2 text-body-secondary"
                >
                  Twitter
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/iitrpr_iitrpr/"
                  className="nav-link px-2 text-body-secondary"
                >
                  Instagram
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/school/iitropar/"
                  className="nav-link px-2 text-body-secondary"
                >
                  Linkedin
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">
              Call Us:- +91-1881-242124
            </p>
            <p className="text-center text-body-secondary">
              Address:- IIT Ropar, Nangal Road, Rupnagar, Punjab, INDIA 140001
            </p>

            <p className="text-center text-body-secondary">
              &copy; 2016 MEDICAL CENTER. All Rights Reserved
            </p>
          </footer>
        </div> */}

        <div>
          <footer class="footer-distributed">
            <div class="footer-left">
              <h3>
                <img
                  className="logoimg"
                  src="./logo.png"
                  alt="IIT Ropar Logo"
                  height="80"
                />
              </h3>

              <p class="footer-links">
                <a href="https://www.iitrpr.ac.in/" class="link-1">
                  Indian Institute of technology, Ropar
                </a>
              </p>

              <p class="footer-company-name">
                2016 MEDICAL CENTER. All Rights Reserved
              </p>
            </div>

            <div class="footer-center">
              <div>
                <i class="fas fa-building"></i>
                <p>
                  <span>IIT Ropar</span>Rupnagar, Punjab, INDIA 140001
                </p>
              </div>

              <div>
                <i class="fas fa-phone-alt fa-flip-horizontal"></i>
                <p>+91-1881-242124</p>
              </div>

              <div>
                <i class="far fa-envelope"></i>
                <p>
                  <a href="mailto:support@company.com">support@iitrpr.com</a>
                </p>
              </div>
            </div>

            <div class="footer-right">
              <p class="footer-company-about">
                <span>About the company</span>
                An online portal for submitting and tracking medical
                reimbursement requests, thus digitalizing the process, making it
                more accessible and convenient for the staff.
              </p>

              <div class="footer-icons">
                <a href="https://twitter.com/?lang=en">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/school/iitropar/">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/iitrpr_iitrpr/">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
