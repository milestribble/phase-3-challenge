document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.getElementsByClassName('content')[0].getElementsByTagName('button'))
    .forEach(el => {
    el.addEventListener('click', function () {
      let cartNode = this.parentElement.cloneNode(true)
      cartNode.getElementsByTagName('button')[0].innerText = 'Remove'
      cartNode.getElementsByTagName('button')[0].addEventListener('click', function () {
        this.parentElement.remove()
        let cartCount = Number(document.getElementById('cart-item-count').innerText[1]) - 1
        document.getElementById('cart-item-count').innerText = `(${cartCount})`
      })
      document.getElementById('cart').append(cartNode)
      let cartCount = Number(document.getElementById('cart-item-count').innerText[1]) + 1
      document.getElementById('cart-item-count').innerText = `(${cartCount})`
    })
  })
  document.getElementById('cart-button').addEventListener('click', function () {
    document.getElementById('shade').style.display = 'inline';

  })
  document.getElementById('exit-modal').addEventListener('click', function () {
    document.getElementById('shade').style.display = 'none';
  })
})
