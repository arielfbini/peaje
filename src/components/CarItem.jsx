import React, {Fragment} from 'react'
import "../CSS/style.css";

export function CarItem( {car} ) {
    const {patente, hora, tipo} = car;
  return (
    <Fragment>
        <tr>
            <th>{patente}</th>
            <th>{tipo}</th>
            <th>{hora}</th>
        </tr>
    </Fragment>    
  )
}

//<li>{patente},{tipo},{hora}</li>