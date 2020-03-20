import Observer from "../utils/observe.js";
import {$} from '../utils/index.js'

class UserModel extends Observer {
  constructor({ USER_URL }) {
    super();
    this.WALLET_URL = USER_URL;
    this.walletData = {};
    this.expense = {};
  }

  async fetchData() {
    const res = await fetch(this.WALLET_URL);
    const walletData = await res.json();
    this.walletData = walletData;
    this.initExpense();
    this.fireEvent("initWalletViewRender", walletData);
    this.fireEvent("initSelectViewRender", walletData);
  }

  initExpense() {
    this.expense = this.walletData.map(data => ({ ...data }));
    this.expense.forEach(init => (init.number = 0));
  }

  computedTotalPrice(targetData) {
    const totalPrice = targetData
      .reduce((price, data) => 
        (price += parseInt(data.value) * parseInt(data.number)),0);

    return totalPrice;
  }

  changeExpenseInfo({ target: { value } }) {
    this.expense
      .filter(targetValue => targetValue.value == value)
      .map(expenseWallet => {
        expenseWallet.number += 1;
      });

      this.expenseTotal = this.computedTotalPrice(this.expense);
      this.fireEvent("changeExpenseData", this.expenseTotal);
      this.fireEvent("highlightProduct", this.expenseTotal);
  }

  afterBuyPrice(expenseTotal) {
    let expense = expenseTotal;
    this.initExpense()
    this.expense.reverse().forEach(target => {
      let data = parseInt(expense / target.value);
      if(data > 0) {
        target.number = data
        expense = expense % target.value
      }
    })
  }

  changeWalletInfo({ target: { value } }) {
    const targetData = this.walletData
      .filter(targetValue => targetValue.value == value)
      .map(wallet => {
        if (wallet.number > 0) wallet.number -= 1;

        return wallet;
      });
    this.fireEvent("changeWalletData", ...targetData);
    const totalPirce = this.computedTotalPrice(this.walletData);
    
    this.fireEvent("totalWalletData", totalPirce);
  }

  returnExpense(inputPrice) {
    if (inputPrice === 0) {
      return this.fireEvent("errorLog", "반환 될 금액이 없습니다.");
    }

    let hasWalletPrice = $('.wallet-sum').innerText
    hasWalletPrice = hasWalletPrice.substr(0, hasWalletPrice.length -1)
    this.copyWalletData = JSON.parse(JSON.stringify(this.walletData));
    this.changeWalletData(this.walletData);
    this.initExpense();
    this.expenseTotal = this.computedTotalPrice(this.expense);
    const totalPrice = this.computedTotalPrice(this.walletData);
    this.fireObverserEvent(this.expenseTotal, this.walletData, totalPrice);
  }

  changeWalletData(targetData) {
    const filteredExpense = this.expense.filter(data => data.number > 0);
    targetData
      .filter(productIndex =>
        filteredExpense.some(userIndex => 
          userIndex.index == productIndex.index))
      .forEach((productNumber, index) =>
          (productNumber.number += filteredExpense[index].number));
  }

  fireObverserEvent(expenseTotal, walletData, totalPrice) {
    this.fireEvent("successLog", "투입된 금액이 반환되었습니다");
    this.fireEvent("highlightProduct", expenseTotal);
    this.fireEvent("changeExpenseData", expenseTotal);
    this.fireEvent("returnExpenseRender", walletData);
    this.fireEvent("totalWalletData", totalPrice);
  }
}

export default UserModel;
