import React from 'react';
import './Container.scss';
import PropTypes from 'prop-types';

const Container = ({ children, title }) => {
    return (
        <div className="container">
            <h1 className="container-title">{title}</h1>
            {children}
        </div>
    );
};

export default Container;

Container.propTypes = {
    title: PropTypes.string,
};
