"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useSignOut = () => {
  const router = useRouter()

  const handleSignout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("Se cerro exitosamente la sesión")
        },
        onError: () => {
          toast.error("Error al cerrar sesion")
        }
      },
    });
  }

  return handleSignout
}

export default useSignOut