import React from 'react'
import { useNavigate } from 'react-router-dom';

import "./SidebarItems.css"


const SidebarItems = ({ item, isOpen }) => {

  const navigate = useNavigate();

  const addMoment = () => {
    navigate("/add-moment");
  };

  const dashboard = () => {
    navigate("/dashboard");
  };

  const profile = () => {
    navigate("/profile");
  };



  return (

    <div>


      <div style={{}}>
        <h4 style={{ cursor: "pointer" }} onClick={profile} >Profile</h4>
      </div>
      <div style={{ fontSize: "18px", }}>
        <ul className="ul" >Moments</ul>
        <li className="lists" onClick={dashboard}
          style={{ cursor: "pointer" }}
        >Moment List</li>
        <li className="lists" onClick={addMoment}
          style={{ cursor: "pointer" }}
        >Add new Moment</li>
      </div>

    </div>

  )
}

export default SidebarItems