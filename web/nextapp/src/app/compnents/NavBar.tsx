'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";
export default function Navbar() {
  const router = useRouter()
   const { data: session, status, update } = useSession()
  const redirect = async () => {
    const data = await signOut({ redirect: false, })
    router.push('/home')
  }
   useEffect(() => {
    let isMounted = true
    if (session) redirect()
    else router.push('/auth/signin')
    return () => {
      isMounted = false
    }
  }, [session])
  if (!session) {
    return (
      <header className="bg-gradient-to-b from-black fixed z-50 top-0 p-2 w-[100%]">
        <Image
        src={Logo}
        alt="logo"
          width={220}
          priority={true}
        />
      </header>
    )
    
  }
  return ( 
    <header className="bg-gradient-to-b from-black fixed z-50 top-0 p-2 w-[100%]">
    <nav >
      <ul className="flex justify-evenly text-lg font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Entrar</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sair</Link>
        </li>
        <li>
          <Link href="/server">server</Link>
        </li>
        <li>
          <Link href="/client">cliente</Link>
        </li>
        <li>
          <Link href="/dashboard">dashboard</Link>
        </li>
      </ul>  
    </nav>
  </header>)
}