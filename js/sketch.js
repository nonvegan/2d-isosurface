const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const divButton = document.getElementById('divButton')
const divRanges = document.getElementById('div')
const button = document.createElement('button')
const rangeLabel = document.createElement('label')
const range = document.createElement('input')
const switchSliderLabel = document.createElement('label')
const switchSlider = document.createElement('label')
const width = Math.round(window.screen.height / 2.25)
const height = Math.round(window.screen.height / 2.25)
const center = new Vector(width / 2, height / 2)
const balls = new Array
let newImageData = new ImageData(width, height)
let scale = 200
let nballs = 5

function setup() {
    range.setAttribute("type", "range")
    range.setAttribute("min", "1")
    rangeLabel.innerText = "Color radius"
    switchSlider.className = "switch"
    switchSliderLabel.innerText = "Bounds"
    switchSlider.innerHTML = "<input type=\"checkbox\"><span class =\"slider round\"></span>"
    button.innerHTML = "<span>Reset</span> Button"
    range.addEventListener('input', () => {
        scale = range.value * 4
    })
    button.addEventListener('click', () => {
        range.value = 50
        scale = range.value * 4
        for (let i = 0; i < balls.length; i++) {
            balls[i].pos.x = getRandomInt(0, width)
            balls[i].pos.y = getRandomInt(0, height)
            balls[i].vel.x = getRandomFloat(-4, 4)
            balls[i].vel.y = getRandomFloat(-4, 4)
        }
    })
    divRanges.appendChild(rangeLabel)
    divRanges.appendChild(range)
    divRanges.appendChild(switchSliderLabel)
    divRanges.appendChild(switchSlider)
    divButton.appendChild(button)
    canvas.width = width
    canvas.height = height
    ctx.lineWidth = 3
    for (let i = 0; i < nballs; i++) {
        let newBall = new Ball(getRandomInt(0, width), getRandomInt(0, height), 50, ctx, Color.BLACK)
        newBall.vel.x = getRandomFloat(-4, 4)
        newBall.vel.y = getRandomFloat(-4, 4)
        balls.push(newBall)
    }
}

function drawImage() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let i = (x + y * width) * 4
            let sum = 0
            for (const ball of balls) {
                sum += ball.radius / ball.pos.distanceNo(x, y) * scale
            }
            let c = hsvToRgb(sum, 80, 100)
            newImageData.data[i] = c.getRed()
            newImageData.data[i + 1] = c.getGreen()
            newImageData.data[i + 2] = c.getBlue()
            newImageData.data[i + 3] = 255
        }
    }
    ctx.putImageData(newImageData, 0, 0)
}

function draw() {
    if (balls.length > 0)
        drawImage()

    if (switchSlider.firstChild.checked)
        for (const ball of balls) {
            ball.draw()
        }
    update()
}

function update() {
    for (const ball of balls) {
        ball.update()
        if (ball.pos.x < 0 || ball.pos.x > width) {
            ball.vel.x *= -1
        }
        if (ball.pos.y < 0 || ball.pos.y > height) {
            ball.vel.y *= -1
        }
    }
}

function clear() {
    ctx.clearRect(0, 0, width, height)
}

setup()

setInterval(() => {
    clear()
    draw()
}, getMs(100));