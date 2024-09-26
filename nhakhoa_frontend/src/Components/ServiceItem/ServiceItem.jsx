import React from 'react';
import { Link } from 'react-router-dom';
import config from '~/Config';

const ServiceItem = ({ data }) => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            {/* Sử dụng Link với id động */}
            <Link to={`${config.routes.service_detail.replace(':id', data.id)}`}>
                <div className="single-service">
                    <i className={data.icon}></i>
                    <h4>{data.name}</h4>
                    <p>{data.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceItem;
