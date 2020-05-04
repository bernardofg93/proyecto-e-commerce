//guarda elementos del locdalstorage
const CART_PRODUCTOS = "cartProductsId";

//creamos funcion que dentro tendra otras funciones que se ejecutaran cuando el dom ya se alla renderizado
//con esta funcion "DOMContentLoaded" puedo revisar en consola lo que se esta ejecutando en el dom al momento de estar cargada la pag
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  loadProductCart();
});

//si con esta funcion me regresa un objeto , es porque el fetch esta ejecutado correctamente
function getProductsDb() {
  const url = "../dbEspeciales.json";

  return fetch(url)
    .then(response => {
      //console.log(response); se utilizo para la prueba del fecth
      return response.json();
    })
    .then(result => {
      //console.log(result);se comprueba si nos regresa nuestro json
      return result;
    })
    .catch(err => {
      console.log(err);
    });
}

async function loadProducts() {
  //console.log('funcion load products ejecutada');
  const products = await getProductsDb(); //esta vaiable contiene todo mi json
  //console.log(products);

  //aqui genero el templete para despues renderizar los productos

  let html = "";
  products.forEach(product => {
    //console.log(product);de esta forma vemos que nos trae cada iteracion
    html += `
        <div class="col-3 product-container">
            <div class="card product">
                <img
                    src="${product.image}"
                    class="card-img-top"
                    alt="${product.name}"
                />
                <div class="card-body">
                    <h7  class="card-title">${product.name}</h7>
                    <p class="card-text">${product.extraInfo}</p>
                    <p class="card-text">${product.price} .00 MXN$</p>
                    <button type="button" class="btn-cart" onClick=(addProductCart(${product.id}))>Añadir al carrito</button>
                </div>
            </div>
        </div>
      `;
  });

  document.getElementsByClassName("products")[0].innerHTML = html;
}

function openCloseCart() {
  // console.log('click...');
  const containerCart = document.getElementsByClassName("cart-products")[0]; //busca al div del carrito en el html
  //console.log(btnCart);
  //console.log(containerCartProducts.classList);veo las clases que contiene el elemento

  containerCart.classList.forEach(item => {
    if (item === "hidden") {
      containerCart.classList.remove("hidden");
      containerCart.classList.add("active");
    }

    if (item === "active") {
      containerCart.classList.remove("active");
      containerCart.classList.add("hidden");
    }
  });
}
//resivo como argumento el valor del id de mi json
function addProductCart(idProduct) {
  //console.log("agregando el producto con el id:"+idProduct);
  let arrayProductsId = [];

  let localstorageItems = localStorage.getItem(CART_PRODUCTOS);
  //condicion si local es diferente de null significa que no tenemos productos en el carrito
  if (localstorageItems === null) {
    //le paso a mi arreglo el id de cada producto
    arrayProductsId.push(idProduct);
    localStorage.setItem(CART_PRODUCTOS, arrayProductsId); //le paso mi arreglo de ids a cart_products
  } else {
    //console.log("ya hay contenido en el local estorage");//compruebo si hay contenido en el localstorage
    // console.log(localstorageItems);
    let productsId = localStorage.getItem(CART_PRODUCTOS);
    if (productsId.length > 0) {
      productsId += "," + idProduct; //se agrega contenido del local estorage a la variable
    } else {
      productsId = productsId;
    }
    localStorage.setItem(CART_PRODUCTOS, productsId);
  }

  loadProductCart(); //esta funcion es llamada cada que se agrega un articulo al carrito
}

//funciones para renderizar el carrito

