import { $$ } from '../utils/index.js'

class ProductComponent {
  constructor({ userModel }) {
    this.userModel = userModel
    this.registerObserver()
  }
  render(data) {
    const productList = data.reduce((list, product) => {
      list += 
        `<li>
          <span class="prod-index">${product.index}</span>
          <span class="prod-name">${product.name}</span>
          <span class="prod-price">${product.price}</span>
        </li>`
        return list
    }, "")
    return `
      <ul class="product-list">
        ${productList}
      </ul>`
  }

  registerObserver() {
    this.userModel.addEvent("highlightProduct", this.highlightProductRedner.bind(this));
  }
  
  highlightProductRedner(inputData) {
    const productPriceList = $$('.prod-price');
    
    [...productPriceList]
      .filter(price => 
        price.innerText <= parseInt(inputData))
      .forEach(productList => 
        productList.parentNode.classList.add('prod-selected'))
  }
}

export default ProductComponent