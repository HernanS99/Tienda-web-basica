let usuarios = [];
let usuario = {};

document.querySelector("#login").addEventListener("click", login)




function login (){
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    const regexmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regexmail.test(mail)){ 
        let existe = usuarios.find((element) => element.name===mail && element.password===pass);
        if(existe===undefined){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe ingresar un usuario existente!',
              })
        }else{
            location.href ="./menuproductos.html";
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un mail valido',
          })
    }
}

function getProducts() {
    let listusers = localStorage.getItem('usuarios')
    usuarios = !listusers ? [] : JSON.parse(listusers);
    return usuarios;
}

getProducts();