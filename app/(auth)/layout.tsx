import { buttonVariants } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import Logo from "@/public/logo.svg"

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='relative flex min-h-svh flex-col items-center justify-center'>
      <Link href={"/"} className={buttonVariants({
        variant: "outline",
        className: "absolute top-4 left-4",
      })}>
        <ArrowLeft className='size-4' />
        Regresar
      </Link>
      <div className='flex flex-col w-full max-w-sm gap-6'>
        <Link href={"/"} className='flex items-center gap-2 self-center font-medium'>
          <Image
            src={Logo}
            alt='Logo'
            className='dark:invert size-16'
          />
          Parroquia Cristo Redentor
        </Link>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout