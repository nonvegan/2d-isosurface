class Obj {
    constructor(x, y, ctx, c) {
        this.pos = new Vector(x, y)
        this.vel = new Vector(0, 0)
        this.acc = new Vector(0, 0)
        this.ctx = ctx
        this.color = c
    }
    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
    }
}


class Ball extends Obj {
    constructor(x, y, r, ctx, c) {
        super(x, y, ctx, c)
        this.radius = r
    }
    draw() {
        this.ctx.strokeStyle = this.color.hex()
        this.ctx.beginPath()
        this.ctx.ellipse(this.pos.x, this.pos.y, this.radius, this.radius, 0, 0, 2 * Math.PI)
        this.ctx.stroke()
    }
}

class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add(vector) {
        this.x += vector.x
        this.y += vector.y
    }
    sub(vector) {
        this.x -= vector.x
        this.y -= vector.y
    }
    invert() {
        this.x *= -1
        this.y *= -1
    }
    mult(val) {
        this.x *= val
        this.y *= val
    }
    distanceNo(x, y) {
        return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2))
    }
    distance(vector) {
        return Math.sqrt(Math.pow(vector.x - this.x, 2) + Math.pow(vector.y - this.y, 2))
    }

    addPolar(angle, d) {
        this.x += Math.cos(angle) * d
        this.y += Math.sin(angle) * d
        return this
    }
    clone() {
        return new Vector(this.x, this.y)
    }
}

class Color {
    constructor(r, g, b) {
        this.r = r
        this.g = g
        this.b = b
    }
    hex() {
        return rgbToHex(this.r, this.g, this.b)
    }
    getRed() {
        return this.r
    }
    getGreen() {
        return this.g
    }
    getBlue() {
        return this.b
    }
    static get RED() {
        return new Color(255, 0, 0)
    }
    static get GREEN() {
        return new Color(0, 255, 0)
    }
    static get BLUE() {
        return new Color(0, 0, 255)
    }
    static get PINK() {
        return new Color(249, 38, 114)
    }
    static get WHITE() {
        return new Color(255, 255, 255)
    }
    static get BLACK() {
        return new Color(0, 0, 0)
    }
    static get RANDOM() {
        return new Color(getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 256))
    }
}