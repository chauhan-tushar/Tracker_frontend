import React from 'react';
import Loader from './Icons/Loader';

const Button = (props) => {
    let buttonStyle;
    const baseClass = `inline-flex items-center rounded-lg p-3 text-sm gap-3
     focus:ring-2 justify-center focus:shadow-md focus-within:outline-none`;

    switch (props.variant) {
        case 'primary':
            buttonStyle =
                `text-white bg-violet-700 hover:bg-violet-800
                 focus:ring-violet-950 focus:ring-opacity-20`;
            break;
        case 'secondary':
            buttonStyle =
                `text-violet-800 bg-white border-solid 
                border border-violet-800`;
            break;
        case 'disable':
            buttonStyle =
                'text-gray-500 bg-gray-100';
            break;
        case 'link':
            buttonStyle =
                'text-violet-700 bg-white';
            break;
    }

    return (
        <div>
            <button 
                className={`${buttonStyle} ${baseClass} ${props.className}`}
                onClick={props.onClick}
                type={props.type}
            >
                {props.loader ? <Loader className="animate-spin"/> : ''}
                <span>{props.icon}</span>
                <p>{props.text}</p>
            </button>
        </div>
    );
};

export default Button;
