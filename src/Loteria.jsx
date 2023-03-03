import React from 'react'
import { useState } from 'react'

const loterias = ['VALLE', 'ANTIOQUIA', 'GUAJIRA']
var numeroE =1;
var precio = 1000

console.log()



const Loteria = () => {
    return (
        
    <div>Loterias
        
        <select name="LOTERIAS" id="1">
            <option value="1">VALLE</option>
            <option value="2">CAUCA</option>
            <option value="3">GUADALAJARA</option>

        </select>
        <input  minLength="3" maxLength="4" placeholder="NUMERO QUE QUIERA"></input>
        <input  placeholder="PRECIO"></input>
        <button></button>
    </div>
    
  )
}

export default Loteria