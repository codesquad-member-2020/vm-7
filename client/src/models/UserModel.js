import Observer from "../utils/observe.js";

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

    const expenseTotal = this.computedTotalPrice(this.expense);
    this.fireEvent("changeExpenseData", expenseTotal);
    this.fireEvent("highlightProduct", expenseTotal);
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
    this.copyWalletData = JSON.parse(JSON.stringify(this.walletData));
    this.changeWalletData(this.copyWalletData);
    this.changeWalletData(this.walletData);
    this.initExpense();
    const expenseTotal = this.computedTotalPrice(this.expense);
    const totalPrice = this.computedTotalPrice(this.copyWalletData);
    this.fireObverserEvent(expenseTotal, this.copyWalletData, totalPrice);
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

  fireObverserEvent(expenseTotal, copyWalletData, totalPrice) {
    this.fireEvent("successLog", "투입된 금액이 반환되었습니다");
    this.fireEvent("highlightProduct", expenseTotal);
    this.fireEvent("changeExpenseData", expenseTotal);
    this.fireEvent("returnExpenseRender", copyWalletData);
    this.fireEvent("totalWalletData", totalPrice);
  }
}

export default UserModel;
