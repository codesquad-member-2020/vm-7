const price = $$('.prod-price')
const selectPrice = $('.price')
// console.log(price)
  function a() {
    [...price]
      .filter(a => 
        a.innerText <= parseInt(selectPrice.innerText))
      .forEach(a => 
        a.parentNode.classList.add('prod-selected'))
  }

a()

const secondView = $('.production-view-container')