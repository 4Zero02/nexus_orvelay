// app/overlay/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function Overlay() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const atualizar = () => {
      const m = localStorage.getItem("mensagem") || "";
      setMensagem(m);
    };

    atualizar();
    const intervalo = setInterval(atualizar, 1000); // verifica a cada 1s

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white text-4xl font-bold">
      {mensagem || "Aguardando mensagem..."}
    </div>
  );
}
