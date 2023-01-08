import React from 'react';
import cl from './TextLink.module.css'

const TextLink = ({children, ...props}) => {
    return (
        <text {...props} className={cl.textLink}>
            {children}
        </text>
    );

};

export default TextLink;