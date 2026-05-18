import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { SquarePen, Trash } from "lucide-react";
import EditTareaForm from "./EditTareaForm";
/* http://localhost:3000/notas ✅ ❌*/
/* http://localhost:3000/api/users */

const Notas = () => {
  
  const [users, setUsers] = useState([])
  const [editUser, setEditUser] = useState(null)

  useEffect (()=>{
    const fetchData=async()=>{
      const response = await fetch("http://localhost:3000/api/users")
      const data = await response.json()
      setUsers(data)
    }
    fetchData()
  },[])
  
  const agregarUsuario = (nuevoUsuario)=>{
    setUsers(prev=> [...prev, nuevoUsuario])
  }

  const eliminar = async(id)=>{
    const response = await fetch(`http://localhost:3000/api/users/${id}`,{
      method:"DELETE"
    })
    if(!response.ok){
      throw new Error(response.status)
    }
    setUsers(users.filter(user=>user._id !== id))
  }
  
  const editarUsuario =(usuarioEditado)=>{
    setUsers(users.map(user=> user._id === usuarioEditado._id ? usuarioEditado : user))
  }

  return(
  <>
   {users && users.map(user=>(
    <li key={user._id}>{user.name}{user.email}
    <Trash onClick={()=>eliminar(user._id)}/>
    <SquarePen onClick={()=>setEditUser(user._id)}/>
      {user._id === editUser &&
      <EditTareaForm user={user} onCancelar={()=>setEditUser(null)} onEditarUsuario={editarUsuario}/>
      }
    </li>
   ))}
   <TodoForm onAgregarUsuario={agregarUsuario}/>
  </>
  )
};

export default Notas;
