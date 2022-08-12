const productos = [];

document.querySelector("#btnagregar").addEventListener("click",validarSemilla)

function validarSemilla (){
    
    let name = document.getElementById("nombre").value;
    let desc = document.getElementById("desc").value;
    let precio = document.getElementById("precio").value;

    if(nombre === "" || desc === ""|| precio === "")
    {
        alert("No olvides rellenar todos los campos")
    } else {
        producto = {
            name,
            desc,
            precio
        }
        insert(producto);
    }
}



function insert(producto1){
    productos.push(producto1);
    console.log(productos);
    localStorage.setItem("weed", JSON.stringify(productos));
}

insert()
