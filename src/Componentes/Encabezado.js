import React,{Component} from "react";

class Encabezado extends Component{
    render(){
        return(
            <div className="container">
                <img height="auto" width="auto" className="img-fluid" src={process.env.PUBLIC_URL+"./multimedia/Portada.jpg"} />
            </div>
        );
    }
}

export default Encabezado;