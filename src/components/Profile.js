import React from "react";
import AuthService from "../services/auth.service";
import ProfilePic from "../assets/Profile.jpg"
import Input from "react-validation/build/input";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div>
      <div className="w3-display-container w3-container" >
        <img src={ProfilePic} alt="LoginPic" style={{ width: '100%' }} />
      </div>
      <br />
      <div className="w3-container w3-black w3-padding-32 ">
        <h1>
          {currentUser.firstName}'s Profile Page
        </h1>
      </div>
      <div className="w3-container w3-light-grey  w3-padding-32 ">
        <table style={{width: "80%", marginLeft: "auto", marginRight: "auto", lineHeight: "40px"}}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentUser.firstName}</td>
              <td>{currentUser.lastName}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentUser.email}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Address</th>
              <th>Province</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentUser.address}</td>
              <td>{currentUser.province}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Is a Service Provider?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentUser.serviceProvider}</td>
            </tr>
          </tbody>
        </table>
      
        {/* <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul> */}
      </div>


    </div>
  );
};

export default Profile;