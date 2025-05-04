import { useNavigate } from 'react-router-dom';
import {Button} from "../components/ui/button/Button";


export const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                color: '#2c3e50',
                textAlign: 'center'
            }}>
                Форма Билдер
            </h1>

            <Button
                onClick={() => navigate('/form')}
                style={{
                    padding: '12px 24px',
                    fontSize: '1.2rem',
                    background: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                }}
            >
                Создать Форму
            </Button>
        </div>
    );
};