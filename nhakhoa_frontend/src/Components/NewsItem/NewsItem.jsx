import { faCalendarDays, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NewsItem({ data, isSm }) {
    return (<div>
        <div className="single-news">
            <div className="inner ">
                <div className=" row">
                    <div className=" col-md-4">
                       {
                        isSm ? ( <img
                            style={{
                                width: '110px',
                                height: '80px',
                                objectFit: 'cover',
                                borderRadius: '7px'
                            }}
                            src={data.image}
                            alt="#"
                        />) : (
                            <img
                            style={{
                                width: '100%',
                                height: '140px',
                                objectFit: 'cover',
                                borderRadius: '7px'
                            }}
                            src={data.image}
                            alt="#"
                        />
                        )
                       }
                    </div>
                    <div className=" col-md-8 ">
                        {
                            isSm ? (<a
                                href="blog-single.html"
                                style={{ color: 'black', fontSize: '14px' }}
                            >
                                {data.title}
                            </a>) : (<a
                                href="blog-single.html"
                                style={{ color: '#1C77D1', fontSize: '18px' }}
                            >
                                {data.title}
                            </a>)
                        }
                        {
                            isSm ? (
                                <></>
                            ) : (
                                <p className="text mt-1">
                                {data.description}
                                </p>
                            )
                        }
                      
                        <p className="mt-1" style={{ fontSize: '11px' }}>
                            <FontAwesomeIcon icon={faCalendarDays} /> {data.create_date} <span style={{ marginLeft: '4%' }}><FontAwesomeIcon icon={faEye} /> {data.views}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default NewsItem