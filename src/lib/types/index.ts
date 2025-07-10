export type UserPayload = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  phone: string;
};

export type ActionResult =
  | { error: Record<string, string[]> }
  | { success: true; user: UserPayload };
