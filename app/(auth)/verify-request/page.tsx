"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { authClient } from "@/lib/auth-client"
import { Loader2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"
import { toast } from "sonner"

const VerifyRequest = () => {
  const router = useRouter()
  const [otp, setOtp] = useState("")
  const [emailPending, startEmailTransition] = useTransition()
  const params = useSearchParams()
  const email = params.get("email") as string;
  const isOtpCompleted = otp.length === 6;

  const verifyOtp = () => {
    startEmailTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Correo verificado exitosamente");
            router.push("/")
          },
          onError: () => {
            toast.error("Error al verificar tu correo")
          }
        }
      })
    })
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Por favor verifica tu correo</CardTitle>
        <CardDescription>Te hemos enviado un codigo de verificacion a tu correo electronico. Por favor verifica tu correo y pega el codigo abajo.</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex flex-col items-center space-y-2">
          <InputOTP
            value={otp}
            onChange={(value) => setOtp(value)}
            maxLength={6}
            className="gap-2"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <p className="text-sm text-muted-foreground">Ingresa los 6 digitos que se te enviaron a tu correo</p>
        </div>
        <Button
          onClick={verifyOtp}
          disabled={emailPending || !isOtpCompleted}
          className="w-full">
          {emailPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span className="">Validando...</span>
            </>
          ) : (
            <>Valida el codigo</>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

export default VerifyRequest