import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import type {
    MultiStepFormState,
    RegistrationPayload,
    Step1Data,
    Step2Data,
    Step3Data,
    StepId,
} from '../../types/form.types';

const USERS_STORAGE_KEY = 'todo-app-users';
const ACTIVE_USER_KEY = 'todo-app-active-user';

interface StoredUser {
    firstName: string;
    email: string;
    password: string;
}

const stepLabels: Record<StepId, string> = {
    1: 'Krok 1 - Dane osobowe',
    2: 'Krok 2 - Preferencje',
    3: 'Krok 3 - Podsumowanie i potwierdzenie',
};

export default function MultiStepForm() {
    const navigate = useNavigate();
    const headingRef = useRef<HTMLHeadingElement>(null);

    const [currentStep, setCurrentStep] = useState<StepId>(1);
    const [formData, setFormData] = useState<MultiStepFormState>({});
    const [emailServerError, setEmailServerError] = useState<string | null>(null);
    const [rootServerError, setRootServerError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            headingRef.current?.focus();
        });

        return () => cancelAnimationFrame(frame);
    }, [currentStep]);

    const currentStepTitle = useMemo(() => stepLabels[currentStep], [currentStep]);

    const handleStep1Complete = (data: Step1Data) => {
        setEmailServerError(null);
        setRootServerError(null);
        setFormData((prev) => ({ ...prev, step1: data }));
        setCurrentStep(2);
    };

    const handleStep2Complete = (data: Step2Data) => {
        setRootServerError(null);
        setFormData((prev) => ({ ...prev, step2: data }));
        setCurrentStep(3);
    };

    const handleFinalSubmit = async (data: Step3Data) => {
        if (!formData.step1 || !formData.step2) return;

        setIsSubmitting(true);
        setEmailServerError(null);
        setRootServerError(null);

        const payload: RegistrationPayload = {
            firstName: formData.step1.firstName.trim(),
            lastName: formData.step1.lastName.trim(),
            email: formData.step1.email.trim(),
            password: formData.step1.password,
            categories: formData.step2.categories
                .map((category) => category.value.trim())
                .filter(Boolean),
            notifications: formData.step2.notifications,
            newsletter: formData.step2.newsletter,
            rodoAccepted: data.rodoAccepted,
        };

        try {
            await registerUser(payload);
            navigate('/', { replace: true });
        } catch (error) {
            const err = error as { status?: number };

            if (err.status === 409) {
                setEmailServerError('Konto z tym adresem e-mail już istnieje.');
                setCurrentStep(1);
            } else {
                setRootServerError('Błąd serwera, spróbuj ponownie.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="multi-step-form">
            <nav aria-label="Postęp formularza" className="register-steps">
                <ol className="register-steps-list">
                    {[1, 2, 3].map((step) => {
                        const isActive = currentStep === step;

                        return (
                            <li
                                key={step}
                                className={`register-step-item ${isActive ? 'is-active' : ''}`}
                                aria-current={isActive ? 'step' : undefined}
                            >
                                <span className="register-step-index">{step}</span>
                                <span className="register-step-text">Krok {step}</span>
                            </li>
                        );
                    })}
                </ol>
            </nav>

            <h2 ref={headingRef} tabIndex={-1} className="register-step-heading">
                {currentStepTitle}
            </h2>

            {currentStep === 1 && (
                <Step1
                    defaultValues={formData.step1}
                    onComplete={handleStep1Complete}
                    serverEmailError={emailServerError}
                />
            )}

            {currentStep === 2 && (
                <Step2
                    defaultValues={formData.step2}
                    onBack={() => setCurrentStep(1)}
                    onComplete={handleStep2Complete}
                />
            )}

            {currentStep === 3 && formData.step1 && formData.step2 && (
                <Step3
                    step1Data={formData.step1}
                    step2Data={formData.step2}
                    onBack={() => setCurrentStep(2)}
                    onSubmit={handleFinalSubmit}
                    serverError={rootServerError}
                    isSubmitting={isSubmitting}
                />
            )}
        </div>
    );
}

async function registerUser(payload: RegistrationPayload): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const rawUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const users: StoredUser[] = rawUsers ? JSON.parse(rawUsers) : [];

    const alreadyExists = users.some(
        (user) => user.email.trim().toLowerCase() === payload.email.trim().toLowerCase()
    );

    if (alreadyExists) {
        throw { status: 409 };
    }

    if (payload.email.trim().toLowerCase() === 'error@example.com') {
        throw { status: 500 };
    }

    const newUser: StoredUser = {
        firstName: payload.firstName,
        email: payload.email,
        password: payload.password,
    };

    localStorage.setItem(
        USERS_STORAGE_KEY,
        JSON.stringify([...users, newUser])
    );

    localStorage.setItem(
        ACTIVE_USER_KEY,
        JSON.stringify({
            firstName: newUser.firstName,
            email: newUser.email,
        })
    );
}