import type { z } from 'zod';
import type {
    fullRegistrationSchema,
    step1Schema,
    step2Schema,
    step3Schema,
} from '../validation/schemas';

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
export type FullRegistrationFormData = z.infer<typeof fullRegistrationSchema>;

export type StepId = 1 | 2 | 3;

export interface RegistrationPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    categories: string[];
    notifications: {
        email: boolean;
        push: boolean;
    };
    newsletter: boolean;
    rodoAccepted: boolean;
}

export interface MultiStepFormState {
    step1?: Step1Data;
    step2?: Step2Data;
}