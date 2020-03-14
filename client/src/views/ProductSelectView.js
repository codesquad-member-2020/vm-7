import {$} from '../utils/index.js'


class ProductSelectView {
  constructor({
    inputCashComponent, 
    selectNumberComponent,
    logComponent,
    productSelectArea
  }) {
    this.inputCashComponent = inputCashComponent
    this.selectNumberComponent = selectNumberComponent
    this.logComponent = logComponent
    this.arrComponent = [this.inputCashComponent, this.selectNumberComponent, this.logComponent],
    this.productSelectArea = productSelectArea
  }

  initRender() {
    this.productSelectArea.innerHTML = this.initTemplate()
  }
  
  initTemplate() {
    const selectList = this.arrComponent.reduce((list, item) => {
      list+= item.render()
      return list
    },"")
    // console.log(selectList)
    return selectList
  }
  
}

export default ProductSelectView;