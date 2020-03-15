class ProductModel {
  constructor({productView,PRODUCT_URL}) {
    this.productView = productView
    this.PRODUCT_URL = PRODUCT_URL
  }

  async fetchData() {
    const res = await fetch(this.PRODUCT_URL)
    const productData = await res.json()
    this.productView.initRender(productData)
  }
}

export default ProductModel