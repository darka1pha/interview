'use server';

import { userSchema } from '../schema';
import { ActionResult } from '../types';

export async function registerUser(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const parsed = userSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    phone: formData.get('phone'),
  });

  if (!parsed.success) {
    return {
      error: parsed.error.flatten().fieldErrors,
    };
  }

  const user = parsed.data;

  const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
  const data = await res.json();

  return {
    success: true,
    user: {
      ...user,
      id: crypto.randomUUID(),
      avatar: data.results[0].picture.large,
    },
  };
}
