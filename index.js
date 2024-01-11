let background
let target
let axe
let axeScale = false
let levels

function preload() {
  background = loadImage('images/badaxe.png')
  levels = loadJSON('data/levels.json')
}

function setup() {
  new Canvas(180, 320, 'pixelated x2')

  target = new Sprite()
  target.diameter = 50
  // target.debug = true

  axe = new Sprite()
  axe.width = 16
  axe.height = 48
  axe.x = width
  axe.y = height
  // axe.debug = true

  axe.overlaps(target)
}

function draw() {
  clear()
  image(background, 0, 0)

  if (axeScale && axe.scale > 0.5) {
    axe.scale -= 0.01
  } else {
    axeScale = false
  }

  if (axe.isMoving) {
    console.log(dist(axe.x, axe.y, target.x, target.y))
  }

}

function keyPressed() {
  if (keyCode == 32) {
    axe.moveTo(random(width / 2 - 10, width / 2 + 10), random(height / 2 - 10, height / 2 + 10), 3)
    axeScale = true
  }
}
