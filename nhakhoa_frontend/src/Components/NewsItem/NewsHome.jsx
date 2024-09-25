import { Link } from "react-router-dom";
import { faCalendarDays, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NewsHome({ data }) {

    return (
    <div className="col-lg-4 col-md-6 col-12">
        <div className="single-news">
            <div className="news-head">
                <img src={data.image} style={{height:'216px',width:'320',objectFit: 'cover',}} alt="#" />
            </div>
            <div className="news-body">
                <div className="news-content" style={{height:'280px'}}>
                    <div className="date">{data.create_date}{" "}</div>
                    <h2 style={{textAlign:'justify'}}>
                              <Link
                                    to={`/chi-tiet-tin-tuc/${data.id}`} >
                                
                                    {data.name}
                                </Link>
                    </h2>
                    <p className="text" style={{textAlign:'justify'}}>
                    {data.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default NewsHome;