async function loadProductCart() {
  console.log("cargando el producto");
  //treago todos los productos de mi json
  const products = await getProductsDb();

  //convierto el resultado del localstorage en un array
  const localstorageItems = localStorage.getItem(CART_PRODUCTOS); //almaceno en la variable los valores del localstorage
  //console.log(products);
  //console.log(localstorageItems);
  let html = "";
  if (!localstorageItems) {
    html = `
      <div class"cart-product empty">
      </div>
    `;
  } else {
    const idProductsSplit = localstorageItems.split(","); //el esplit es para dividir una cadena de texto y despues devolver un array
    //console.log(idProductsSplit);

    //elimino los ids duplicados
    const idProductsCart = Array.from(new Set(idProductsSplit)); //con esta funcion javascript elimina los ids duplicados
    //console.log(idProductsCart);

    idProductsCart.forEach(id => {
      products.forEach(product => {
        if (id == product.id) {
          const quantity = coountDuplicatesID(id, idProductsSplit);
          const totalPrice = product.price * quantity; //se calcula el precio
          html += `
         <tr><div class="cart-product"></tr>
         <td><img src="${product.image}"  width=100/>
         </td>
         
         <td><div class="cart-product-info"></td>
         <td><p class="productName">${product.name}</p></td>
          <td><p class="quantity">${quantity}</p></td>
          <td><p class="precioTotal">${totalPrice.toFixed(2)}$mxn</p></td>
          <P class="change-quantity">
          <td><button class="botonclick" onClick="decreaseQuantity(${
            product.id
          })">-</button></td>
          <td><button class="botonclick"onClick="increaseQuantity(${
            product.id
          })">+</button></td>
          <p class="cart-product-delete">
         <td><button class="botonDeleteCar"  onClick=(deleteProductCart(${
           product.id
         }))>x</button></td>
         </p>
          </P>
         </div>
         </div>
        `;
        }
      });
    });
  }
  document.getElementsByClassName("cart-products")[0].innerHTML = html;
}

//elimino el producto con su id
function deleteProductCart(idProduct) {
  //compruebo si el boton esta jalando el id del articulo para eliminarlo
  //console.log('eliminando el pd con el id: '+ idProduct);
  //obtengo los ids y los paso a un array
  const idProductsCart = localStorage.getItem(CART_PRODUCTOS);
  const arrayIdProductsCart = idProductsCart.split(",");
  const resultIDDelete = deleteAllIds(idProduct, arrayIdProductsCart);

  if (resultIDDelete) {
    let count = 0;
    let idsString = "";

    resultIDDelete.forEach(id => {
      count++;
      if (count < resultIDDelete.length) {
        idsString += id + ",";
      } else {
        idsString += id;
      }
    });
    localStorage.setItem(CART_PRODUCTOS, idsString);
  }
  const idsLocalStorage = localStorage.getItem(CART_PRODUCTOS);
  if (!idsLocalStorage) {
    localStorage.removeItem(CART_PRODUCTOS);
  }

  loadProductCart();
}
//funcion para la suma de los productos dentro del carrito
function increaseQuantity(idProduct) {
  const idProductsCart = localStorage.getItem(CART_PRODUCTOS);
  const arrayIdProductsCart = idProductsCart.split(",");
  arrayIdProductsCart.push(idProduct);

  let count = 0;
  let idsString = "";

  arrayIdProductsCart.forEach(id => {
    count++;
    if (count < arrayIdProductsCart.length) {
      idsString += id + ",";
    } else {
      idsString += id;
    }
  });
  localStorage.setItem(CART_PRODUCTOS, idsString);
  loadProductCart();
}
// funcion para decrementar los productos dentro del carrito
function decreaseQuantity(idProduct) {
  const idProductsCart = localStorage.getItem(CART_PRODUCTOS);
  const arrayIdProductsCart = idProductsCart.split(",");

  const deleteItem = idProduct.toString();
  let index = arrayIdProductsCart.indexOf(deleteItem);
  if (index > -1) {
    arrayIdProductsCart.splice(index, 1);
  }

  let count = 0;
  let idsString = "";
  arrayIdProductsCart.forEach(id => {
    count++;
    if (count < arrayIdProductsCart.length) {
      idsString += id + ",";
    } else {
      idsString += id;
    }
  });
  localStorage.setItem(CART_PRODUCTOS, idsString);
  loadProductCart();
}

//funcion para saber cuantos duplicados tengo
function coountDuplicatesID(value, arrayIds) {
  let count = 0;
  arrayIds.forEach(id => {
    if (value == id) {
      count++;
    }
  });
  return count;
}

//funcion para quitar elementos de un array
//retorna solo elementos que no son borrados
function deleteAllIds(id, arrayIds) {
  return arrayIds.filter(itemId => {
    return itemId != id;
  });
}
