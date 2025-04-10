import "./index.css";
import { APITester } from "./APITester";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";


import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  useEffect(() => {
    window.location.href = "https://linktr.ee/mosaicoigreja";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Redirecionando para o Linktree...</p>
    </div>
  );
}

export default App;
