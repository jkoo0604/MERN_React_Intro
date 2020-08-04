import React from 'react';

const TabHeader = props => {

    const onClickHandler = (e, value) => {
        console.log(value);
        props.updateTab(value);
        props.updateCount(value);
    }

    const createTabs = (item, index) => (
        <button onClick={ (e) => onClickHandler(e, index) } idName={index} className={ index === props.clickedTab ? 'activeTab btn' : 'btn'}>{ item[0] }</button>
    )
 
    return props.tabList.map( createTabs );
}

export default TabHeader;