import Observer from '../utils/observe.js'

class UserModel extends Observer {
  constructor({ USER_URL }) {
    super()
    this.WALLET_URL = USER_URL
    this.walletData = {}
    this.expense = {}
  }

  async fetchData() {
    const res = await fetch(this.WALLET_URL)
    const walletData = await res.json()
    this.walletData = walletData
    this.initExpense()
    this.fireEvent("initWalletViewRender", walletData);
    this.fireEvent("initSelectViewRender", walletData);
  }

  initExpense() {
    this.expense = this.walletData.map(data=> ({...data}));
    this.expense.forEach(init => init.number = 0);
  }

  computedTotalPrice(targetData) {
    const totalPrice = targetData
      .reduce((price, data) => 
        price += parseInt(data.value) * parseInt(data.number), 0);

    return totalPrice;
  }

  changeExpenseInfo({target: {value}}) {
    this.expense.filter(targetValue => 
        targetValue.value == value)
      .map(data => {
        data.number += 1;
    });
    const expenseTotal = this.computedTotalPrice(this.expense)
    this.fireEvent("changeExpenseData", expenseTotal)
  }

  changeWalletInfo({target: {value}}) {
    const targetData = this.walletData
      .filter(targetValue => 
        targetValue.value == value)
      .map(data => {
        if (data.number > 0 ) data.number -= 1;
      return data
    });
    this.fireEvent("changeWalletData", ...targetData);

    const totalPirce = this.computedTotalPrice(this.walletData);
    this.fireEvent("totalWalletData", totalPirce);
  }
}

export default UserModel