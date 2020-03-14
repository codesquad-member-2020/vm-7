class ProductModel {
  constructor({productView}) {
    this.productView = productView
    this.PRODUCT_URL = 'http://localhost:3000/product' 
  }

  async fetchData() {
    const res = await fetch(this.PRODUCT_URL)
    const productData = await res.json()
    this.productView.initRender(productData)
  }
}

export default ProductModel