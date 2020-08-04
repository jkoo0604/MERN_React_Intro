import React from 'react';

const TabContent = props => {

    // render content of clicked tab, if none clicked, show default content
    return (
        <div className="contentDiv">
            <p>
                {
                    props.clickedTab === -1 ? 'Select a tab' : props.tabList[props.clickedTab][1]
                }
            </p>
            <p>  
                {
                    props.clickedTab !== -1 ? 'Click Count:' + props.clickCount[props.clickedTab] : '' 
                }
            </p>
        </div>
    )

}

export default TabContent;