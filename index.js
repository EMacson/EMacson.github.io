const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const player = new Entity({
    position: {
        x: 100,
        y: 100,
    },
    size: {
        width: 100,
        height: 100,
    },
    kinematic: true
})

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
}

animate()