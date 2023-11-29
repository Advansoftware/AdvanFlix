import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();
export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        Username: { label: "Usuario", type: "text", placeholder: "jsmith" },
        Pw: { label: "Senha", type: "password" }
      },
      async authorize(credentials, req) {
      let base64Credentials = btoa(credentials?.Username + ":" + credentials?.Pw);
      const res = await fetch(process.env.SERVER_URL+"/Users/AuthenticateByName", {
        method: 'POST',
        body: JSON.stringify({Username: credentials?.Username, Pw: credentials?.Pw}),
        headers: {
          "Content-Type": "application/json",
          "X-Emby-Authorization": `MediaBrowser Client="Advanflix Web", Device="Advansoftware ${credentials?.Username.toLocaleUpperCase()}", DeviceId="${id}", Version="3.0.0", Token="${base64Credentials}"`,
        }

      })
      
      const user = await res.json();
      if (res.ok && user) {
        return user;
      }
      // Return null if user data could not be retrieved
      return null
    }
    })
  ],
  pages:{ signIn: "/auth/signin"},

}