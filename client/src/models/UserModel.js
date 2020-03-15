class ProductModel {
  constructor({productSelectView, walletView, USER_URL}) {
    this.productSelectView = productSelectView,
    this.walletView = walletView
    this.WALLET_URL = USER_URL
    this.walletData = {}
  }

  async fetchData() {
    this.productSelectView.initRender()
    const res = await fetch(this.WALLET_URL)
    const walletData = await res.json()
    this.walletData = walletData
    this.walletView.initRender(walletData)
  }
}

export default ProductModel