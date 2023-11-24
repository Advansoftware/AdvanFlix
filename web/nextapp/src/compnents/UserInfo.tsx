interface UserInfoProps{
  user: {
    name?: string
  } | undefined

}

export default function UserInfo({ user }:UserInfoProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="">
        Hello {user?.name}
      </div>

    </div>
  )
}