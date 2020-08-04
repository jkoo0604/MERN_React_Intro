import React, { useState } from 'react';

const Tab = props => {
    const [clicked, setClicked] = useState([-1,'']);

    const onClickHandler = (e, index) => {
        setClicked([index,e.target.name]);
        props.tabList[index]['Count'] += 1;
        props.setTabList([...props.tabList]);
    }

    const createTabs = (item, index) => (
        <button onClick={ (e) => onClickHandler(e, index) } key={index} name={item.Header} className={ item.Header === clicked[1] ? 'activeTab btn' : 'btn'}>{ item.Header }</button>
    )

    return (
        <div className="container">
            {props.tabList.map( createTabs )}
            <div className="contentDiv">
                <p>
                    {
                        clicked[0] === -1 ? 'Select a tab' : props.tabList[clicked[0]]['Content']
                    }
                </p>
                <p>  
                    {
                        clicked[0] !== -1 ? 'Click Count:' + props.tabList[clicked[0]]['Count'] : '' 
                    }
                </p>
            </div>
        </div>
        
    );
}

export default Tab;