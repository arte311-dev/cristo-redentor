"use server"

import { auth } from "@/lib/auth"


export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      }
    })

    return {
      success: true,
      message: "Inicio de sesion exitoso"
    }
  } catch (error) {
    const e = error as Error
    return {
      success: false,
      message: {
        error: e.message || "Error interno desconocido"
      }
    }
  }
}

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "arte311@gmail.com",
      password: "password123",
      name: "Arturo Garcia"
    }
  })
}