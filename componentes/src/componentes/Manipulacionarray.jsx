import React, { useState } from "react";

const Manipulacionarray = () => {

  const [ordenar, setOrdernar]=useState("normal")
  const [completadas, setCompletadas]=useState([])
  const [buscarText, setBuscarText]=useState("")
  const [filtro, setFiltro]=useState("todas")
  const [tareaNueva, settareaNueva]=useState("")
  const [tareas, setTareas]=useState([
    "aprender react",
    "aprender python",
    "aprender java"
  ])

  const agregar=()=>{
    setTareas(prev=>[...prev, tareaNueva])
    settareaNueva("")
  }

  const eliminar=(index)=>{
    setTareas(prev=>prev.filter((_, i)=> i !== index))
  }

  const mostrarTareas=()=>{
    let listaTareas = [...tareas]

    if(filtro === "largas"){
      listaTareas = listaTareas.filter(tarea=>tarea.length > 10)
    }  else if(filtro === "cortas"){
      listaTareas = listaTareas.filter(tarea=>tarea.length < 10)
    } 

    if(ordenar === "az"){
      listaTareas = [...listaTareas].sort()
    }

    if(buscarText.trim() !== ""){
      listaTareas = listaTareas.filter(tarea=>tarea.toLowerCase().includes(buscarText.toLowerCase()))
    }
    
    return listaTareas
  }

  const toggleCompletadas=(index)=>{
    if(completadas.includes(index)){
      setCompletadas(completadas.filter(i=>i !== index))
    } else{
      setCompletadas([...completadas, index])
    }
  }

  const promedio =()=>{
    if(tareas.length === 0)return 0
    const total= tareas.reduce((suma,tarea)=> suma + tarea.length, 0)
    return (total / tareas.length).toFixed(1)
  }

  const total=()=>{
    return tareas.reduce((suma,tarea)=> suma + tarea.length, 0)
  }

  return (
    <ul>
      {mostrarTareas().map((tarea,index)=>(
        <li key={index}
        style={{backgroundColor:completadas.includes(index) ? "green" : "transparent"}}
        >{tarea}
        <button onClick={()=>toggleCompletadas(index)}>{completadas.includes(index) ? "✅" : "❌"}</button>
        <button onClick={()=>eliminar(index)}>eliminar</button></li>
      ))}
      <li><input type="text" onChange={(e)=>settareaNueva(e.target.value)} value={tareaNueva}/>
      <button onClick={agregar}>agregar</button></li>
      <li><button onClick={()=>setFiltro("todas")}>todas</button></li>
      <li><button onClick={()=>setFiltro("largas")}>largas</button></li>
      <li><button onClick={()=>setFiltro("cortas")}>cortas</button></li>
      <li><input type="text" onChange={(e)=>setBuscarText(e.target.value)} value={buscarText} placeholder="Buscar..."/></li>
      <li><h3>Total tareas: {mostrarTareas().length}</h3></li>
      <li><h3>total Caracteres: {total()}</h3></li>
      <li><h3>Promedio caracteres: {promedio()}</h3></li>
      <li><button onClick={()=>setOrdernar("normal")}>orden normal</button></li>
      <li><button onClick={()=>setOrdernar("az")}>orden az</button></li>
    </ul>
  );  
};

export default Manipulacionarray;
