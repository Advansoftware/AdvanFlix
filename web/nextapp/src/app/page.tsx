import { getServerSession } from "next-auth"
import UserInfo from "./compnents/UserInfo";

export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      <UserInfo user={session?.user} />
    </>
  )
}
