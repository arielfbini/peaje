import React from 'react'
import { CarItem } from './CarItem';

export function CarList( {cars} ) {
  return (
    <tbody>
        {cars.map((car)=> (
              <CarItem car = {car}/>
        ))}
    </tbody>
  )
}


/**
    <ul>
        {cars.map((car)=> (
              <CarItem car = {car}/> //<li>tarea</li>
        ))}
    </ul>
 */