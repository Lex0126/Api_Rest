//importar express

const express = require('express');

const app = express();
app.use(express.json());
const PORT = 3000;


app.get('/', (req, res) =>{


    res.send("Giacomino guardiano delle galassie e Dell iperspazio")
});
app.get('/hola', (req, res) =>{


    res.json({
        mensaje: "hola",
        autores: "Giacomino guardiano delle galassie e Dell iperspazio",
        fecha : new Date()
    })
});

const usuarios = [

    {id : 1, nombre : "juan", edad : 28},
    {id : 2, nombre : "lexiss", edad : 22},
    {id : 3, nombre : "goldship", edad : 20},
];
app.get('/user', (req , res)=>{
    res.json({
        usuarios: usuarios
    });

});
app.post('/user', (req , res)=>{
   const cuerpo = req.body;

   const usuario={
    id : usuarios.length +1,
    nombre : cuerpo.nombre,
    edad : cuerpo.edad,
   }

   usuarios.push(usuario);
   res.json({
    mensaje: "Usuario agregado exitosamente",
    nuevo_usuario: usuario,
    usuarios_actualizados: usuarios
   });


});
app.put ('/user/:id',(req,res)=>{

    const id = parseInt(req.params.id);
    const cuerpo = req.body;

    const usuarioIndex = usuarios.findIndex( u => u.id ===id);
    if (usuarioIndex === -1){
        return res.status(404).json({mensaje: "Usuario no encontrado"});
    }

    usuarios[usuarioIndex].nombre = cuerpo.nombre || usuarios[usuarioIndex].nombre;
    usuarios[usuarioIndex].edad = cuerpo.edad || usuarios[usuarioIndex].edad;

    res.json({

        mensaje : "Usuario actualizado correctamente",
        usuario_actualizado: usuarios[usuarioIndex],
        usuarios_actualizados: usuarios,
    });
});

app.delete('/user/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const usuarioIndex = usuarios.findIndex(u => u.id ===id);
    if (usuarioIndex === -1){
        return res.status(404).json({mensaje: "Usuario no encontrado"});
    }

    const usuarioEliminado = usuarios.splice(usuarioIndex,1);


    res.json({
        mensaje: "Usuarios eliminado exitosamente",
        usuario_eliminado: usuarioEliminado[0],
        usuarios_actualizados: usuarios
    })

})


app.listen(PORT, () =>{
    console.log("Se inicio correctamente el servidor en http://localhost:"+PORT);
});
