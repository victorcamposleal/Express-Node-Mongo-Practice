const express=require('express');
const app=express();
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//
app.get('/persona',function(request,response) {
    response.send('get')    
});

app.post('/persona',function(request,response) {
    console.log(request.body);
    
    response.send(request.body.nombre)

    
});

app.delete('/persona',function (request,response) {
response.send('delete')
    
});

app.put('/persona',function(request,response){
    response.send("Put");
});

app.listen(3000)
