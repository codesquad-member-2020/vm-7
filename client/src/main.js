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

// view
const productView = new ProductView({
  productComponent: new ProductComponent(),
  productArea: $('.product-view')
})
const productSelectView = new ProductSelectView({
  inputCashComponent: new InputCashComponent(),
  selectNumberComponent: new SelectNumberComponent(),
  logComponent: new LogComponent(),
  productSelectArea: $('.production-select-view')
})
const walletView = new WalletView({
  walletInfoComponent: new WalletInfoComponent(),
  totalCashComponent: new TotalCashComponent(),
  walletViewArea: $('.wallet-view')
})

// model
const productModel = new ProductModel({
  productView,
  PRODUCT_URL
})
const userModel = new UserModel({
  productSelectView,
  walletView,
  USER_URL
})

// controller
const controller = new Controller({
  model : { productModel, userModel },
  view: { productView, productSelectView, walletView }
})

document.addEventListener("DOMContentLoaded", () => {
    controller.initialize()
  }
)