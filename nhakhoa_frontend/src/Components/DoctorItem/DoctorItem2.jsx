import { Link } from "react-router-dom";
import { faCalendarDays, faCircleInfo, faEye, faLocationDot, faPhone, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import config from "~/Config";

function DoctorItem2({data}) {
    return (
            <div className="col-xl-3 col-12 mb-4">
                  <div className="card">
                  <img
                        style={{
                            width: '100px',  // Ensure width and height are equal for circular shape
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: 50,  // Make the image circular
                            display: 'block',  // Ensures the image behaves as a block element
                            margin: '0 auto'  // Centers the image horizontally
                        }}
                        src={data.image}
                        alt="#"
                    />


                        <h2 style={{height:'40px'}} className="mt-3">
                        <Link
                                to={`${config.routes.doctor_detail.replace(':id', data.id)}`} 
                                style={{ color: 'black', fontSize: '18px' }}
                            >
                                {data.name}
                            </Link>
                            </h2>
                            <div className="location" style={{textAlign:'start',fontSize:'12px'}}>
                                <p style={{fontSize:'12px'}}>
                                <i className="fas fa-map-marker-alt">
                                </i>
                                <FontAwesomeIcon icon={faLocationDot} /> {data.address}
                                </p>
                                <p style={{fontSize:'12px'}}>
                                <i className="fas fa-map-marker-alt">
                                </i>
                                <FontAwesomeIcon icon={faPhone} /> {data.phone}
                                </p>
                            </div>
                           
                            </div>
                        </div>
    );
}

export default DoctorItem2;
