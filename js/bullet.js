class Bullets {
    constructor(ctx, finalBulletPosX, finalBulletPosY, playerWidth, playerHeight, speed, playerPosX, playerPosY) {
      this.ctx = ctx;
      this.bulletPos = {x: playerPosX + playerWidth / 2, y: playerPosY + playerHeight / 2}
      this.finalBulletPos = {x: finalBulletPosX, y: finalBulletPosY}
      this.initBulletPos = {x: this.bulletPos.x, y: this.bulletPos.y}
      this.speed = speed
      this.bulletSize = { w: 50, h: 50 }
      this.imageInstance = undefined
      this.init()
    }

    init() {
      this.imageInstance = new Image()
      this.imageInstance.src = "img/bullet.png"
    }

    drawBullets() {
      this.move()
      this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.h, this.bulletSize.h)
  }

 

  move() {
    this.bulletPos.x += (this.finalBulletPos.x - this.initBulletPos.x) * 0.05;
    this.bulletPos.y += (this.finalBulletPos.y - this.initBulletPos.y) * 0.05;
  }
}
