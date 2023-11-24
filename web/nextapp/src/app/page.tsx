import UserInfo from "@/compnents/UserInfo";
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      <UserInfo user={session?.user} />
    </>
  )
}
