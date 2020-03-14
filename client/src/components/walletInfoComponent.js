class TotalCashComponent {
  constructor(data) {
    
  }
  render(data) {
    const cashList = data.reduce((list, cash) => {
      list += 
        `<li>
          <button value="${cash.value}">${cash.value}원</button>
          <span>${cash.number}</span>개
        </li>`
        return list
    }, "")
    return `
    <ul>
      ${cashList}
    </ul>
    `
  }
}

export default TotalCashComponent