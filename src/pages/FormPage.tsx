import {useState} from "react";
import {Input} from "../components/ui/input/Input";
import {Button} from "../components/ui/button/Button";
import {Textarea} from "../components/ui/textarea/Textarea";
import {Checkbox} from "../components/ui/checkbox/Checkbox";


export const FormPage = () => {

    const [config, setConfig] = useState({
        input: 0,
        textarea: 0,
        checkbox: 0,
    });

    const [inputValues, setInputValues] = useState<string[]>([]);
    const [textareaValues, setTextareaValues] = useState<string[]>([]);
    const [checkboxValues, setCheckboxValues] = useState<boolean[]>([]);

    const updateConfig = (field: keyof typeof config, value: string) => {
        setConfig({
            ...config,
            [field]: Math.max(0, parseInt(value) || 0),
        });
    };

    const handleBuild = () => {
        setInputValues(Array(config.input).fill(''));
        setTextareaValues(Array(config.textarea).fill(''));
        setCheckboxValues(Array(config.checkbox).fill(false));
    };

    const handleInputChange = (index: number, value: string) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const handleTextareaChange = (index: number, value: string) => {
        const newValues = [...textareaValues];
        newValues[index] = value;
        setTextareaValues(newValues);
    };

    const handleCheckboxChange = (index: number, checked: boolean) => {
        const newValues = [...checkboxValues];
        newValues[index] = checked;
        setCheckboxValues(newValues);
    };

    return (
        <div style={{
            maxWidth: '600px',
            margin: '2rem auto',
            padding: '1.5rem',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
        }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Form Builder</h1>

            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ width: '120px' }}>Text Inputs:</span>
                    <Input
                        value={config.input.toString()}
                        onChange={(e) => updateConfig('input', e.target.value)}
                        type="number"
                        style={{ flex: 1, padding: '0.5rem' }}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ width: '120px' }}>Textareas:</span>
                    <Input
                        value={config.textarea.toString()}
                        onChange={(e) => updateConfig('textarea', e.target.value)}
                        type="number"
                        style={{ flex: 1, padding: '0.5rem' }}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ width: '120px' }}>Checkboxes:</span>
                    <Input
                        value={config.checkbox.toString()}
                        onChange={(e) => updateConfig('checkbox', e.target.value)}
                        type="number"
                        style={{ flex: 1, padding: '0.5rem' }}
                    />
                </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Button
                    onClick={handleBuild}
                    style={{
                        padding: '0.5rem 1.5rem',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                    }}
                >
                    Build Form
                </Button>
            </div>

            <div>
                {inputValues.map((value, i) => (
                    <div key={`input-${i}`} style={{ marginBottom: '1rem' }}>
                        <Input
                            value={value}
                            onChange={(e) => handleInputChange(i, e.target.value)}
                            placeholder={`Text Input ${i + 1}`}
                            style={{ width: '100%', padding: '0.5rem' }}
                        />
                    </div>
                ))}

                {textareaValues.map((value, i) => (
                    <div key={`textarea-${i}`} style={{ marginBottom: '1rem' }}>
                        <Textarea
                            value={value}
                            onChange={(e) => handleTextareaChange(i, e.target.value)}
                            placeholder={`Textarea ${i + 1}`}
                            style={{ width: '100%', padding: '0.5rem', minHeight: '100px' }}
                        />
                    </div>
                ))}

                {checkboxValues.map((checked, i) => (
                    <div key={`checkbox-${i}`} style={{ marginBottom: '1rem' }}>
                        <Checkbox
                            checked={checked}
                            onChange={(e) => handleCheckboxChange(i, e.target.checked)}
                            label={`Checkbox ${i + 1}`}
                            style={{ padding: '0.5rem 0' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};