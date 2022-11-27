import { useState } from "react"
import Articulos from "./Articulos"

const Bdmongo=()=>{
    
    const [todo,settodo]=useState([])
    
    const var_datos=()=>{
        fetch('http://localhost:5000/servicios/todo')
            .then(res=>res.json())
            .then(datos2=>settodo(datos2))
    }

    var_datos()
    let mostrar=todo.map((dato)=>{
        return(
            <Articulos titulo={dato.titulo} descripcion={dato.descripcion} numero={dato.numero} imagen={dato.imagen} id={String(dato._id)}/>
        );
    })
    // <div>
            
    //         {todo.map(dato=>{
    //             return (
    //                 <Articulos nombre={dato.nombre} descripcion={dato.descripcion} cantidad={dato.cantidad} imagen={dato.imagen} valor={dato.valor} usuario={dato.usuario}/>
    //                 // <article className="coaster-card">
    //                 //     <h1>{eachtodo.nombre}</h1>
    //                 // </article>
    //             )
    //         })}
    //     </div>

    
    //console.log(todo)
    return(
        <div className="row">
            {mostrar}
        </div>
    )
}

export default Bdmongo