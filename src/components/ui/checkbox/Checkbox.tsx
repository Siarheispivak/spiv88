import React from 'react';

type CheckboxProps = {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    style?: React.CSSProperties;
};

export const Checkbox = ({
                             checked,
                             onChange,
                             label = '',
                             style,
                         }: CheckboxProps) => {
    return (
        <label style={{ display: 'flex', alignItems: 'center', ...style }}> {/* Применяем стили */}
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            {label}
        </label>
    );
};