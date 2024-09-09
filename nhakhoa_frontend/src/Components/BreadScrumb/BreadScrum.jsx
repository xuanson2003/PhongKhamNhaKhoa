import React from 'react';
import { Link } from 'react-router-dom';

function BreadScrum({ links, title }) {
    return (
        <>
            <div className="breadcrumbs overlay" style={{ paddingTop: 52, paddingBottom: 52 }}>
                <div className="container">
                    <div className="bread-inner">
                        <div className="row">
                            <div className="col-12">
                                <h2 style={{ fontSize: 32 }}>{title}</h2>
                                <ul className="bread-list">
                                    {links.map((item, index) => {
                                        const isLastItem = index === links.length - 1;
                                        return (
                                            <React.Fragment key={index}>
                                                {isLastItem ? (
                                                    <li>
                                                        <Link className="font-weight-bold" to={item.href}>
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ) : (
                                                    <>
                                                        <li>
                                                            <Link to={item.href}>{item.title}</Link>
                                                        </li>
                                                        <li>
                                                            <i className="icofont-simple-right"></i>
                                                        </li>
                                                    </>
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BreadScrum;
