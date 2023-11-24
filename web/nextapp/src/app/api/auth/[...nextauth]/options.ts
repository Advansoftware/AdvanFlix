import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        /* domain: {
        label: "Domain",
        type: "text ",
        placeholder: "advanflix",
        value: "http://app.advansoftware.shop:8096",
      }, */
        Username: { label: "Usuario", type: "text", placeholder: "jsmith" },
        Pw: { label: "Senha", type: "password" }
      },
      async authorize(credentials, req) {
      const res = await fetch(process.env.SERVER_URL+"/your/endpoint", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json()

      // If no error and we have user data, return it
      if (res.ok && user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
    })
  ]
}