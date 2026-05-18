import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { SquarePen, Trash } from "lucide-react";
import EditTareaForm from "./EditTareaForm";
/* http://localhost:3000/notas ✅ ❌*/
/* http://localhost:3000/api/users */

const Notas = () => {
  
  const [users, setUsers] = useState([])
  const [editando, setEditando] = useState(null)

  useEffect(() => {

    const fetchData = async()=> {
      const response = await fetch("http://localhost:3000/api/users")
      const data = await response.json()

      setUsers(data)
    }
    fetchData()
  }, [])

  const agregarUsuario =(usuario)=> {
    setUsers(prev => [...prev,usuario] )
  }
  
  const editarUsuario =(usuarioEditado)=>{
    setUsers(users.map(user=>
      user._id === usuarioEditado._id ? usuarioEditado : user
    ))

  }

  const eliminar = async (id)=>{
    const response = await fetch(`http://localhost:3000/api/users/${id}`,{
      method: "DELETE",
      }    )
      if(!response.ok){
        throw new Error(response.status)
      }
    setUsers(users.filter(user => user._id !== id))
    
  }

  return(
  <>
   {users && users.map(user => 
    <div key={user._id}>
      {user.name} {user.email}
      <SquarePen onClick={()=>setEditando(user._id)}/> 
        {user._id === editando && (
          <EditTareaForm onCancelar={()=>setEditando(null)} user={user} onEditarUsuario={editarUsuario}/>
        )}  
        <Trash onClick={()=>eliminar(user._id)}/>
    </div>
   )}
   <TodoForm onAgregarUsuario={agregarUsuario}/>
   
   
   
  </>
  )
};

export default Notas;
