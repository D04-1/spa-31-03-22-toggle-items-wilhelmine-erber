
const button = document.querySelector('button')
const ulElement = document.querySelector('ul')

// Create a list of your favourite destinations with a button to toggle the list
const callbackToggleList = (event) => {
    ulElement.classList.toggle('d-none')
    button.textContent = ulElement.classList.contains('d-none') ? 'Show destinations' : 'Hide destinations'
}

button.addEventListener('click', callbackToggleList)

// Let the user select the favourite destination

const liElement = document.querySelectorAll('li')

callbackSelect = (event) => {
    // console.log(event.target)
    // console.dir(event.target)
    // change color of clicked element
    const selected = document.querySelector('.active')
    selected.classList.remove('active')
    event.target.classList.add('active')

    let text = document.querySelector('.text')
    text.classList.add('alert', 'alert-success', 'mt-4', 'message')
    text.textContent = `You click ${event.target.textContent}`
}

liElement.forEach( destinaions =>{
    destinaions.addEventListener('click', callbackSelect)
})


