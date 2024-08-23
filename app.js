const scriptURL = 'https://script.google.com/macros/s/AKfycbxu3kDSlIipeQvvNuU867q-0tSGRnFczNjXse0j99IV31yuduPZiG6rRGB8-90U6-cu4Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout(() => {
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})