import{g as d,s as r,a as o}from"./utils-DOqvXAEG.js";import{P as i}from"./ProductData-Dx0C3TkS.js";function s(t){return`<section class="product-detail"> <h3>${t.Brand.Name}</h3>
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
      </div></section>`}class c{constructor(a,e){this.productId=a,this.product={},this.dataSource=e}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),document.getElementById("addToCart").addEventListener("click",this.addProductToCart.bind(this))}addProductToCart(){let a=d("so-cart")||[];const e={...this.product,uniqueId:Date.now().toString()};a.push(e),r("so-cart",a)}renderProductDetails(a){document.querySelector(a).insertAdjacentHTML("afterBegin",s(this.product))}}const n=new i("tents"),u=o("product"),l=new c(u,n);l.init();
