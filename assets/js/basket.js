const listElement = document.getElementById("list");
const gridWhenNoCard = document.querySelector(".grid__when_noCard");

let basketItems;
if (localStorage.getItem("basketItems")) {
  basketItems = JSON.parse(localStorage.getItem("basketItems"));
} else {
  basketItems = [];
  localStorage.setItem("basketItems", JSON.stringify(basketItems));
}
function renderUI(list) {
  let innerHTML = "";
  console.log(list.length);
  if(list.length == 0){
    gridWhenNoCard.innerHTML=`
    <h2 style="text-align: center;">Add to car <a href="./home.html">click here.</a></h2>
    `
  }else{
    for (let i = 0; i < list.length; i++) {
        innerHTML += `
            <tr>
            <th scope="row">${i + 1}</th>
            <td><img width="50px" height="50px" src="${list[i].item.img}"/></td>
            <td>${list[i].item.mark}</td>
            <td>${list[i].totalPrice} AZN</td>
            <td><button class="btn btn-danger" onclick="deleteItemFromWishlist(${
              list[i].item.id
            })">delete</button></td>
            <td>${list[i].count}</td>
            <td><button class="btn btn-primary" onclick="plusFormWishlist(${
              list[i].item.id
            })" >add</button></td>
          </tr>
            `;
      }
  }
  listElement.innerHTML = innerHTML;
}
function addToBasket(id) {
  let basketItem = basketItems.find((x) => x.item.id == id);
  if (!basketItem) {
    Toastify({
      text: "Item baskete add olundu",
      className: "danger",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    let target = cars.find((car) => car.id == id);
    let newBasketItem = {
      item: target,
      count: 1,
      totalPrice: target.price - (target.price * target.discount) / 100,
    };
    basketItems.push(newBasketItem);
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    renderUI(basketItems);
  } else {
    Toastify({
      text: "Item baskete add olundu",
      className: "danger",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    basketItem.count++;
    basketItem.totalPrice =
      basketItem.count *
      (basketItem.item.price -
        (basketItem.item.price * basketItem.item.discount) / 100);
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    renderUI(basketItems);
  }
}
const deleteItemFromWishlist = (id) => {
  let target = basketItems.find((item) => item.item.id == id);
  if (target.count > 1) {
    target.count--;
    target.totalPrice = target.count * target.item.price;
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    renderUI(basketItems);
  } else {
    const indexOftarget = basketItems.indexOf(target);
    basketItems.splice(indexOftarget, 1);
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    renderUI(basketItems);
  }
};

function plusFormWishlist(id) {
  let target = basketItems.find((item) => item.item.id == id);
  target.count++;
  target.totalPrice = target.count * target.item.price;
  localStorage.setItem("basketItems", JSON.stringify(basketItems));
  renderUI(basketItems);
}
renderUI(basketItems);
