const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    fetch('/', {
      method: 'delete',
      headers: {'content-type': 'application/json'},
      body: button.dataset.index
    })
    .then(location.reload())
  })
})

