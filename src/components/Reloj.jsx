import React, { useState, useEffect } from "react";
import "../CSS/style.css";

export function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const formatearHora = (hora) => {
    const horas = hora.getHours().toString().padStart(2, "0");
    const minutos = hora.getMinutes().toString().padStart(2, "0");
    const segundos = hora.getSeconds().toString().padStart(2, "0");
    return `${horas}:${minutos}:${segundos}`;
  };

  return (
    <div className="reloj">
      <h2>{formatearHora(hora)}</h2>
    </div>
  );
}
