import React, {Fragment, useState, useEffect, useRef} from "react";
import { CarList } from './components/CarList';
import { Reloj } from "./components/Reloj";
import "./CSS/style.css";

export function App() {

  const [tipos, setTipo] = useState (["Moto", "Auto", "Pickup", "Bus", "Camión"]);

  const [valorSeleccionado, setValorSeleccionado] = useState(tipos[0]);

  const tipoChange = (tipo) => {
    setValorSeleccionado(tipo.target.value);
  };

  const [cars, setCars] = useState ([
      { patente: "ABC123", hora: "12/09/2024 15:30:11", tipo: "Auto" },
      { patente: "DEF456", hora: "12/09/2024 15:30:22", tipo: "Moto" },
  ]);

  const matriculaRef = useRef();
  const tipoRef = useRef();

  const formatearFechaHora = (fecha) => {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    return `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
  };

  const registrarCar = () => {
    const fechaHoraActual = formatearFechaHora(new Date());
    const autoMat = matriculaRef.current.value;
    const autoTipo = tipoRef.current.value;

    if (autoMat === '') return;

    setCars ((prevCars) => {
      return [...prevCars, {patente: autoMat, hora: fechaHoraActual, tipo: autoTipo}]
    });

    matriculaRef.current.value = null;
  };

  return (
    <Fragment>
      
      <table className="tabla" border="1">
      <thead>
          <tr>
            <th>Patente</th>
            <th>Tipo</th>
            <th>Fecha/Hora</th>
          </tr>
        </thead>
        <CarList cars={cars} />
      </table>

      <h3 className="titulo">Registrar nuevo ingreso de vehículo</h3>

      <div className="registro">

          <div className="form-group">
            <input ref={matriculaRef} className="inputMat" type="text" placeholder="Matrícula" />
            <select ref={tipoRef} className="selectTipo" value={valorSeleccionado} onChange={tipoChange}>
              {tipos.map((valor) => (
                <option key={valor} value={valor}>
                  {valor}
                </option>
              ))}
            </select>
          </div>

          <button className="btnRegistrar" onClick={registrarCar}>Registrar</button>
          <Reloj />
        </div>


    </Fragment>


  )
  
}
/**
   const [fechaActual, setFechaActual] = useState("");

  useEffect (()=>{
    const fechaHora = new Date();
    const formatoFecha = fechaHora.toISOString().slice(0, 16); 
    setFechaActual(formatoFecha);
  })


        <input ref={horaRef} type="datetime-local" value={fechaActual} placeholder="Hora actual" onChange={(e) => setFechaActual(e.target.value)} />
      
 */