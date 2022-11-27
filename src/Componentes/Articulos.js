import React,{Component} from "react";
//import img1 from "./img1.png";
import axios from "axios";
//import Formulario from "./Formulario";
//import { Link } from "react-router-dom";
//import Editar from "./Editar";
class Articulos extends Component {

    constructor() {
        super();
        this.state = {
            titulo: "",
            descripcion: "",
            numero: "",
            imagen: "",
            id: "",
            mensaje:""
        }

        this.eliminar = this.eliminar.bind(this)
        this.cambio = this.cambio.bind(this)
        this.editar = this.editar.bind(this)
        this.inicial = this.inicial.bind(this)
        this.intercambiar = this.intercambiar.bind(this)
    }
    editar(e) {
        this.setState({
            id: e.target.name
        })
        
        axios.post("http://localhost:5000/servicios/actualizar2", this.state)
    }

    intercambiar(e) {
        this.setState({
            id: e.target.name
        })
        console.log(this.state);
        axios.post("http://localhost:5000/servicios/intercambiar", this.state)
    }

    eliminar(e) {
        let direccion = "http://localhost:5000/servicios/borrar/" + e.target.name
        axios.get(direccion)
            .then(dato => alert("borrado " + e.target.name))

    }

    cambio(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    inicial() {
        this.setState({
            nombre: this.props.nombre,
            descripcion: this.props.descripcion
        })
    }

    render() {

        return (

            <div className="col-sm-4 text-center">

                <div className="card mt-4 bg-dark b border-white">
                    <img height="400" width="auto" src={this.props.imagen} className="card-img-top" alt={this.props.numero} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.titulo}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        

                        <button className="btn btn-primary border mx-auto me-2 mt-1" data-bs-toggle="modal" data-bs-target={"#editar_cuadro" + this.props.id}>Editar</button>
                        <button className="btn btn-danger border mx-auto mt-1 me-2" data-bs-toggle="modal" data-bs-target={"#articulo" + this.props.id}>Eliminar</button>
                    </div>
                </div>



                {/* Eliminar */}
                <div className="modal fade" id={"articulo" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Eliminar</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-dark">
                                Desea eliminar el articulo {this.props.id}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-danger" onClick={this.eliminar} name={this.props.id}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Editar */}
                <div className="modal fade" id={"editar_cuadro" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Editar Articulo</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-dark">{this.props.id}</p>
                                <form>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start">Articulo</label>
                                        <input type="text" className="form-control" id="recipient-name" name="titulo" defaultValue={this.props.titulo} onChange={this.cambio} />
                                    </div>;
                                    <div className="mb-1">
                                        <label for="message-text" className="col-form-label text-dark text-st" >Descripción</label>
                                        <textarea className="form-control" id="message-text" name="descripcion" defaultValue={this.props.descripcion} onChange={this.cambio}></textarea>
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start">Imagen</label>
                                        <input type="text" className="form-control" id="recipient-name" name="imagen" defaultValue={this.props.imagen} onChange={this.cambio} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-success" name={this.props.id} onClick={this.editar}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);

    }
}

export default Articulos;