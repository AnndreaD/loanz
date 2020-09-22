import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Slider, Typography, Input } from '@material-ui/core';
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
            <Typography id="discrete-slider-small-steps" gutterBottom>
                {title}
            </Typography>
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
