import Controller from './controller/Controller.js'
import UserModel from './models/UserModel.js'
import ProductModel from './models/ProductModel.js'
import ProductSelectView from './views/ProductSelectView.js'
import ProductView from './views/ProductView.js'
import WalletView from './views/WalletView.js'
import ProductComponent from './components/productComponent.js'
import InputCashComponent from './components/inputCashComponent.js'
import SelectNumberComponent from './components/selectNumberComponent.js'
import LogComponent from './components/logComponent.js'
import WalletInfoComponent from './components/walletInfoComponent.js'
import TotalCashComponent from './components/totalCashComponent.js'
import {$, PRODUCT_URL, USER_URL} from './utils/index.js'


// model
const productModel = new ProductModel({
  PRODUCT_URL
})
const userModel = new UserModel({
  USER_URL
})

//component
const selectNumberComponent = new SelectNumberComponent()
const walletInfoComponent = new WalletInfoComponent({
  userModel
})
const totalCashComponent = new TotalCashComponent({
  userModel
})
const inputCashComponent = new InputCashComponent({
  userModel
})

const productComponent =  new ProductComponent({
  userModel
})


// view
const productView = new ProductView({
  productComponent,
  productModel,
  productArea: $('.product-view')
})
const productSelectView = new ProductSelectView({
  inputCashComponent,
  selectNumberComponent,
  logComponent: new LogComponent(),
  userModel,
  productSelectArea: $('.production-select-view')
})
const walletView = new WalletView({
  walletInfoComponent,
  totalCashComponent,
  userModel,
  walletViewArea: $('.wallet-view')
})

// controller
const controller = new Controller({
  model : { productModel, userModel },
  view: { productView, productSelectView, walletView },
  component: {selectNumberComponent, walletInfoComponent}
})

document.addEventListener("DOMContentLoaded", () => {
    controller.initialize()
  }
)