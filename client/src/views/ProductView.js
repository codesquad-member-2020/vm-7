import {$} from '../utils/index.js'

class ProductView {
  constructor({productComponent}) {
    this.productComponent = productComponent
  }

  initRender(data) {
    $('.product-view').innerHTML = this.initTemplate(data);
  }

  initTemplate(data) {
    return this.productComponent.render(data)
  }
}

export default ProductView