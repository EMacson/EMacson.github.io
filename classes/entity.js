GRAVITY = 0.5

class Entity {
    constructor({position, size, kinematic}) {
        this.position = position
        this.size = size

        this.kinematic = kinematic

        this.velocity = {
            x: 0,
            y: 0,
        }

        if(kinematic) {
            this.acceleration = {
                x: 0,
                y: GRAVITY,
            }

        }
        else {
            this.acceleration = {
                x: 0,
                y: 0,
            }
        }
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
    }

    updateKinematic() {
        this.draw()
        this.velocity.x += this.acceleration.x
        this.velocity.y += this.acceleration.y

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

    }

    update() {
        if(this.kinematic) this.updateKinematic()
    }
}