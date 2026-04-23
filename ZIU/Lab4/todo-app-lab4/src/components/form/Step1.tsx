import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Step1Data } from '../../types/form.types';
import { step1Schema } from '../../validation/schemas';
import { getPasswordStrength } from '../../utils/passwordStrength';
import { Link } from 'react-router-dom';

interface Step1Props {
    defaultValues?: Step1Data;
    onComplete: (data: Step1Data) => void;
    serverEmailError?: string | null;
}

const defaultStep1Values: Step1Data = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export function Step1({
                          defaultValues,
                          onComplete,
                          serverEmailError = null,
                      }: Step1Props) {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<Step1Data>({
        resolver: zodResolver(step1Schema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: defaultValues ?? defaultStep1Values,
    });

    const passwordValue = watch('password');
    const passwordStrength = getPasswordStrength(passwordValue);

    useEffect(() => {
        if (serverEmailError) {
            setError('email', {
                type: 'server',
                message: serverEmailError,
            });
        }
    }, [serverEmailError, setError]);

    return (
        <form className="auth-form" onSubmit={handleSubmit(onComplete)} noValidate>
            <div className="auth-field">
                <label htmlFor="register-first-name">Imię *</label>
                <input
                    id="register-first-name"
                    type="text"
                    placeholder="Jan"
                    aria-required="true"
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? 'register-first-name-error' : undefined}
                    {...register('firstName')}
                />
                {errors.firstName && (
                    <p id="register-first-name-error" className="auth-error" role="alert">
                        {errors.firstName.message}
                    </p>
                )}
            </div>

            <div className="auth-field">
                <label htmlFor="register-last-name">Nazwisko *</label>
                <input
                    id="register-last-name"
                    type="text"
                    placeholder="Kowalski"
                    aria-required="true"
                    aria-invalid={!!errors.lastName}
                    aria-describedby={errors.lastName ? 'register-last-name-error' : undefined}
                    {...register('lastName')}
                />
                {errors.lastName && (
                    <p id="register-last-name-error" className="auth-error" role="alert">
                        {errors.lastName.message}
                    </p>
                )}
            </div>

            <div className="auth-field">
                <label htmlFor="register-email">E-mail *</label>
                <input
                    id="register-email"
                    type="email"
                    placeholder="jan.kowalski@email.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'register-email-error' : undefined}
                    {...register('email')}
                />
                {errors.email && (
                    <p id="register-email-error" className="auth-error" role="alert">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className="auth-field">
                <label htmlFor="register-password">Hasło *</label>
                <input
                    id="register-password"
                    type="password"
                    placeholder="••••••••••••"
                    aria-required="true"
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? 'register-password-error' : 'register-password-hint'}
                    {...register('password')}
                />
                <p id="register-password-hint" style={{ marginTop: '8px', marginBottom: 0 }}>
                    Siła hasła: {passwordStrength}
                </p>
                {errors.password && (
                    <p id="register-password-error" className="auth-error" role="alert">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <div className="auth-field">
                <label htmlFor="register-repeat-password">Powtórz hasło *</label>
                <input
                    id="register-repeat-password"
                    type="password"
                    placeholder="••••••••••••"
                    aria-required="true"
                    aria-invalid={!!errors.confirmPassword}
                    aria-describedby={
                        errors.confirmPassword ? 'register-repeat-password-error' : undefined
                    }
                    {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                    <p id="register-repeat-password-error" className="auth-error" role="alert">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            <div className="auth-actions">
                <button
                    type="submit"
                    className="auth-primary-button"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                >
                    {isSubmitting ? 'Przetwarzanie...' : 'Dalej'}
                </button>

                <Link to="/login" className="auth-secondary-button">
                    Mam już konto
                </Link>
            </div>
        </form>
    );
}