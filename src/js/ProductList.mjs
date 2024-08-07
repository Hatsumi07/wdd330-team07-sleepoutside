import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <span id=${product.FinalPrice < product.SuggestedRetailPrice ? "dsctTag" : "hide"}>
    ${product.FinalPrice < product.SuggestedRetailPrice ? "Dsct" : ""}
  </span>
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">${product.FinalPrice}</p></a>
</li>`;
} 

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    const list = await this.dataSource.getData();
    // filter the list to the four products we need
    const filteredList = this.filterProducts(list);
    // render the filtered list
    this.renderList(filteredList);
 }

 filterProducts(list) {
   // Array of IDs of the four products we want to display
   const productIdsToShow = ["880RR", "985RF", "985PR", "344YJ"];
   // Filter the list to include only those products with matching IDs
   return list.filter(product => productIdsToShow.includes(product.Id));
 }
  // render after doing the first stretch
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}