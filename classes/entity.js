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
        /*
        this.acceleration = {
            x: 0,
            y: 0,
        }*/

        
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
        this.velocity.x += this.acceleration.x
        this.velocity.y += this.acceleration.y

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        for(var i = 0, length = entities.length; i < length; i++) {
            entity = entities[i]
            if(entity == this) continue

            if(collisionDetector.collideRect(this, entity)) collisionDetector.resolveCollision(this, entity)

        }
    }

    update() {
        this.draw()
        if(this.kinematic) this.updateKinematic()
    }

    getLeft() { return this.position.x }
    getTop() { return this.position.y }
    getRight() { return this.position.x + this.size.width }
    getBottom() { return this.position.y + this.size.height }
    getMidX() { return this.position.x + (this.size.width / 2) }
    getMidY() { return this.position.y + (this.size.height / 2) }
}