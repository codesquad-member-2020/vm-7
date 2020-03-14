import {$} from '../utils/index.js'

class SelectNumberComponent {
  constructor() {
    
  }
  render() {
    return `
      <div class="select-number">
        <ul>
          <li><button value="number">1</button></li>
          <li><button value="number">2</button></li>
          <li><button value="number">3</button></li>
          <li><button value="number">4</button></li>
          <li><button value="number">5</button></li>
          <li><button value="number">6</button></li>
          <li><button value="number">7</button></li>
          <li><button value="number">8</button></li>
          <li><button value="number">9</button></li>
          <li><button value="cancel">취소</button></li>
          <li><button value="number">0</button></li>
          <li><button value="check">확인</button></li>
        </ul>
      </div>`
  }
}

export default SelectNumberComponent