import {$} from '../utils/index.js'


class ProductSelectView {
  constructor({
    inputCashComponent, 
    selectNumberComponent,
    logComponent
  }) {
    this.inputCashComponent = inputCashComponent
    this.selectNumberComponent = selectNumberComponent
    this.logComponent = logComponent
    this.arrComponent = [this.inputCashComponent, this.selectNumberComponent, this.logComponent]
  }

  initRender() {
    $('.production-select-view').innerHTML = this.initTemplate()
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