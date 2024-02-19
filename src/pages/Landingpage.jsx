import React, { useState, useEffect } from "react";
import profile from "../assets/profile.png";

const Landingpage = () => {
  const [adminDetails, setAdminDetails] = useState({
    name: "John Doe",
    id: "12345",
    role: "Supervisor",
  });

  // Function to generate random admin profiles
  const generateRandomAdmin = () => {
    const roles = ["Director", "Doctor", "HOD", "Academic", "Paramedic"];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];

    const newAdminDetails = {
      name: `New Admin ${Math.floor(Math.random() * 100)}`,
      id: `${Math.floor(Math.random() * 100000)}`,
      role: randomRole,
    };

    setAdminDetails(newAdminDetails);
  };

  // useEffect to update admin details every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      generateRandomAdmin();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="landingpage">
      <style jsx>{`
        .landingpage {
          display: flex;
          height: 100vh;
          position: relative;
        }

        .half-green {
          flex: 1;
          background-color: rgba(171, 248, 228, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .half-yellow {
          flex: 1;
          background-color: #b4b4b8;
          clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%, 0% 0%);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo {
          width: 55%;
          height: 55%;
          opacity: 3.4;
        }

        .button-container {
          position: absolute;
          top: 2%;
          right: 80px;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }

        .button {
          width: 120px;
          height: 40px;
          background-color: #7be0b5;
          border: 2px solid #000000;
          border-radius: 40px;
          margin-left: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .title-box {
          font-weight: bold;
          font-size: 50px;
          color: #333;
          margin-bottom: 20px;
          position: relative;
        }

        .title-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #000000;
          font-weight: bold;
        }

        .paragraph {
          font-size: 20px;
          color: #333;
          padding: 20px;
          text-align: center;
        }

        .admin-details-container {
          position: relative;
          margin-top: 80px;
          padding: 20px;
          border: 2px solid #000000;
          border-radius: 90px;
          text-align: center;
          background-color: #f9f7f7;
        }

        .admin-details {
          font-weight: bold;
          font-size: 20px;
          color: #333;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-photo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 10px;
        }

        .profile-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .admin-block {
          width: 80%;
          border-top: 2px solid #000000;
          margin-top: 20px;
          padding-top: 20px;
          text-align: center;
        }

        .footer {
          height: 80px;
          background-color: #454545;
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .copyright {
          position: absolute;
          bottom: 30px;
          left: 12%;
          transform: translateX(-50%);
          color: #ffffff;
        }

        .card {
          border-radius: 25px;
          position: relative;
          padding: 25px 15px;
          background-color: #f9f7f7;
          margin: 50px 0;
          height: 250px;
          width : 25%;
          box-shadow: 0 2px 5px #ccc;
          text-align: left;
        }

        .top {
          border-radius: 25px 25px 0 0;
          height: 100px;
          width: 100%;
          background-color: #C7C8CC;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
        }

        .name {
          font-size: 2em;
          color: #2d3436;
          display: flex;
          flex: 1;
          margin: 10% 20px 0;
        }

        .card img {
          margin: 30px 20px 0 0;
        }

        .circle-img {
          border-radius: 50%;
          border: 7px solid #fff;
          width: 120px;
          height: 120px;
        }

        .bottom {
          margin-top: 70px;
        }

        .info {
          margin: 20px 0;
          color: #000000;
        }
      `}</style>

      <div>
        <div>
          <nav className="navbar navbar-dark bg-dark border-bottom border-body">
            <div className="container-fluid">
              <a  href="http://localhost:3000/" className="navbar-brand">Medical Claims</a>
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
          <div className="title-box">
            About
            <div className="title-line"></div>
          </div>
          <p className="paragraph">
            An online portal for submitting and tracking medical reimbursement
            requests, thus digitalizing the process, making it more accessible
            and convenient for the staff. They can submit requests from anywhere
            with an internet connection and track the progress of their request
            without having to visit a physical office or make phone calls.{" "}
          </p>
          <div className="title-box">
            Medical Department
            <div className="title-line"></div>

            
          </div>
          <div className="card">
            <div className="top">
              <h2 className="name">Hitesh</h2>
              <img className="circle-img" src={profile} alt="avatar_img" />
            </div>
            <div className="bottom">
              <p className="info">HOD</p>
              <p className="info">9050477612</p>
              <p className="info">hiteshsingla071gmail.com</p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <h2 className="name">Hitesh</h2>
              <img className="circle-img" src={profile} alt="avatar_img" />
            </div>
            <div className="bottom">
              <p className="info">HOD</p>
              <p className="info">9050477612</p>
              <p className="info">hiteshsingla071gmail.com</p>
            </div>
          </div>
          <div className="admin-details-container">
            <div className="admin-details">
              {/* Display the profile photo */}
              <div className="profile-photo">
                <img src={profile} alt="Admin Profile" />
              </div>
              {/* Display the updated admin details */}
              Admin Name: {adminDetails.name}
              <br />
              Admin ID: {adminDetails.id}
              <br />
              Admin Role: {adminDetails.role}
            </div>
            <div className="hemicircle"></div>
          </div>
          
        </div>

        <div class="b-example-divider"></div>

        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
                <a
                  href="https://www.iitrpr.ac.in/"
                  class="nav-link px-2 text-body-secondary"
                >
                  IIT Ropar
                </a>
              </li>
              <li class="nav-item">
                <a href="https://twitter.com/?lang=en" class="nav-link px-2 text-body-secondary">
                  Twitter
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.instagram.com/iitrpr_iitrpr/"
                  class="nav-link px-2 text-body-secondary"
                >
                  Instagram
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.linkedin.com/school/iitropar/"
                  class="nav-link px-2 text-body-secondary"
                >
                  Linkedin
                </a>
              </li>
            </ul>
            <p class="text-center text-body-secondary">
              &copy; Indian Institute of technology, Ropar
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
