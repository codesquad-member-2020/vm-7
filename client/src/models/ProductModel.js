import Observer from "../utils/observe.js"

class ProductModel extends Observer {
  constructor({ PRODUCT_URL }) {
    super()
    this.PRODUCT_URL = PRODUCT_URL
  }

  async fetchData() {
    const res = await fetch(this.PRODUCT_URL)
    const productData = await res.json()
    this.fireEvent("initProductViewRender", productData)
  }
}

export default ProductModel