"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // do some server stuff before logout
  await signOut();
};
