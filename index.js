let background
let target
let axe
let axeScale = false
let levels
let scale
let points


function preload() {
  background = loadImage('images/badaxe.png')
  levels = loadJSON('data/levels.json')
}

function setup() {
  new Canvas(180, 320, 'pixelated')

  target = new Sprite()
  target.diameter = levels[0].target.diameter
  target.x = levels[0].target.x
  target.y = height - 32 - target.hh - levels[0].target.distance

  scale = (100 - levels[0].target.distance) * 0.01
  target.scale = scale

  axe = new Sprite()
  axe.width = 16
  axe.height = 48
  axe.x = width
  axe.y = height

  axe.overlaps(target)
}

function draw() {
  clear()
  image(background, 0, 0)

  if (axeScale && axe.scale > scale) {
    axe.scale -= 0.01
  } else {
    axeScale = false
  }
}

function keyPressed() {
  if (keyCode == 32) {
    axe.moveTo(random(target.x - 10, target.x + 10), random(target.y - 10, target.y + 10), 3)
    axeScale = true
  }
}
