import{r as a}from"./utils-DOqvXAEG.js";import{P as i}from"./ProductData-Dx0C3TkS.js";function c(t){return`<li class="product-card">
  <a href="product_pages/index.html?product=${t.Id}">
  <img
    src="${t.Image}"
    alt="Image of ${t.Name}"
  />
  <h3 class="card__brand">${t.Brand.Name}</h3>
  <h2 class="card__name">${t.Name}</h2>
  <p class="product-card__price">${t.FinalPrice}</p></a>
</li>`}class n{constructor(e,s,r){this.category=e,this.dataSource=s,this.listElement=r}async init(){const e=await this.dataSource.getData(),s=this.filterProducts(e);this.renderList(s)}filterProducts(e){const s=["880RR","985RF","985PR","344YJ"];return e.filter(r=>s.includes(r.Id))}renderList(e){a(c,this.listElement,e)}}const o=new i("tents"),d=document.querySelector(".product-list"),l=new n("tents",o,d);l.init();
