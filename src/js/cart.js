import { addEventListener, getLocalStorage, setClick, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (Array.isArray(cartItems)) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    const productList = document.querySelector(".product-list");
    productList.innerHTML = htmlItems.join("");

    const childNodes = productList.childNodes;

    childNodes.forEach((child) => {
      setClick("#removeFromCart", removeCartItem);
    })
    //adds eventListeners to the elements that match the first argument
    // addEventListener("#removeFromCart", removeCartItem);

  } else {
    document.querySelector(".product-list").innerHTML = "Empty Car.";
  }
}

function removeCartItem(event) {
  const cartItems = getLocalStorage("so-cart");
  const updatedCartItems = cartItems.filter(function(item) {
    return item.Id != event.target.dataset.id;
  });
  setLocalStorage("so-cart", updatedCartItems);
  renderCartContents();
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <span id="removeFromCart" data-id="${item.Id}">X</span>
</li>`;

  return newItem;
}

renderCartContents();
