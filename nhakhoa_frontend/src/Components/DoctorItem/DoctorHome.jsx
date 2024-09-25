import { Link } from "react-router-dom";
import { faCalendarDays, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function DoctorHome({ data }) {

    return (
        <div className="single-pf col-sm-3" style={{padding:'20px'}}>
        <img src={data.image} alt="" style={{height:'280px',objectFit: 'cover',borderRadius:'8px'}}/>
        <a href="" className="btn">
            Xem Chi Tiết
        </a>
    </div>
    );
}

export default DoctorHome;
