import{g as c}from"./utils-D5god50N.js";/* empty css              */function e(){const r=c("so-cart");if(Array.isArray(r)){const a=r.map(t=>s(t));document.querySelector(".product-list").innerHTML=a.join("")}else document.querySelector(".product-list").innerHTML="Empty Car."}function s(r){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${r.Image}"
      alt="${r.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${r.Name}</h2>
  </a>
  <p class="cart-card__color">${r.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${r.FinalPrice}</p>
</li>`}e();
