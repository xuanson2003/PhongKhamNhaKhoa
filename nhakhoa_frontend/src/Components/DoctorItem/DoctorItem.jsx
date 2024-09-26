import { Link } from "react-router-dom";
import { faCalendarDays, faCircleInfo, faEye, faLocationDot, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NewsItem({ data}) {
    return (
            <div className="col-xl-6 col-12 mb-4">
                            {/* Single Blog */}
                            <div className="single-news">
                                <div className="news-body news-content">
                                    <div className=" row">
                                        <div className=" col-md-4 ">
                                            <img
                                                style={{ width: '100%', height: '175px', objectFit: 'cover' ,borderRadius:'8px'}}
                                                src={data.image}
                                                alt="#"
                                            />
                                          
                                        </div>
                                        <div className=" col-md-8">
                                            <h2>
                                                <a href="blog-single.html" style={{ color: '#1C77D1' }}>
                                                {data.name}
                                                </a>
                                            </h2>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faLocationDot} /> {data.address}
                                            </p>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faCircleInfo} /> {data.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Blog */}
                        </div>
    );
}

export default NewsItem;
