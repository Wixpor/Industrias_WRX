const mongoose=require('mongoose')

let esquema=mongoose.Schema({
    titulo:String,
    descripcion:String,
    numero:Number,
    imagen:String
})

let Esquema=mongoose.model("datos",esquema)

module.exports=Esquema