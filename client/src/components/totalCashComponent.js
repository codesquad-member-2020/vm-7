class TotalCashComponent {
  constructor(data) {
    
  }
  render(data = 23550) {
    return `
      <div class="wallet-sum">
        <b>${data}</b>원
      </div>
    `
  }
}

export default TotalCashComponent