var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

canvas.style.backgroundColor = "white"


var backround = new Image()
backround.src = "background-whone.png"



var billy = {
    x: 20,
    y: 220,
    w: 90,
    h: 90,
    speed: 30,
    sprite: "billy_idle-1right.png",

    render: function(){
        var img = new Image()
        img.src = billy.sprite
        ctx.drawImage(img, billy.x, billy.y)

    }
}




holdingD = false
holdingA = false

document.addEventListener('keydown', function(event) {
    console.log(event.key)

    if (event.key == 'd') {
        holdingD = true
    }
    if (event.key == "a") {
        holdingA = true
    }
})

document.addEventListener("keyup", function(event) {
    holdingD = false
    holdingA = false
})


function frameLoop() {
    // erase canvass
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    if (holdingD == true) {
        billy.x += billy.speed
        billy.sprite = "billy_idle-1right.png"
    }
    if (holdingA == true) {
        billy.x-= billy.speed
        billy.sprite = "billy_idle-1.png"
    }

    // uncomment these two lines if you want it to be a billy
    // ctx.fillStyle = billy.color
    // ctx.fillRect billy.x, billy.y, billy.w, billy.h)

    // comment out this line if you want turn off the scary smiley face
    // ctx.drawImage(billy.sprite, billy.x, billy.y)
    ctx.drawImage(backround, 100, 100)
    billy.render()
    requestAnimationFrame(frameLoop) // restart loop
}

frameLoop()











