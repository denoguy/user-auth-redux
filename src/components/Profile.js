import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <div className="profile__container">
        <img src={user.photo} alt="" />
        <h4>{user.name}</h4>
        <h3>{user.email}</h3>
        <button
          onClick={() => {
            auth.signOut();
          }}
        >
          signout
        </button>
      </div>
    </div>
  );
}

export default Profile;
