let usuarios = [];
let usuario = {};

document.querySelector("#login").addEventListener("click", login)
let usuario1 = {
    name:"1",
    password:"1"
}
insert(usuario1)

function insert(usuario) {
        usuarios.push(usuario);
        console.log(usuarios)
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function login (){
    getProducts();
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let existe = usuarios.find((element) => element.name===mail && element.password===pass);
    if(existe===undefined){

    }else{
        location.href ="../../menuproductos.html";
    }
}

function getProducts() {
    let listusers = localStorage.getItem('usuarios')
    usuarios = !listusers ? [] : JSON.parse(listusers);
    print()
    return usuarios;
}

getProducts();