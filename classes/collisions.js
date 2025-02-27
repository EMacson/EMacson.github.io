

class CollisionDetector {
    collideRect(collider, collidee) {
        // Store the collider and collidee edges
        var l1 = collider.getLeft();
        var t1 = collider.getTop();
        var r1 = collider.getRight();
        var b1 = collider.getBottom();
        
        var l2 = collidee.getLeft();
        var t2 = collidee.getTop();
        var r2 = collidee.getRight();
        var b2 = collidee.getBottom();
        
        // If the any of the edges are beyond any of the
        // others, then we know that the box cannot be
        // colliding
        if (b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2) {
            return false;
        }
        
        // If the algorithm made it here, it had to collide
        return true;
    }

    resolveCollision(player, entity) {
        var pMidX = player.getMidX()
        var pMidY = player.getMidY()
        var eMidX = entity.getMidX()
        var eMidY = entity.getMidY()

        var dx = (eMidX - pMidX) / (entity.size.width / 2)
        var dy = (eMidY - pMidY) / (entity.size.height / 2)

        var absDX = Math.abs(dx)
        var absDY = Math.abs(dy)

        if(Math.abs(absDX - absDY) < 0.1) {

        }
        else if(absDX > absDY) {

        }
        else {
            console.log("resolve top/bottom collision")
            if(dy < 0) {
                player.position.y = entity.getBottom()
                //player.velocity.y = 0
                //player.acceleration = GRAVITY
            }
            else {
                player.position.y = entity.getTop() - player.size.height
                //player.position.y = 0
                //player.velocity.y = 0
                //player.acceleration = 0
            }

            
            player.velocity.y = -player.velocity.y * 0.02
            if (Math.abs(player.velocity.y) < 0.0004) {
                player.velocity.y = 0;
            }
            
        }
    }
}