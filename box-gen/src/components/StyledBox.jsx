import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    background-color: ${props => props.bgColor || 'black'};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`;

export default StyledBox;