"use client"

import Input from "@/app/compnents/Input";
import { useCallback, useState } from "react";
import {signIn} from 'next-auth/react'
import Image from "next/image";
import { useRouter } from "next/navigation";
import Alert from "@/app/compnents/Alert";
import LoadingButton from "@/app/compnents/LoadingButton";

const myLoader = ({ src, width, quality }) => {
  return `/api/image?url=${src}&w=${width}&q=${quality || 75}`
}

const signin = () => {
  const router = useRouter()
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const backgroundUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/Branding/Splashscreen`;
  const login = useCallback(async () => {
      try {
        setLoading(true)
        const result = await signIn('credentials', {
              redirect: false,
              Username: username,
              Pw:pw,
          });
          if(result?.ok){
            router.push('/home')
          } else {
            throw result;
          }
          

      } catch (error) {
        setError(true)
        console.log(error)
      }finally{
        setLoading(false)
      }

  }, [username, pw]);
  
  return (<>

    <Alert message="Email ou Senha Incorretos" isVisible={error} setVisible={setError}/>
    
    <section className="relative h-[100vh] w-full bg-no-repeat bg-center bg-fixed bg-cover">
     
      <Image
        src={backgroundUrl} // a url externa da imagem
        alt="Background image"
        style={{
          objectFit: "cover",
        }}
        fill
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
          <LoadingButton
            onClick={login}
            loading={loading}
          >
            Entrar
           </LoadingButton>

        </div>
      </div>
    </section>
  </>)
}
export default signin;