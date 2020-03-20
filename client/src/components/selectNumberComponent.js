import { $ } from "../utils/index.js";

class SelectNumberComponent {
  constructor({ userModel, productModel }) {
    this.userModel = userModel;
    this.productModel = productModel;
  }
  render() {
    const buttonValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, "취소", 0, "확인"];
    const selectBtnRender = buttonValue
      .map(buttonType => {
        let targetValue;
        switch (buttonType) {
          case "확인":
            targetValue = "check";
            break;
          case "취소":
            targetValue = "cancel";
            break;
          default:
            targetValue = "number";
        }
        return `<button value='${targetValue}'>${buttonType}</button>`;
      }).join("");

    return `
      <div class="select-number">
         ${selectBtnRender}
      </div>`;
  }

  eventHandler() {
    $(".production-select-view").addEventListener("click", this.eventWalletbutton.bind(this));
  }

  eventWalletbutton(e) {
    const {target: { value, tagName }} = e;
    const inputPrice = $(".price").innerText;

    if (tagName !== "BUTTON") return;
    if (value === "cancel") {
      this.userModel.returnExpense(parseInt(inputPrice));
    } else if (value === "check") {
      this.productModel.clickedCheckEvent(parseInt(inputPrice));
    } else {
      const productTypeCount = $(".product-list").childElementCount;
      this.productModel.changeSelectLogInfo(e, productTypeCount);
    }
  }
}

export default SelectNumberComponent;
