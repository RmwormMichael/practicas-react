import React, { useState } from "react";

const EditTareaForm = ({user, onEditarUsuario, onCancelar}) => {

  const [editName, setEditName] = useState("")
  const [editEmail, setEditEmail] = useState("")

  const handleSubmit =async(e)=>{
    e.preventDefault()

    const response = await fetch(`http://localhost:3000/api/users/${user._id}`,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({name:editName,email:editEmail})
    })
    const data = await response.json()
    onEditarUsuario(data)
    setEditEmail("")
    setEditName("")
    onCancelar()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setEditName(e.target.value)} value={editName}/>
        <input type="text" onChange={(e)=>setEditEmail(e.target.value)} value={editEmail}/>
        <button type="submit">editar</button>
        <button type="button"onClick={onCancelar}>cancelar</button>
      </form>
    </>
  );
};

export default EditTareaForm;
