import clsx from 'clsx';
import { useEffect } from 'react';

interface AlertProps {
  message: string;
  isVisible: boolean;
  setVisible: (value: boolean)=>void;
}

const Alert = ({ message, isVisible, setVisible }: AlertProps) => {
useEffect(() => {
  const timer = setTimeout(() => {
    setVisible(false); // chama setVisible com false
  }, 4000);
  return () => clearTimeout(timer); // limpa o timer quando o componente for desmontado
}, [isVisible]); // passa um array vazio como dependência, para executar o efeito apenas uma vez

  return (
    <div className={clsx("flex fixed top-5 z-50 w-full justify-center content-center", {
      "hidden": !isVisible, // esconde o componente se isVisible for false
      "translate-y-[-100%]": !isVisible, // move o componente para cima se isVisible for false
      "translate-y-0": isVisible, // move o componente para baixo se isVisible for true
    })}>
      <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 transition-all duration-300" role="alert">
      <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  </div>
  )
}

export default Alert;
