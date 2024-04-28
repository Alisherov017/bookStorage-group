import React from "react";
import profilePhoto from "../img/profilePhoto.jpg";
import instIcon from "../img/instagram-con.jpg";
import faceIcon from "../img/footer-icon.png";
import threadsIcon from "../img/threads-icon.jpg";

const ProfilePage = () => {
  return (
    <div className="profile">
      <img src={profilePhoto} alt="" />
      <h1>Jack Cornell</h1>
      <p>
        Imaginative book lover with a passion for coding. His days are filled
        with the world of words and technology, where each line of code is like
        a separate chapter in his creative story.
      </p>
      <div className="profile-block">
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instIcon} alt="" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={faceIcon} alt="" />
        </a>
        <a href="https://www.threads.net/" target="_blank">
          <img src={threadsIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
