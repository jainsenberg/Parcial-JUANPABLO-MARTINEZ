import React from 'react'
import { useState } from 'react'

const loteriass = [
    {id: 1, lote: 'CALI'},
    {id: 2, lote: 'GUAJIRA'},
    {id: 3, lote: 'PETECUY'}
]
const [loteriaV, setLoteria] =useState('')
const [numeroV, setNum] =useState('')
const [precioV, setPri] =useState('')


const entradaLoteria = (event)=>{
    setLoteria(event.target.value)

}
const entradaNum= (event) =>{
    setNum(event.target.value)
}
const entradaPrice= (event) =>{
    setPri(event.target.value)
}

const enviar =(event) =>{
    event.preventDefault(),
    setLoteria(''),
    setNum(''),
    setPri('')
}

const Loteria = () => {
    return (
        
    <div>
        <h1>CHOCLITOS MILLONARIO</h1>
        <h2>Gane picantico cobre sabrosito</h2>
        
        <select value={loteriaV} onChange={(event) => entradaLoteria(event)}>
            {loteriass.map((item, i)=>(
                <option key={"Id"+i} value={item.lote}>{item.id}) {item.lote}</option>
            ))}

        </select>
        <input  minLength="3" maxLength="4" placeholder="NUMERO QUE QUIERA" onChange={(event) => entradaNum(event)}></input>
        <input  placeholder="PRECIO" onChange={(event) => entradaPrice(event)}></input>
        <button guardar></button>

        <table>
            <thead>
                <tr>
                    <th>LOTERIA</th><th>NUMERO</th><th>PRECIO</th><th>TOTAL</th>
                </tr>
            </thead>
            <tr>
                <th>###</th> 
            </tr>
        </table>
    </div>
  )
}

export default Loteria