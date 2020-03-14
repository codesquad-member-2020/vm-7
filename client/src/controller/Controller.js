import Observer from '../utils/observe.js'

class Controller {
  constructor({
    model: { productModel, userModel },
    view: { productView, productSelectView, walletView }
  }) {
    this.productModel = productModel
    this.userModel = userModel
    this.productView = productView
    this.productSelectView = productSelectView
    this.walletView = walletView
  }

  initialize () {
    this.addObserveEvents();
    this.fetchProductData();
  }

  // 초기 랜더링
  fetchProductData() {
    this.productModel.fetchData()
    this.userModel.fetchData()
  }

  // 옵저버들을 등록해야할듯..
  addObserveEvents(){
    // this.model.addEvent("onGetMemberListComplete", this.printMemberList.bind(this));
  }

  printMemberList(data){
    // this.view.render(data);
    
  }
}

export default Controller