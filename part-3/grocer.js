document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.getElementsByClassName('content')[0].getElementsByTagName('button'))
    .forEach(el => {
    el.addEventListener('click', addToCart )
  })

  document.getElementById('cart-button').addEventListener('click', function () {
    document.getElementById('shade').style.display = 'inline';

  })
  document.getElementById('exit-modal').addEventListener('click', function () {
    document.getElementById('shade').style.display = 'none';
  })
})


function addToCart() {
  let cartNode = this.parentElement.cloneNode(true)
  cartNode.getElementsByTagName('button')[0].innerText = 'Remove'
  cartNode.getElementsByTagName('button')[0].addEventListener('click', removeFromCart)
  document.getElementById('cart').append(cartNode)

  let addition = this.previousElementSibling.innerText
  addition = Number(addition.slice(1))
  let cartTotal = document.getElementById('total').innerText
  cartTotal = addition + Number(cartTotal.slice(1))
  document.getElementById('total').innerText = `$${cartTotal.toFixed(2)}`

  let cartCount = document.getElementById('cart-item-count').innerText
  cartCount = Number(cartCount.slice(1,cartCount.length-1)) + 1
  document.getElementById('cart-item-count').innerText = `(${cartCount})`
}

function removeFromCart () {
  let subtraction = this.previousElementSibling.innerText
  subtraction = Number(subtraction.slice(1))
  let cartTotal = document.getElementById('total').innerText
  cartTotal = Number(cartTotal.slice(1)) - subtraction
  document.getElementById('total').innerText = `$${cartTotal.toFixed(2)}`

  let cartCount = document.getElementById('cart-item-count').innerText
  cartCount = Number(cartCount.slice(1,cartCount.length-1)) - 1
  document.getElementById('cart-item-count').innerText = `(${cartCount})`;

  this.parentElement.remove()
}

function clearCart () {
  Array.from(document.getElementById('cart').children).forEach(el => {
    el.getElementsByTagName('button')[0].dispatchEvent(new Event('click'))
  })
}
