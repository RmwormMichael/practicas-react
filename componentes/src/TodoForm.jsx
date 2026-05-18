import React, { useState } from "react";

const TodoForm = ({onAgregarUsuario}) => {
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const newUser ={
      name:newName,
      email:newEmail
    }

    const response = await fetch("http://localhost:3000/api/users",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(newUser)
    })
    const data = await response.json()
    onAgregarUsuario(data)
    setNewName("")
    setNewEmail("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setNewName(e.target.value)} value={newName}/>
        <input type="text" onChange={(e)=>setNewEmail(e.target.value)} value={newEmail}/>
        <button type="submit">agregar</button>
      </form>
    </>
  );
};

export default TodoForm;
