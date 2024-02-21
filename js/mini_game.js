const screens = document.querySelectorAll('.screen')
const colHeaders = document.querySelectorAll('.col-header')
const container_board = document.querySelector('.container_board')
const board_mini = document.querySelector('#board_mini')
const startBtn = document.querySelector('#start_game')

let squaresNumber = 400
const colorS = ['#DC143C', '#00FF00', '#FF1493', '#00FFFF', 'orange', 'yellow', '#FF00FF', 'blue']

startBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    screens[0].classList.add('up')
    document.querySelector('.row_btn').classList.add('visible')
    startBtn.style.display = 'none'
})

colHeaders.forEach(colHeader => {
    colHeader.addEventListener('click', () => {
        const dataSizeValue = colHeader.dataset.size
        const [width, height] = dataSizeValue.split('x').map(Number)
        squaresNumber = height
        sizeBoard(width)
        board_mini.innerHTML = ''

        for (let i = 0; i < squaresNumber; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.addEventListener('mouseover', () => setColor(square))
            square.addEventListener('mouseleave', removeColor)
            square.addEventListener('touchstart', () => setColor(square));
            square.addEventListener('touchend', () => removeColor(square));
            board_mini.append(square)
        }
    })
})

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#38424d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colorS[Math.floor(Math.random() * colorS.length)]
}

function sizeBoard(sizeNumber) {
    switch (sizeNumber) {
        case 100:
            container_board.style.maxWidth = '200px'
            break
        case 225:
            container_board.style.maxWidth = '300px'
            break
        case 400:
            container_board.style.maxWidth = '400px'
            break
        case 625:
            container_board.style.maxWidth = '500px'
            break
        default:
            break
    }
}