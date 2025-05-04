import React from 'react';

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
};

export const Button = ({
                           onClick,
                           children,
                           style,
                       }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );
};