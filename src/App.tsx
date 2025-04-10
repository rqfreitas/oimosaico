

import './App.css'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "https://linktr.ee/mosaicoigreja";
  }, []);


  return (
    <>
      <div className="flex items-center justify-center h-screen">
      <p>Redirecionando para o Linktree...</p>
    </div>
    </>
  )
}

export default App
