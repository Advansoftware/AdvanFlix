import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession();
  if (!session) {
    return<></>
  }
  return (<>
    <nav className="bg-slate-500 p-4">
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
  </>)
}