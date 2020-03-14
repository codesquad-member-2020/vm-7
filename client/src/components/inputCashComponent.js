import {$} from '../utils/index.js'

class InputNumberComponent {
  constructor() {
    // $('.production-select-view').innerHTML = this.render();
  }
  render(data = 0) {
    return `
      <div class="select-price">
        <div>
          투입 금액 : <span class="price">${data}</span><span>원</span>
      </div>
    </div>`
  }
}

export default InputNumberComponent