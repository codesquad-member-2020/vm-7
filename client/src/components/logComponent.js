class LogComponent {
  constructor() {
  }
  render(data= '') {
    return `
    <div class="select-production">
      <textarea name="" id="" cols="34" rows="9">${data}</textarea>
    </div>
    `
  }
}

export default LogComponent