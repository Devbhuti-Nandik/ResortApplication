import React from 'react';
import '../others/app.css';
function Heading(props)
{
    return(
        <div className="heading">
            <h4>{props.name}</h4>
            <div />
        </div>
    );
}
export default Heading;