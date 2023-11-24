import { useEffect, useState } from "react";

const useSplashScreen = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  // Cria uma função para esconder o splash screen
  function hideSplash() {
    setShowSplashScreen(false);
  }

  // Adiciona um listener para o evento window.onload
  useEffect(() => {
    window.addEventListener("load", hideSplash);
    // Remove o listener quando o componente for desmontado
    return () => window.removeEventListener("load", hideSplash);
  }, []);
  return {
    showSplashScreen,
  };
};
export default useSplashScreen;
