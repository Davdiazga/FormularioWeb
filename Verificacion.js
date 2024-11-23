var boton = document.getElementById("boton1");
boton.style.display = "none";

function mostrarMensaje(){
    let nombre = document.getElementById("nombre").value;
    let nombreMayusculas = nombre.toUpperCase();
    window.alert("Su nombre es: " + "\n" + nombreMayusculas);
}

function verificar(){

    let apellido = document.getElementById("apellido").value;
    if (apellido.length > 0){
        boton.style.display = "block";
    }else{
        boton.style.display = "none";
    }
}

function mostrarCheckbox(){
    document.getElementById("checkbox-adicionales").classList.remove("oculto");
}

function noMostrarCheckbox(){
    document.getElementById("checkbox-adicionales").classList.add("oculto");
}

function verificarPass(){
    let pass1 = document.getElementById("contrasena").value;
    let pass2 = document.getElementById("confirmar_contrasena").value;
    if (pass1 === pass2){
        document.getElementById("contrasena").classList.add("valido"); 
        document.getElementById("contrasena").classList.remove("invalido"); 
        document.getElementById("confirmar_contrasena").classList.add("valido"); 
        document.getElementById("confirmar_contrasena").classList.remove("invalido"); 
        } else { 
        document.getElementById("contrasena").classList.add("invalido"); 
        document.getElementById("contrasena").classList.remove("valido"); 
        document.getElementById("confirmar_contrasena").classList.add("invalido"); 
        document.getElementById("confirmar_contrasena").classList.remove("valido"); 
    }
}