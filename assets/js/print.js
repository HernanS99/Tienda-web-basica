let productos = []
let productosFiltrados = []
let producto = {}

function print(){
    let cards = document.getElementById("cards");
    cards.innerHTML = ''
    productosFiltrados.forEach(element=>{
        cards.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="./assets/img/${element.name}.jpeg" class="card-img-top" width="100px" height="250px" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.desc}</p>
                        <p class="fs-5">$${element.precio}</p>
                    </div>
                </div>
        `
    })
   

}

function getProducts() {//conseguir datos
    let listaweed = localStorage.getItem('weed')
    if(listaweed !==null){
        productos = JSON.parse(listaweed)
        productosFiltrados = JSON.parse(listaweed)
        print()
    }
    
}

function filtrar (fil){
    productosFiltrados = productos.filter(producto=>producto.name.includes(fil))
    print()
}

let seacher = document.getElementById('search')
seacher.addEventListener('input', (event)=>filtrar(event.target.value))


getProducts();
