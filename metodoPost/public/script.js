function enviarInfo() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
let persona={
    nombre,
    apellido,
    edad}


    fetch('/persona', {
        method: "POST",
        headers: {
            "content-type": "application/jsonS"

        },
        body:JSON.stringify(persona)
    })


        .then(function (respuesta) {
            return respuesta.text();
        })

        .then(function (datos) {
            window.alert(datos);

        });
} 