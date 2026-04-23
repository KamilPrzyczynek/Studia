import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Step1Data, Step2Data, Step3Data } from '../../types/form.types';
import { step3Schema } from '../../validation/schemas';

interface Step3Props {
    step1Data: Step1Data;
    step2Data: Step2Data;
    onBack: () => void;
    onSubmit: (data: Step3Data) => Promise<void>;
    serverError?: string | null;
    isSubmitting?: boolean;
}

const defaultStep3Values: Step3Data = {
    rodoAccepted: false,
};

export function Step3({
                          step1Data,
                          step2Data,
                          onBack,
                          onSubmit,
                          serverError = null,
                          isSubmitting = false,
                      }: Step3Props) {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<Step3Data>({
        resolver: zodResolver(step3Schema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: defaultStep3Values,
    });

    useEffect(() => {
        if (serverError) {
            setError('root.serverError', {
                type: 'server',
                message: serverError,
            });
        }
    }, [serverError, setError]);

    const categories = step2Data.categories
        .map((item) => item.value.trim())
        .filter(Boolean);

    return (
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="auth-field">
                <label>Dane osobowe</label>
                <div style={{ display: 'grid', gap: '8px' }}>
                    <p><strong>Imię:</strong> {step1Data.firstName}</p>
                    <p><strong>Nazwisko:</strong> {step1Data.lastName}</p>
                    <p><strong>E-mail:</strong> {step1Data.email}</p>
                </div>
            </div>

            <div className="auth-field">
                <label>Preferencje</label>
                <div style={{ display: 'grid', gap: '8px' }}>
                    <p><strong>Kategorie:</strong> {categories.length ? categories.join(', ') : 'Brak'}</p>
                    <p>
                        <strong>Powiadomienia e-mail:</strong>{' '}
                        {step2Data.notifications.email ? 'Tak' : 'Nie'}
                    </p>
                    <p>
                        <strong>Powiadomienia push:</strong>{' '}
                        {step2Data.notifications.push ? 'Tak' : 'Nie'}
                    </p>
                    <p>
                        <strong>Newsletter:</strong> {step2Data.newsletter ? 'Tak' : 'Nie'}
                    </p>
                </div>
            </div>

            <div className="auth-field">
                <label
                    htmlFor="rodoAccepted"
                    className="auth-checkbox-row"
                >
                    <input
                        id="rodoAccepted"
                        type="checkbox"
                        className="auth-checkbox"
                        aria-required="true"
                        aria-invalid={!!errors.rodoAccepted}
                        aria-describedby={errors.rodoAccepted ? 'rodoAccepted-error' : undefined}
                        {...register('rodoAccepted')}
                    />
                    <span>Akceptuję zgodę RODO *</span>
                </label>

                {errors.rodoAccepted && (
                    <p id="rodoAccepted-error" className="auth-error" role="alert">
                        {errors.rodoAccepted.message}
                    </p>
                )}
            </div>

            {errors.root?.serverError?.message && (
                <p
                    className="auth-error"
                    role="alert"
                    aria-live="assertive"
                >
                    {errors.root.serverError.message}
                </p>
            )}

            <div className="auth-actions">
                <button
                    type="button"
                    className="auth-secondary-button"
                    onClick={onBack}
                >
                    Wstecz
                </button>

                <button
                    type="submit"
                    className="auth-primary-button"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                >
                    {isSubmitting ? 'Wysyłanie...' : 'Załóż konto'}
                </button>
            </div>
        </form>
    );
}