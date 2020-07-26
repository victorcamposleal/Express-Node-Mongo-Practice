const express=require('express')
const app= express();
let nombres=[ 'Dartañán','Portos','Aramis','Atos'];


app.get('/', function(req,res){

    res.send(nombres)


});


//variables de entrono en el proceso hay una varaible de entorno llamada puerto


// // // MSNERA POR DE BUSCAR UN POUERTO
// // let port= process.env.PORT;
// // if (port===undefined) {
// //      port=3000;
// //    }
// // app.listen(port);
// si este no esta definido coge el valor de 3000 y si esta el valor de proceess coge el valor como true pór que esta true
let port=process.env.PORT||3000;
app.listen(port);
