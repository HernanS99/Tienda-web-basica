let productos = []

function print(){
    let cards = document.getElementById("cards");
    productos.forEach(element=>{
        cards.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="./assets/img/Macro_cannabis_bud.jpeg" class="card-img-top" alt="...">
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
    productos = !listaweed ? [] : JSON.parse(listaweed);
    print()
    return productos;
}

getProducts();
