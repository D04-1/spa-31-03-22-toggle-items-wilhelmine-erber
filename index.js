
const button = document.querySelector('button')
const ulElement = document.querySelector('ul')

// button toggle to hide or show the list (ul)
button.addEventListener('click', () => {
    ulElement.classList.toggle('d-none')
    button.textContent = ulElement.classList.contains('d-none') ? 'Show destinations' : 'Hide destinations'
})

// Let the user select the favourite destination
const liElement = document.querySelectorAll('li')

liElement.forEach( destinaions =>{

    destinaions.addEventListener('click', (event) => {
        // change color of clicked element
        const selected = document.querySelector('.active')
        selected.classList.remove('active')
        event.target.classList.add('active')

        // add text fyi
        let text = document.querySelector('.text')
        text.classList.add('alert', 'alert-success', 'mt-4', 'message')
        text.textContent = `You click ${event.target.textContent}`
    })
})


