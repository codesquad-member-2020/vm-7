import {$} from '../utils/index.js'

class WalletView {
  constructor({
    walletInfoComponent, 
    totalCashComponent,
    walletViewArea
  }) {
    this.walletInfoComponent = walletInfoComponent,
    this.totalCashComponent = totalCashComponent
    this.walletViewArea = walletViewArea
    this.initialize()
  }

  initialize() {
    this.eventHandler()
  }

  initRender(walletData) {
    this.walletViewArea.innerHTML = this.initTemplate(walletData)
    
  }

  initTemplate(walletData) {
    return `
      ${this.walletInfoComponent.render(walletData)}
      ${this.totalCashComponent.render()}`
  }

  eventHandler() {
    this.walletViewArea.addEventListener("click", e => console.log(e))
  }

}

export default WalletView