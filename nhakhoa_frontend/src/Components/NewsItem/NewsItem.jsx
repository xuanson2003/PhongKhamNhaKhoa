import { Link } from "react-router-dom";
import { faCalendarDays, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import config from "~/Config";

function NewsItem({ data, isSm }) {
    return (
        <div>
            <div className="single-news">
                <div className="inner">
                    <div className="row">
                        <div className="col-md-4">
                            {isSm ? (
                                <img
                                    style={{
                                        width: '110px',
                                        height: '80px',
                                        objectFit: 'cover',
                                        borderRadius: '7px',
                                    }}
                                    src={data.image}
                                    alt={data.name}
                                />
                            ) : (
                                <img
                                    style={{
                                        width: '100%',
                                        height: '150px',
                                        objectFit: 'cover',
                                        borderRadius: '7px',
                                    }}
                                    src={data.image}
                                    alt={data.name}
                                />
                            )}
                        </div>
                        <div className="col-md-8">
                            {isSm ? (
                                <Link
                                    to={`${config.routes.news_detail.replace(':id', data.id)}`} // Dynamic route for details
                                    style={{ color: 'black', fontSize: '14px' }}
                                >
                                    {data.name}
                                </Link>
                            ) : (
                                <Link
                                    to={`${config.routes.news_detail.replace(':id', data.id)}`} // Dynamic route for details
                                    style={{ color: '#1C77D1', fontSize: '17px' }}
                                >
                                    {data.name}
                                </Link>
                            )}

                            {!isSm && (
                                <p className="text mt-1">{data.description}</p>
                            )}

                            <p className="mt-1" style={{ fontSize: '11px' }}>
                                <FontAwesomeIcon icon={faCalendarDays} /> {data.create_date}{" "}
                                <span style={{ marginLeft: '4%' }}>
                                    <FontAwesomeIcon icon={faEye} /> {data.views}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
