import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "https://linktr.ee/mosaicoigreja";
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center h-screen">
      <p>Redirecionando para o Linktree...</p>
    </div>
    </>
  )
}

export default App
