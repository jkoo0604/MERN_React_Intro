import React, { useState } from  'react';
        
const StyledForm = (props) => {
    const [bgColor, setBgColor] = useState("");
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);  
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newDiv(bgColor, width, height);
        setBgColor("");
        setWidth(0);
        setHeight(0);
    };
    
    return(
        <form onSubmit={ handleSubmit }>
            <div className="inputDiv">
                <label>Color: </label>
                <input type="text" onChange={ (e) => setBgColor(e.target.value) } value={ bgColor } />
            </div>
            <div className="inputDiv">
                <label>Width: </label>
                <input type="number" min="1" max="150" onChange={ (e) => setWidth(e.target.value) } value={ width }/>
            </div>
            <div className="inputDiv">
                <label>Height: </label>
                <input type="number" min="1" max="150" onChange={ (e) => setHeight(e.target.value) } value={ height }/>
            </div>
            <input type="submit" value="Add" id="btn"/>
        </form>
    );
};
    
export default StyledForm;