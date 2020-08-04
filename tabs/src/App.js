import React, { useState } from 'react';
import './App.css';
import TabHeader from './components/TabHeader';
import TabContent from './components/TabContent';
import Tab from './components/Tab';

function App() {
  // const [tabList, setTabList] = useState([[1,'Tab 1 content is showing here'], [2,'Tab 2 content is showing here'], [3, 'Tab 3 content is showing here']]);
  // const [clickedTab, setClickedTab] = useState(-1);
  // const [clickCountList, setClickCountList] = useState([0,0,0]);

  // const updateClickedTab = (index) => {
  //   setClickedTab(index);
  // }

  // const updateClickCount = (index) => {
  //   const tempList = clickCountList
  //   tempList[index] += 1; 
  //   setClickCountList(tempList);
  // }

  const [tabList, setTabList] = useState([
    {'Header': 'Tab 1',
     'Content': 'Tab 1 content is showing here',
     'Count': 0
    },
    {'Header': 'Tab 2',
     'Content': 'Tab 2 content is showing here',
     'Count': 0
    },
    {'Header': 'Tab 3',
     'Content': 'Tab 3 content is showing here',
     'Count': 0
    }
  ]);

  // return (
  //   <div className="App">
  //     <TabHeader tabList={ tabList } clickedTab={ clickedTab } updateTab = { updateClickedTab } updateCount={ updateClickCount }/>
  //     <TabContent tabList={ tabList } clickedTab={ clickedTab } clickCount={ clickCountList }/>
  //   </div>
  // );
  return (
    <div className="App">
      <Tab tabList={tabList} setTabList={setTabList}/>
    </div>
  )
}

export default App;
