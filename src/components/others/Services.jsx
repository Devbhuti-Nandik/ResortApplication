import React from 'react';
import Heading from './Heading';
import '../others/app.css';
import contents from './serviceItems';

function createService(item)
{
    return(
        <div className="services" key={item.id}>
            <span className="item-span">{item.icon}</span>
            <p className="item-head">{item.head}</p>
            <p className="item-content">{item.content}</p>
        </div>
    );
}
function Services()
{ 
    return(
        <div className="services">
            <Heading name="Services"/>
            <div className="items">
                {contents.map(createService)}
            </div>
        </div>
    );
}
export default Services;
