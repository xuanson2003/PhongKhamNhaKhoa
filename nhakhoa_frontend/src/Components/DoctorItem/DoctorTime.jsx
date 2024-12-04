import { Link } from "react-router-dom";
import { faCalendarDays, faCircleInfo, faEye, faLocationDot, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import config from "~/Config";

function DoctorTime({ data}) {
    const handleBooking = () => {
        window.location.href = `/dat-lich-kham?time=${encodeURIComponent(data.start_time)} - ${encodeURIComponent(data.end_time)}`;
    };
    
    return (
        
        <a
            style={{
                color: 'white',
                background: '#ffbe6b',
                borderRadius: '4px',
                lineHeight: 2.7,
                
            }}
            className=" w-100 mt-3 text-center"
            onClick={handleBooking}
        >
           {data.start_time} - {data.end_time}
        </a>
        
           
    );
}

export default DoctorTime;
