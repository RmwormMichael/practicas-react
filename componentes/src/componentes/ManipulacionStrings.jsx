import React, { useState } from 'react'

const ManipulacionStrings = () => {

  const [text, setText]=useState("")
  const mayuscula=()=>{
    setText(prev=>prev.toUpperCase())
  }

  const minuscula=()=>{
    setText(prev=> prev.toLocaleLowerCase())
  }

  const capitalizar=()=>{
    setText(prev=>prev.charAt(0).toUpperCase() + prev.slice(1).toLowerCase())
  }

  const capitalizarPalabras=()=>{
    setText(prev=>prev.split(" ").map(palabra=>
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLocaleLowerCase()
    ).join(" "))
  }

  const invertir=()=>{
    setText(prev=>prev.split("").reverse().join(""))
  }

  const contarPalabras=()=>{
    const palabrasContadas= text.split(" ").length

    console.log(palabrasContadas)
  }

  const eliminarEspacios=()=>{
    setText(prev=>prev.replace(/\s/g,""))
  }

  const eliminarVocales=()=>{
    setText(prev=>prev.replace(/[aeiouAEIOU]/g,"*"))
  }

  const buscarPalabra=()=>{
    const palabraBuscada= prompt("ingrese palabra a buscar")

    if(text.includes(palabraBuscada)){
      alert(`la palabra buscada es ${palabraBuscada}`)
    }else{
      alert("la palabra no se encuentra")
    }
  }

  const extraer=()=>{
    const inicio=prompt("ingrese inicio a extraer")
    const fin=prompt("ingrese fin a extraer")

    const palabraExtraida=text.substring(inicio,fin)
    alert(`la palabra extraida es ${palabraExtraida}`)
  }

  const repetir=()=>{
    setText(prev=>prev.repeat(2))
  }
  
  return (
    <>

    <textarea onChange={(e)=>setText(e.target.value)} value={text}></textarea>
    <li>
    <button onClick={mayuscula}>Mayuscula</button>
    <button onClick={minuscula}>minuscula</button>
    <button onClick={capitalizar}>Capitalizar</button>
    <button onClick={capitalizarPalabras}>capitalizar Palabras</button>
    <button onClick={invertir}>invertir</button>
    <button onClick={contarPalabras}>contar palabras</button>
    <button onClick={eliminarEspacios}>eliminar Espacios</button>
    <button onClick={eliminarVocales}>eliminar Vocales</button>
    <button onClick={buscarPalabra}>buscar palabra</button>
    <button onClick={extraer}>extraer </button>
    <button onClick={repetir}>repeat</button>

    <h3>informacion del texto:</h3>

    <p><strong>caracteres</strong>{text.length}</p>
    <p><strong>palabras: </strong>{text.trim()==="" ? 0 : text.trim().split(" ").length}</p>
    <p><strong>espacios: </strong>{(text.match(/ /g) || []).length}</p>
    <p><strong>vocales: </strong>{(text.match(/[aeiouAEIOU]/g) || []).length}</p>
    <p><strong>numeros: </strong>{(text.match(/\d/g) || []).length}</p>
  
    </li>
    </>
  )
}

export default ManipulacionStrings