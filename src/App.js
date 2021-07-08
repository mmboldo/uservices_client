import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './assets/logo.png';

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import SideNavigationBar from "./components/SideNavigationBar";
import PageSettings from "./components/PageSettings"
import Carrosel from "./components/Carrosel";
import ServicesMenu from "./components/ServicesMenu";
import Pet from "./components/Pet";
import Housekeep from "./components/Housekeep";
import Beauty from "./components/Beauty";
import ApplianceRepair from "./components/ApplianceRepair";
import HouseRepair from "./components/HouseRepair";
import PersonalCare from "./components/PersonalCare";
import HealthCare from "./components/HealthCare";
import OtherServices from "./components/OtherServices";
import Footer from "./components/Footer";
import ServicesPage from"./components/ServicesPage";


const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div >
      {/* This is the Navigation Bar */}
      <div className="vertical-nav " id="sidebar">
        <div className="py-4 px-3 mb-4 ">
          <div className="media d-flex align-items-center"><img src={logo} alt="Uservices Logo" width="230" className="mr-3" style={{ margin: "auto" }} />
          </div>
        </div>

        <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>

        <ul className="nav flex-column bg-white mb-0" style={{ paddingLeft: "12px" }}>
          <li className="nav-item" style={{ paddingLeft: "12px" }}>
            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={logOut}>
                    LogOut
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/profile" className="nav-link" >
                    My Profile
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
            <div className="navbar-nav ml-auto">
              <li className="nav-link">
                My Calendar
              </li>
            </div>
            <div className="navbar-nav ml-auto">
              <li className="nav-link">
                Favorities
              </li>
            </div>

          </li>

        </ul>

        <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Services</p>

        <ul className="nav flex-column bg-white mb-0" style={{ paddingLeft: "12px" }}>
          <li className="nav-item">
            <Link to={"/pet"} className="nav-link">
              Pet
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/housekeep"} className="nav-link">
              Housekeep
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/beauty"} className="nav-link">
              Beauty
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/applianceRepair"} className="nav-link">
              Appliance Repair
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/houseRepair"} className="nav-link">
              House Repair
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/personalCare"} className="nav-link">
              Personal Care Assistance
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/healthCare"} className="nav-link">
              Health Care
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/otherServices"} className="nav-link">
              Others Services
            </Link>
          </li>
        </ul>
        <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Help</p>

        <ul className="nav flex-column bg-white mb-0" style={{ paddingLeft: "12px" }}>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark ">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark ">
              Newsletter
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark ">
              Subscribe
            </a>
          </li>
        </ul>

      </div>
      {/* End of Navigation Bar */}

      {/* This will render the content */}
      <div class="page-content p-4 mt-3" id="content">
        <PageSettings />

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} >
              <Carrosel /> <br />
              <ServicesMenu />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/servicesPage" component={ServicesPage} />
            <Route path="/pet" component={Pet} />
            <Route path="/housekeep" component={Housekeep} />
            <Route path="/beauty" component={Beauty} />
            <Route path="/applianceRepair" component={ApplianceRepair} />
            <Route path="/houseRepair" component={HouseRepair} />
            <Route path="/personalCare" component={PersonalCare} />
            <Route path="/healthCare" component={HealthCare} />
            <Route path="/otherServices" component={OtherServices} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
          <Footer />

        </div>
      </div>
      {/* End of Content */}




    </div>
  );
};



export default App;

// <nav className="navbar navbar-dark bg-dark">
// <Link to={"/"} className="navbar-brand">
//   bezKoder
// </Link>
// <div className="navbar-nav mr-auto">
//   <li className="nav-item">
//     <Link to={"/home"} className="nav-link">
//       Home
//     </Link>
//   </li>

//   {showModeratorBoard && (
//     <li className="nav-item">
//       <Link to={"/mod"} className="nav-link">
//         Moderator Board
//       </Link>
//     </li>
//   )}

//   {showAdminBoard && (
//     <li className="nav-item">
//       <Link to={"/admin"} className="nav-link">
//         Admin Board
//       </Link>
//     </li>
//   )}

//   {currentUser && (
//     <li className="nav-item">
//       <Link to={"/user"} className="nav-link">
//         User
//       </Link>
//     </li>
//   )}
// </div>

// {currentUser ? (
//   <div className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <Link to={"/profile"} className="nav-link">
//         {currentUser.username}
//       </Link>
//     </li>
//     <li className="nav-item">
//       <a href="/login" className="nav-link" onClick={logOut}>
//         LogOut
//       </a>
//     </li>
//   </div>
// ) : (
//   <div className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <Link to={"/login"} className="nav-link">
//         Login
//       </Link>
//     </li>

//     <li className="nav-item">
//       <Link to={"/register"} className="nav-link">
//         Sign Up
//       </Link>
//     </li>
//   </div>
// )}
// </nav>