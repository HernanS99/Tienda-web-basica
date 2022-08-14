let productos = [];
let producto = {}

document.querySelector("#btnagregar").addEventListener("click", validarSemilla)


function print() {
    let filas = document.getElementById("filas");
    filas.innerHTML = '';
    productos.forEach(producto =>
        filas.innerHTML += `
        <tr>
                <th scope="row">${producto.code}</th>
                <td>${producto.name}</td>
                <td>${producto.desc}</td>
                <td>${producto.precio}</td>
                <td><button type="button" id=${producto.code} class="btn btn-primary editar">Editar</button></td>
                <td><button type="button" id=${producto.code} class="btn btn-danger eliminar">Eliminar</button></td>
        </tr>`
    )
    
    let deletebutton = Array.from(document.getElementsByClassName('eliminar'))
    deletebutton.forEach(button=>button.addEventListener('click', (event)=>deleteweed(event.target.id)))

    let editbutton = Array.from(document.getElementsByClassName('editar'))
    editbutton.forEach(button=>button.addEventListener('click', (event)=>editweed(event.target.id)))
}

function deleteweed(code) {
    let number = parseInt(code)
    productos = productos.filter(element=>
        element.code !==  number
    )
    console.log(productos)
    localStorage.setItem("weed", JSON.stringify(productos));
    print();
}

function editweed (code){
    console.log(code)
    let number = parseInt(code)
    let productoe = productos.filter(element=>element.code === number)
    let iCode = document.getElementById("code");
    let iName = document.getElementById("nombre")
    let iDesc = document.getElementById("desc");
    let iPrecio = document.getElementById("precio");
    iCode.value = productoe[0].code;
    iName.value = productoe[0].name;
    iDesc.value = productoe[0].name;
    iPrecio.value = productoe[0].precio;
    console.log(productoe)
}



function validarSemilla() {

    let code = parseInt(document.getElementById("code").value);
    let name = document.getElementById("nombre").value;
    let desc = document.getElementById("desc").value;
    let precio = parseInt(document.getElementById("precio").value);

    if (nombre === "" || desc === "" || precio === "") {
        alert("No olvides rellenar todos los campos")
    } else {
        producto = {
            code,
            name,
            desc,
            precio
        }
        insert(producto)
    }
}



function insert(producto1) {//create
    getProducts();
    let exitencia = productos.find((element) => {

        element.code === producto1.code
    })
    console.log(exitencia)
    if (exitencia === undefined) {
        productos.push(producto1);
        localStorage.setItem("weed", JSON.stringify(productos));
        getProducts();
    } else {
        alert("debe ingresar un dato valido")
    }
}

function getProducts() {//conseguir datos
    let listaweed = localStorage.getItem('weed')
    productos = !listaweed ? [] : JSON.parse(listaweed);
    print()
    return productos;
} 




getProducts();
