let productos = [];
let producto = {}

document.querySelector("#btnagregar").addEventListener("click", validarSemilla)
document.querySelector("#btneditar").addEventListener("click", saveEditweed)

document.getElementById("btneditar").style.display = "none";

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
    deletebutton.forEach(button => button.addEventListener('click', (event) => deleteweed(event.target.id)))

    let editbutton = Array.from(document.getElementsByClassName('editar'))
    editbutton.forEach(button => button.addEventListener('click', (event) => editweed(event.target.id)))
}

function deleteweed(code) {
    Swal.fire({
        title: 'Desea eliminar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            let number = parseInt(code)
            productos = productos.filter(element => element.code !== number)
            console.log(productos)
            localStorage.setItem("weed", JSON.stringify(productos));
            print();
            Swal.fire({
                position: 'bottom-end',
                icon: 'success',
                title: 'Eliminado Exitosamente',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })
}

function editweed(code) {
    console.log(code)
    let number = parseInt(code)
    let productoe = productos.filter(element => element.code === number)
    let iCode = document.getElementById("code");
    let iName = document.getElementById("nombre")
    let iDesc = document.getElementById("desc");
    let iPrecio = document.getElementById("precio");
    iCode.value = productoe[0].code;
    iName.value = productoe[0].name;
    iDesc.value = productoe[0].name;
    iPrecio.value = productoe[0].precio;
    document.getElementById("btneditar").style.display = "";
    document.getElementById("btnagregar").style.display = "none";
    iCode.disabled = true;
}

function saveEditweed() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se ha editado correctamente',
        showConfirmButton: false,
        timer: 1500
    })
    let code = parseInt(document.getElementById("code").value);
    let name = document.getElementById("nombre").value;
    let desc = document.getElementById("desc").value;
    let precio = parseInt(document.getElementById("precio").value);
    producto = {
        code,
        name,
        desc,
        precio
    }
    let index = productos.findIndex(element => element.code === code)
    productos[index] = producto;
    localStorage.setItem("weed", JSON.stringify(productos));

    print();
    vaciarInputs();
    
    document.getElementById("btnagregar").style.display = "";
    document.getElementById("btneditar").style.display = "none";
    document.getElementById("code").disabled = false
}

function validarSemilla() {
    let code = parseInt(document.getElementById("code").value);
    let name = document.getElementById("nombre").value;
    let desc = document.getElementById("desc").value;
    let precio = parseInt(document.getElementById("precio").value);
    if (nombre === "" || desc === "" || precio === "") {
        alertx("No olvides rellenar todos los campos")
    } else {
        producto = {
            code,
            name,
            desc,
            precio
        }
        insert(producto)
        vaciarInputs();
    }
}



function insert(producto1) {//create
    getProducts();
    let exitencia = productos.find((element) => element.code === producto1.code)
    if (exitencia === undefined) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Ingresado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
        productos.push(producto1);
        localStorage.setItem("weed", JSON.stringify(productos));
        getProducts();

    } else {
        alertx("debe ingresar un codigo innexistente")
    }
}

function getProducts() {//conseguir datos
    let listaweed = localStorage.getItem('weed')
    productos = !listaweed ? [] : JSON.parse(listaweed);
    print()
    return productos;
}

function vaciarInputs() {
    document.getElementById("code").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("precio").value = "";
}

getProducts();

function alertx(text) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text
    })
}