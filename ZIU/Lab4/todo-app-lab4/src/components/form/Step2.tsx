import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Step2Data } from '../../types/form.types';
import { step2Schema } from '../../validation/schemas';

interface Step2Props {
    defaultValues?: Step2Data;
    onBack: () => void;
    onComplete: (data: Step2Data) => void;
}

const defaultStep2Values: Step2Data = {
    categories: [{ value: '' }],
    notifications: {
        email: false,
        push: false,
    },
    newsletter: false,
};

export function Step2({ defaultValues, onBack, onComplete }: Step2Props) {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Step2Data>({
        resolver: zodResolver(step2Schema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: defaultValues ?? defaultStep2Values,
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'categories',
    });

    return (
        <form className="auth-form" onSubmit={handleSubmit(onComplete)} noValidate>
            {fields.map((field, index) => {
                const fieldError = errors.categories?.[index]?.value?.message;

                return (
                    <div className="auth-field" key={field.id}>
                        <label htmlFor={`category-${index}`}>Kategoria {index + 1} *</label>
                        <input
                            id={`category-${index}`}
                            type="text"
                            placeholder="Np. Frontend"
                            aria-required="true"
                            aria-invalid={!!fieldError}
                            aria-describedby={fieldError ? `category-${index}-error` : undefined}
                            {...register(`categories.${index}.value`)}
                        />
                        {fieldError && (
                            <p id={`category-${index}-error`} className="auth-error" role="alert">
                                {fieldError}
                            </p>
                        )}

                        <div style={{ marginTop: '10px' }}>
                            <button
                                type="button"
                                className="auth-secondary-button"
                                onClick={() => remove(index)}
                                disabled={fields.length === 1}
                                aria-label={`Usuń kategorię ${index + 1}`}
                            >
                                Usuń kategorię
                            </button>
                        </div>
                    </div>
                );
            })}

            {typeof errors.categories?.message === 'string' && (
                <p className="auth-error" role="alert">
                    {errors.categories.message}
                </p>
            )}

            <div className="auth-actions" style={{ justifyContent: 'flex-start' }}>
                <button
                    type="button"
                    className="auth-secondary-button"
                    onClick={() => append({ value: '' })}
                >
                    Dodaj kategorię
                </button>
            </div>

            <div className="auth-field">
                <label style={{ marginBottom: '12px', display: 'block' }}>Powiadomienia</label>

                <div style={{ display: 'grid', gap: '12px' }}>
                    <Controller
                        name="notifications.email"
                        control={control}
                        render={({ field }) => (
                            <label htmlFor="notifications-email" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <input
                                    id="notifications-email"
                                    type="checkbox"
                                    aria-label="Powiadomienia e-mail"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                />
                                Powiadomienia e-mail
                            </label>
                        )}
                    />

                    <Controller
                        name="notifications.push"
                        control={control}
                        render={({ field }) => (
                            <label htmlFor="notifications-push" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <input
                                    id="notifications-push"
                                    type="checkbox"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                />
                                Powiadomienia push
                            </label>
                        )}
                    />

                    <Controller
                        name="newsletter"
                        control={control}
                        render={({ field }) => (
                            <label htmlFor="newsletter" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <input
                                    id="newsletter"
                                    type="checkbox"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                />
                                Chcę otrzymywać newsletter
                            </label>
                        )}
                    />
                </div>
            </div>

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
                    {isSubmitting ? 'Przetwarzanie...' : 'Dalej'}
                </button>
            </div>
        </form>
    );
}