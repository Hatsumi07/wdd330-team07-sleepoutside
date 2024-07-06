import { g as o, s, a as d } from "./utils-D5god50N.js";
function c(t) {
  if (t.ok) return t.json();
  throw new Error("Bad Response");
}
class i {
  constructor(a) {
    (this.category = a), (this.path = `../json/${this.category}.json`);
  }
  getData() {
    return fetch(this.path)
      .then(c)
      .then((a) => a);
  }
  async findProductById(a) {
    return (await this.getData()).find((r) => r.Id === a);
  }
}
function n(t) {
  return `<section class="product-detail"> <h3>${t.Brand.Name}</h3>
      <h2 class="divider">${t.NameWithoutBrand}</h2>
      <img
        class="divider"
        src="${t.Image}"
        alt="${t.NameWithoutBrand}"
      />
      <p class="product-card__price">$${t.FinalPrice}</p>
      <p class="product__color">${t.Colors[0].ColorName}</p>
      <p class="product__description">
      ${t.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
      </div></section>`;
}
class u {
  constructor(a, e) {
    (this.productId = a), (this.product = {}), (this.dataSource = e);
  }
  async init() {
    (this.product = await this.dataSource.findProductById(this.productId)),
      this.renderProductDetails("main"),
      document
        .getElementById("addToCart")
        .addEventListener("click", this.addProductToCart.bind(this));
  }
  addProductToCart() {
    let a = o("so-cart") || [];
    a.push(this.product), s("so-cart", a);
  }
  renderProductDetails(a) {
    document.querySelector(a).insertAdjacentHTML("afterBegin", n(this.product));
  }
}
const l = new i("tents"),
  h = d("product"),
  p = new u(h, l);
p.init();
