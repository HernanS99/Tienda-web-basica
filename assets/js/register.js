let usuarios = [];
let usuario = {};
document.querySelector("#register").addEventListener("click", register)


function register (){
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let existe = usuarios.find((element) => element.name===mail && element.password===pass);
    console.log(existe)
    if(existe===undefined){
        alert("usuario ingresado existente");
        location.href ="../../login.html";
        user = {
            name: mail,
            password : pass
        }
        insert(user)
    }else{
        alert("Usuario existente");
    }
}

function insert(usuario) {
        usuarios.push(usuario);
        console.log(usuarios)
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function getProducts() {
    let listusers = localStorage.getItem('usuarios')
    usuarios = !listusers ? [] : JSON.parse(listusers);
    return usuarios;
}

getProducts();