import React, { useEffect, useState } from 'react'

const librosIniciales=[
    {id:1, nombre:"El Principito", stock:5, precio:5000},
    {id:2, nombre:"1984", stock:4, precio:10000},
    {id:3, nombre:"Cien años de soledad", stock:8, precio:7000},
    {id:4, nombre:"Don Quijote", stock:0, precio:15000}
]

const CarroDeCompras = () => {

    const [libros, setLibros]=useState(librosIniciales)
    const [carrito, setCarrito]=useState(()=>{
        const carritoGuardado = localStorage.getItem("carrito")
        return carritoGuardado ?
        JSON.parse(carritoGuardado)
        : []
    })

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

    const agregar=(libro)=>{
        const libroExistente = carrito.find(item=>item.id === libro.id)

        if(libroExistente){
            if(libroExistente.cantidad >= libro.stock)return

            setCarrito(carrito.map(item=>
                item.id === libro.id ?
                {...item, cantidad: item.cantidad + 1}
                : item
            ))
        }else{
            setCarrito([...carrito, {...libro, cantidad: 1}])
        }
    }

    const aumentar=(id)=>{
        setCarrito(carrito.map(item=>{
            if(item.cantidad >= item.stock)return item
            return item.id === id ?
            {...item, cantidad: item.cantidad + 1}
            : item
        }))
    }

    const disminuir=(id)=>{
        setCarrito(carrito.map(item=>
            item.id === id ?
            {...item, cantidad: item.cantidad - 1}
            : item
        ).filter(item=>item.cantidad > 0)
    )
    }

    const eliminar=(id)=>{
        setCarrito(carrito.filter(item=>item.id !== id))
    }

    const total = carrito.reduce((acumulador, item)=>
        acumulador + item.precio * item.cantidad, 0 
    )
    
  return (
    <>
    <ul>
        {libros.map(libro=>
            <li key={libro.id}
            style={{border: "1px solid", margin:"10px", padding:"10px"}}>
                <p>Nombre: {libro.nombre}</p>
                <p>Precio {libro.precio}</p>
                <p>Stock: {libro.stock === 0 ? "sin stock" : libro.stock}</p>
                <p>{libro.stock === 0 ? "Sin stock" : <button onClick={()=>agregar(libro)}>agregar</button>}</p>
            </li>
        )}
        
        <h2>carrito de compras</h2>
    {carrito.length === 0 ? "carrito vacio"
    : carrito.map(item=>
        <li key={item.id}
        style={{border:"1px solid", margin:"5px", padding:"5px"}}>
            <p>Nombre: {item.nombre}</p>
            <p>Cantidad: {item.cantidad} {" "}
                <button onClick={()=>aumentar(item.id)}>+</button>  
                <button onClick={()=>disminuir(item.id)}>-</button>
            </p> 
            <button onClick={()=>eliminar(item.id)}>eliminar del carrito</button>
        </li>
    )
    }
    <p>Total: {total}</p>
        
    </ul>
    </>
  )
}

export default CarroDeCompras