import { z } from 'zod';

export const step1Schema = z
    .object({
        firstName: z.string().trim().min(2, 'Imię musi mieć co najmniej 2 znaki'),
        lastName: z.string().trim().min(2, 'Nazwisko musi mieć co najmniej 2 znaki'),
        email: z.string().trim().email('Podaj poprawny adres e-mail'),
        password: z
            .string()
            .min(8, 'Hasło musi mieć co najmniej 8 znaków')
            .regex(/[A-Z]/, 'Hasło musi zawierać wielką literę')
            .regex(/[0-9]/, 'Hasło musi zawierać cyfrę'),
        confirmPassword: z.string().min(1, 'Potwierdź hasło'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Hasła muszą być identyczne',
        path: ['confirmPassword'],
    });

export const categoryItemSchema = z.object({
    value: z.string().trim().min(1, 'Nazwa kategorii nie może być pusta'),
});

export const step2Schema = z.object({
    categories: z
        .array(categoryItemSchema)
        .min(1, 'Dodaj co najmniej jedną kategorię')
        .refine(
            (categories) => categories.some((category) => category.value.trim().length > 0),
            {
                message: 'Wybierz co najmniej jedną kategorię',
            }
        ),
    notifications: z.object({
        email: z.boolean(),
        push: z.boolean(),
    }),
    newsletter: z.boolean(),
});

export const step3Schema = z.object({
    rodoAccepted: z.boolean().refine((value) => value === true, {
        message: 'Musisz zaakceptować zgodę RODO',
    }),
});

export const fullRegistrationSchema = z.object({
    step1: step1Schema,
    step2: step2Schema,
    step3: step3Schema,
});