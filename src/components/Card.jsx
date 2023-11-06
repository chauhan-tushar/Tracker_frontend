import React from 'react';

const Card = (props) => {
    return (<>
        <div className={`bg-white rounded-lg p-12 ${props.className}`}>
            {props.children}
        </div>
    </>);
};

export default Card;
