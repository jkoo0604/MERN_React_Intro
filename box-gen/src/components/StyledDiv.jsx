import React, { useState } from 'react';
import StyledBox from './StyledBox';

const StyledDiv = props => {
    const divList = props.divList;
    const createDiv = ([bgColor, width, height], index, arr) => (
        <div className="outerBox" key={index}>
            <StyledBox bgColor={bgColor} width={width} height={height} className="newBox"/>
        </div>
    );
    return(
        <div className="boxes">
            {
                divList.map( createDiv )
            }
        </div>
    )
}

export default StyledDiv;