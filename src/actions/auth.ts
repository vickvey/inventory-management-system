"use server";

import { auth } from "@/lib/auth";
import { authLoginSchema, authRegistrationSchema } from "@/lib/validations/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import * as z from "zod"

export async function signUpAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  try {
    authRegistrationSchema.parse({
      email,
      password,
      name
    })

    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(z.treeifyError(err))
      return err
    }
    if (err instanceof APIError) {
      console.log(err.message, err.status);
      return err
    }
  }

  redirect("/user");
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    authLoginSchema.parse({
      email,
      password
    })

    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(z.treeifyError(err))
      return err
    }

    if (err instanceof APIError) {
      console.log(err.message, err.status);
      return err
    }
  }

  redirect("/user");
}

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/");
}
