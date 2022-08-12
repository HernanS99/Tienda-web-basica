let productos = [];
let producto = {}

document.querySelector("#btnagregar").addEventListener("click", validarSemilla)

function print() {
    let filas = document.getElementById("filas");
    filas.innerHTML = '';
    productos.forEach(producto=>
    filas.innerHTML += `
        <tr>
                <td>${producto.name}</td>
                <td>${producto.desc}</td>
                <td>${producto.precio}</td>
        </tr>`
    )
}

function validarSemilla() {

    let name = document.getElementById("nombre").value;
    let desc = document.getElementById("desc").value;
    let precio = document.getElementById("precio").value;

    if (nombre === "" || desc === "" || precio === "") {
        alert("No olvides rellenar todos los campos")
    } else {
        producto = {
            name,
            desc,
            precio
        }
        insert(producto)
    }
}



function insert(producto1) {//create
    productos.push(producto1);
    localStorage.setItem("weed", JSON.stringify(productos));
}

function getProducts() {//conseguir datos
    let listaweed = localStorage.getItem('weed')
    productos = !listaweed ? [] : JSON.parse(listaweed);
    print()
    return productos;
    
}





getProducts();
