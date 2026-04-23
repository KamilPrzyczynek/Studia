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

                        <div className="category-item-actions">
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

            <div className="auth-actions auth-actions-left">
                <button
                    type="button"
                    className="auth-secondary-button"
                    onClick={() => append({ value: '' })}
                >
                    Dodaj kategorię
                </button>
            </div>

            <div className="auth-field">
                <label className="auth-section-label">Powiadomienia</label>

                <div className="auth-checkbox-group">
                    <Controller
                        name="notifications.email"
                        control={control}
                        render={({ field }) => (
                            <label htmlFor="notifications-email" className="auth-checkbox-row">
                                <input
                                    id="notifications-email"
                                    type="checkbox"
                                    className="auth-checkbox"
                                    aria-label="Powiadomienia e-mail"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                />
                                <span>Powiadomienia e-mail</span>
                            </label>
                        )}
                    />

                    <Controller
                        name="notifications.push"
                        control={control}
                        render={({ field }) => (
                            <label htmlFor="notifications-push" className="auth-checkbox-row">
                                <input
                                    id="notifications-push"
                                    type="checkbox"
                                    className="auth-checkbox"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                />
                                <span>Powiadomienia push</span>
                            </label>
                        )}
                    />

                    <Controller
                        name="newsletter"
                        control={control}
                        render={({ field }) => (
                            <label htmlFor="newsletter" className="auth-checkbox-row">
                                <input
                                    id="newsletter"
                                    type="checkbox"
                                    className="auth-checkbox"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                />
                                <span>Chcę otrzymywać newsletter</span>
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