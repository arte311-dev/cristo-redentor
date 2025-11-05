"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useState, useTransition } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import { EyeIcon, EyeOffIcon, Loader2, LogIn } from "lucide-react"

/* import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { GithubIcon, Loader, Loader2, Send } from "lucide-react"
import { useState, useTransition } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
 */

//import { signUp } from "@/server/users"

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8)
})

const LoginForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loginPending, startLoginTransition] = useTransition()

  /*
  const [githubPending, startGithubTransition] = useTransition()
  const [emailPending, startEmailTransition] = useTransition()
  const [email, setEmail] = useState("") 
  */

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    startLoginTransition(async () => {
      await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Inicio de sesion exitoso")
            router.push("/admin")
          },
          onError: (error) => {
            toast.error(`Error al iniciar sesión: ${error.error.message}`)
          }
        }
      })

    })
  }

  /*   async function signInWithGithub() {
      startGithubTransition(async () => {
        await authClient.signIn.social({
          provider: 'github',
          callbackURL: '/',
          fetchOptions: {
            onSuccess: () => {
              toast.success('Has iniciado sesión con Github, seras redireccionado...')
            },
            onError: () => {
              toast.error("Error interno")
            }
          }
        });
      })
    }
  
    function signInWithEmail() {
      startEmailTransition(async () => {
        await authClient.emailOtp.sendVerificationOtp({
          email: email,
          type: 'sign-in',
          fetchOptions: {
            onSuccess: () => {
              toast.success('Se te a enviado un correo')
              router.push(`/verify-request?email=${email}`)
            },
            onError: () => {
              toast.error("Error interno al enviar el correo")
            }
          }
        })
      })
    } */

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">¡Bienvenido de nuevo!</CardTitle>
        <CardDescription>Inicia sesion con tu correo electronico</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {/* <Button
          disabled={githubPending}
          onClick={signInWithGithub}
          className="w-full"
          variant={"outline"}
        >
          {githubPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Cargando...</span>
            </>
          ) : (
            <>
              <GithubIcon className="size-4" />
              Inicia sesion con Github
            </>
          )}
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">Inicia solo con tu correo</span>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Correo</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="correo@dominio.com"
              required
            />
          </div>

          <Button
            onClick={signInWithEmail}
            disabled={emailPending}
          >
            {emailPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Enviando correo...</span>
              </>
            ) : (
              <>
                <Send className="size-4" />
                <span>Continuar con correo</span>
              </>
            )}
          </Button>
        </div>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">Inicia con tu correo y contrseña</span>
        </div> */}


        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-3">

            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Correo</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="correo@domionio.com"
                      autoComplete="email"
                      type="email"
                    />
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                    <div className="relative flex items-center">
                      <Input
                        {...field}
                        id="password"
                        aria-invalid={fieldState.invalid}
                        placeholder="********"
                        autoComplete="password"
                        type={showPassword ? "text" : "password"}
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant={"ghost"}
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 p-1"
                      >
                        {showPassword ? (<EyeIcon className="size-4" />) : (<EyeOffIcon className="size-4" />)}
                      </Button>
                    </div>
                  </Field>
                )}
              />
            </FieldGroup>

            <Button
              type="submit"
              className="w-full"
              disabled={loginPending}
            >
              {loginPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Iniciando sesión...</span>
                </>
              ) : (
                <>
                  <LogIn className="size-4" />
                  <span>Inicia sesión</span>
                </>
              )}
            </Button>

          </div>
        </form>
      </CardContent>
      <CardFooter>

      </CardFooter>
    </Card>
  )
}

export default LoginForm