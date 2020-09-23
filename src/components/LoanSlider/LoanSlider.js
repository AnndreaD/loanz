import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Slider, Typography } from '@material-ui/core';
import './LoanSlider.scss';

const LoanSlider = ({ title, value, onChange, min, max, step, marks }) => {
    const handleSliderChange = (event, newValue) => {
        onChange(newValue);
    };

    const handleInputChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className="slider-container">
            <Typography id="discrete-slider-small-steps">{title}</Typography>
            <TextField value={value} onChange={handleInputChange} variant="outlined" id="outlined-basic" />
            <div className="loan-slider">
                <Slider
                    defaultValue={value}
                    value={typeof value === 'number' ? value : 0}
                    aria-labelledby="discrete-slider-small-steps"
                    step={step}
                    onChange={handleSliderChange}
                    min={min}
                    max={max}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </div>
        </div>
    );
};

export default LoanSlider;

LoanSlider.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    marks: PropTypes.array,
};
