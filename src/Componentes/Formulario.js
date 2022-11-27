import React,{Component} from "react";
import axios from "axios";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            descripcion:"",
            numero:0,
            imagen:""
        }
        this.cambio=this.cambio.bind(this);
        this.guardar=this.guardar.bind(this);
    }

    cambio(e){
        //console.log(e.target.value,e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }

    guardar(){
        //alert("Guardando...");
        axios.post('http://localhost:5000/servicios/nuevo',this.state)
            .then(console.log("Creado"))
        alert('Articulo creado')
        this.setState({titulo:""})
        document.getElementById("titulo").value=""
        document.getElementById("descripcion").value=""
        document.getElementById("numero").value=""
        document.getElementById("imagen").value=""
        
    }

    render(){
        return(
            <div className="card w-50 m-auto bg-dark mt-4 mb-4 border-white">
                <h1 className="m-auto text-white">Nuevo Articulo</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre Articulo" name="titulo" onChange={this.cambio} className="form-control" id="titulo"/>   
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Descripción Articulo" name="descripcion" className="form-control mt-3" onChange={this.cambio} id="descripcion"/>   
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Cantidad" name="numero" className="form-control mt-3" onChange={this.cambio} id="numero"/>   
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Imagen Articulo" name="imagen" className="form-control mt-3" onChange={this.cambio} id="imagen"/>   
                    </div>
                    <div className="d-grid gap-2 col-3 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.guardar}>Crear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;