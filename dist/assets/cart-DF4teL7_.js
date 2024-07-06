import{g as o,s as d}from"./utils-DOqvXAEG.js";function s(){const t=o("so-cart"),a=document.querySelector(".product-list"),e=document.querySelector(".cart-footer"),c=document.getElementById("cart-total-value");if(Array.isArray(t)&&t.length>0){const n=t.map(r=>u(r));a.innerHTML=n.join("");const l=t.reduce((r,i)=>r+i.FinalPrice,0);c.textContent=l.toFixed(2),e.classList.remove("hide"),document.querySelectorAll(".remove-item").forEach(r=>{r.addEventListener("click",m)})}else a.innerHTML="Empty Cart.",e.classList.add("hide")}function u(t){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
  <span class="remove-item" data-unique-id="${t.uniqueId}">X</span>
</li>`}function m(t){const a=t.target.dataset.uniqueId;let e=o("so-cart");e=e.filter(c=>c.uniqueId!==a),d("so-cart",e),s()}s();
