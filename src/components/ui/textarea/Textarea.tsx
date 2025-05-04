import React from 'react';

type TextareaProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    style?: React.CSSProperties;
};

export const Textarea = ({
                             value,
                             onChange,
                             placeholder = '',
                             style,
                         }: TextareaProps) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={style}
        />
    );
};