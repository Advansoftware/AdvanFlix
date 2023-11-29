"use client"

import Input from "@/app/compnents/Input";
import { useCallback, useEffect, useState } from "react";
import {signIn} from 'next-auth/react'
import Image from "next/image";

const signin = () => {
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [loading,setLoading] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState(null);
  const login = useCallback(async () => {
      try {
        setLoading(true)
          await signIn('credentials', {
              Username: username,
              Pw:pw,
              callbackUrl: '/'
          });
      } catch (error) {
          console.log(error)
      }finally{
        setLoading(false)
      }

  }, [username, pw]);
  useEffect(() => {
    if(process.env.SERVER_URL){
      setBackgroundUrl(`${process.env.SERVER_URL}/Branding/Splashscreen`);
    }
  }, [process.env.SERVER_URL])
  if(!backgroundUrl){
    return null;
  }
  return (<>

    <section className="relative h-[100vh] w-full bg-no-repeat bg-center bg-fixed bg-cover">
       <Image
        src={backgroundUrl}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
     <div className="fixed top-0 h-screen w-screen bg-black/50"></div>
      <div className="flex justify-center content-center items-center h-full">
        <div
            className="z-20 bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
                Entrar
            </h2>
            <div className="flex flex-col gap-4">
                <Input
                    label='Usuario'
                    onChange={(evt: any) => setUsername(evt.target.value)}
                    id='email'
                    type='email'
                    value={username}
                />
                <Input
                    label='Senha'
                    onChange={(evt: any) => setPw(evt.target.value)}
                    id='password'
                    type='password'
                    value={pw}
                />
            </div>
            <button
            disabled={loading}
            onClick={login}
            className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition disabled:bg-gray-700" >
             {loading ? ( <svg aria-hidden="true" role="status" class="inline w-5 h-5 me-3 text-gray-200 animate-spin text-gray-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#E02424"/>
              </svg>) : 
              (<>Entrar</>)}
            </button>

        </div>
      </div>
    </section>
  </>)
}
export default signin;