let usuarios = [];
let usuario = {};
document.querySelector("#register").addEventListener("click", register)


function register (){
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    const regexmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(regexmail.test(mail)){
        let existe = usuarios.find((element) => element.name===mail && element.password===pass);
    if(existe===undefined){
        if(pass!==""){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            
            user = {
                name: mail,
                password : pass
            }
            setTimeout(()=>{
                location.href ="./login.html";
            },1500)
            
            insert(user)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe ingresar una contraseña',
              })
        }
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario ingresado ya existente',
          })
    }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un mail valido',
          })
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