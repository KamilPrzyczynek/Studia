import { Navigate } from 'react-router-dom';
import MultiStepForm from '../components/form/MultiStepForm';
import { getActiveUser } from '../utils/auth';
import './AuthPages.css';

export default function RegisterPage() {
    const activeUser = getActiveUser();

    if (activeUser) {
        return <Navigate to="/" replace />;
    }

    return (
        <section className="auth-page">
            <div className="auth-card auth-card-register">
                <div className="auth-card-header">
                    <h1>Rejestracja</h1>
                    <p>Załóż konto i rozpocznij pracę z aplikacją</p>
                </div>

                <MultiStepForm />
            </div>
        </section>
    );
}