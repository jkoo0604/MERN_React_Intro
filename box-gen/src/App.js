import React, { useState } from 'react';
import './App.css';
import StyledForm from './components/StyledForm';
import StyledDiv from './components/StyledDiv';

function App() {
  const [boxList, setBoxList] = useState([]);

  const updateDivList = (bgColor="salmon", width=150, height=150) => {
    setBoxList([...boxList,[bgColor, width+"px", height+"px"]]);
    console.log(boxList);
  }

  return (
    <div className="App">
      <StyledForm newDiv={ updateDivList } />
      <StyledDiv divList={ boxList } />    
    </div>
  );
}

export default App;
