import { z } from 'zod';

const phoneRegex = /^09\d{9}$/;

export const userSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  phone: z.string().regex(phoneRegex, 'Invalid phone number'),
});

export type UserFormData = z.infer<typeof userSchema>;
