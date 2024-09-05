import React from 'react';

function BreadScrum(props) {
    return (
        <ul className="bread-list">
            {props.data.map((item, index) => {
                const isLastItem = index === props.data.length - 1;
                return (
                    <React.Fragment key={index}>
                        <li>
                            <a href="index.html">{item}</a>
                        </li>
                        {!isLastItem && (
                            <li>
                                <i className="icofont-simple-right"></i>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
}

export default BreadScrum;
