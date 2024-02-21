const windows = document.querySelectorAll('.window')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const mainText = document.querySelector('.main_text h1')

let currentWindowIndex = 0

const screenTexts = {
    0: "Beautiful Slide Change",
    1: "Slides of Cards",
    2: "Mini Game",
    3: "Aim Trainig Game",
    4: "Calendar (Drag & Drop)"
}

function updateMainText() {
    mainText.textContent = screenTexts[currentWindowIndex]
}

updateMainText()


nextBtn.addEventListener('click', (event) => {
    event.preventDefault()

    windows[currentWindowIndex].classList.add('hidden')
    windows[currentWindowIndex].classList.add('right')

    currentWindowIndex = (currentWindowIndex + 1) % windows.length

    windows[currentWindowIndex].classList.remove('hidden')

    updateMainText()
})


prevBtn.addEventListener('click', (event) => {
    event.preventDefault()

    windows[currentWindowIndex].classList.add('hidden')
    windows[currentWindowIndex].classList.add('right')

    currentWindowIndex = (currentWindowIndex - 1 + windows.length) % windows.length

    windows[currentWindowIndex].classList.remove('hidden')

    updateMainText()
})