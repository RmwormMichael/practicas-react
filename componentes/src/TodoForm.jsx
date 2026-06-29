import React, { useState } from "react";

const TodoForm = ({onAgregarUsuario}) => {
  const [newUser, setNewUser]=useState("")
  const [newEmail, setNewEmail]=useState("")

  const handleSubmit=async(e)=>{
    e.preventDefault();

    const nuevoUsuario={
      name:newUser,
      email:newEmail
    }

    const response=await fetch("http://localhost:3000/api/users",{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(nuevoUsuario)
    })
    const data=await response.json()
    onAgregarUsuario(data)
    setNewUser("")
    setNewEmail("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setNewUser(e.target.value)} value={newUser}/>
        <input type="text" onChange={(e)=>setNewEmail(e.target.value)} value={newEmail}/>
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};

export default TodoForm;
