import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { setClickAll, getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const productList = document.querySelector(".product-list");
  const cartFooter = document.querySelector(".cart-footer");
  const cartTotalValue = document.getElementById('cart-total-value');

  if (Array.isArray(cartItems) && cartItems.length > 0) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    productList.innerHTML = htmlItems.join("");

    // Calcular el total
    const total = cartItems.reduce((sum, item) => sum + item.FinalPrice, 0);
    cartTotalValue.textContent = total.toFixed(2);
    cartFooter.classList.remove('hide');

    document.querySelectorAll(".remove-item").forEach(button => {
      button.addEventListener("click", removeItem);
    });
  } else {
    productList.innerHTML = "Empty Cart.";
    cartFooter.classList.add('hide');
  }
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
  <span class="remove-item" data-unique-id="${item.uniqueId}">X</span>
</li>`;

  return newItem;
}

function removeItem(event) {
  const uniqueId = event.target.dataset.uniqueId;
  let cartItems = getLocalStorage("so-cart");
  cartItems = cartItems.filter(item => item.uniqueId !== uniqueId);
  setLocalStorage("so-cart", cartItems);
  renderCartContents();
}

renderCartContents();
