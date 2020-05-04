obtenerLocalStorage();

const priceCart = localStorage.getItem("priceCart");
const produts = localStorage.getItem("cartProductsId");

let contProduct = 0;

async function obtenerLocalStorage() {
  const Products = await getProductsDb();

  const localstorageItems = localStorage.getItem("cartProductsId");
  const idProductsSplit = localstorageItems.split(",");
  const idProductsCart = Array.from(new Set(idProductsSplit));

  let html = "";
  idProductsCart.forEach((id) => {
    Products.forEach((product) => {
      if (id == product.id) {
        const quantity = coountDuplicatesID(id, idProductsSplit);
        const totalPrice = quantity * product.price;

        contProduct += 1;
        html += `
    
        <tr>
        
        
        <td><img src="${product.image}"  width=100/>
         <td>${product.name}</td><td>${quantity}</td><td>${product.price}</td><td>${totalPrice}.00MXN</td>
        
        </tr>
            `;
      }
    });
  });

  document.getElementById("output").innerHTML = priceCart + ".00$MXN";
  document.getElementsByClassName("products")[0].innerHTML = html;
}
function getProductsDb() {
  const url = "../dbProducts.json";

  return fetch(url)
    .then((response) => {
      //console.log(response); se utilizo para la prueba del fecth
      return response.json();
    })
    .then((result) => {
      //console.log(result);se comprueba si nos regresa nuestro json
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
}

function coountDuplicatesID(value, arrayIds) {
  let count = 0;
  arrayIds.forEach((id) => {
    if (value == id) {
      count++;
    }
  });
  return count;
}
