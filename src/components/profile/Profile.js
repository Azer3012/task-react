import React from "react";
import "./css/profile.css";
function Profile() {
  return (
    <div className="profile">
      <div className="info">
        <div className="img-photo">
          <img src="photo.jpg" alt="" />
        </div>
        <div className="profile-info">
          <p className="name">Elon Musk</p>
          <span className="city">Baku</span>
          <span className="date">2s once</span>
        </div>
      </div>
      <div className="icon">
        <i className="fa fa-ellipsis-v"></i>
      </div>
    </div>
  );
}

export default Profile;
