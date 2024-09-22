import React from 'react';
import { Link } from 'react-router-dom';
import config from '~/Config';

const ServiceItem = ({data}) => {
    return (
        <div class="col-lg-4 col-md-6 col-12">
            <Link  to={config.routes.service_detail} onClick={() => {}}>
                <div class="single-service ">
                    <i class={data.icon}></i>
                    <h4>
                        <a href="service-details.html">{data.name}</a>
                    </h4>
                    <p>{data.describe}</p>
                </div>
            </Link >
        </div>
    );
};

export default ServiceItem;
