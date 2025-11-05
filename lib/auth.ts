import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { env } from "./env"
import { emailOTP } from "better-auth/plugins"
import { nextCookies } from "better-auth/next-js";
import { resend } from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }
  },
  emailAndPassword: {
    enabled: true
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        await resend.emails.send({
          from: "Parroquia Cristo Redentor <info@sistemasdejuarez.net>",
          to: [email],
          subject: "Parroquia Cristo Redentor - Verifica tu correo",
          html: `<p>Tu codigo es <strong>${otp}</strong></p>`
        })
      }
    }),
    nextCookies()
  ]
});