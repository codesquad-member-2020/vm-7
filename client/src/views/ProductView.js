import {$} from '../utils/index.js'

class ProductView {
  constructor({productComponent, productArea}) {
    this.productComponent = productComponent
    this.productArea = productArea
  }

  initRender(data) {
    this.productArea.innerHTML = this.initTemplate(data);
  }

  initTemplate(data) {
    return this.productComponent.render(data)
  }
}

export default ProductView