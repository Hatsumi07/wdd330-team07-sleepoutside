import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { getParam } from "./utils.mjs";2

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductListing(productId, dataSource);
product.init();