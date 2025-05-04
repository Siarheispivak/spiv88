import React from 'react';

type InputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    style?: React.CSSProperties; // Добавляем
};

export const Input = ({
                          value,
                          onChange,
                          placeholder = '',
                          type = 'text',
                          style,
                      }: InputProps) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={style} // Пробрасываем стили
        />
    );
};