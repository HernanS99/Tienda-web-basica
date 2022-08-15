let usuarios = [];
let usuario = {};

document.querySelector("#login").addEventListener("click", login)




function login (){
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let existe = usuarios.find((element) => element.name===mail && element.password===pass);
    if(existe===undefined){
        alert("Debe ingresar un usuario existente");
    }else{
        location.href ="../../menuproductos.html";
    }
}

function getProducts() {
    let listusers = localStorage.getItem('usuarios')
    usuarios = !listusers ? [] : JSON.parse(listusers);
    return usuarios;
}

getProducts();