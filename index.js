const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

var entities = []

const collisionDetector = new CollisionDetector

const player = new Entity({
    position: {
        x: 100,
        y: 150,
    },
    size: {
        width: 100,
        height: 100,
    },
    kinematic: true
})

entities.push(player)

const player1 = new Entity({
    position: {
        x: 100,
        y: 0,
    },
    size: {
        width: 100,
        height: 100,
    },
    kinematic: true
})

entities.push(player1)

const floor = new Entity({
    position: {
        x: 0,
        y: canvas.height - 50
    },
    size: {
        width: canvas.width,
        height: 50
    },
    kinematic: false
})

entities.push(floor)

const keys = {
    d: {
        pressed: false
    },
    a: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.velocity.x = 0
    if(keys.d.pressed) player.velocity.x = 5
    else if(keys.a.pressed) player.velocity.x = -5

    for(var i = 0, length = entities.length; i < length; i++) {
        entity = entities[i]
        entity.update()
    }
}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd': 
            keys.d.pressed = true
            break
        case 'a': 
            keys.a.pressed = true
            break
        case 'w': 
            player.velocity.y = -20
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd': 
            keys.d.pressed = false
            break
        case 'a': 
            keys.a.pressed = false
            break
    }
})