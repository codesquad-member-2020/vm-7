class ProductComponent {
  constructor() {
    
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
}

export default ProductComponent