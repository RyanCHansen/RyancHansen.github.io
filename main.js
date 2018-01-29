var AM = new AssetManager();
//var BackgroundX = 0;
//var Background1X = 0;


function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);

    ctx.drawImage(this.spriteSheet,
        xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
        this.frameWidth, this.frameHeight,
        x, y,
        this.frameWidth * this.scale,
        this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}





// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet, this.x, this.y);
    BackgroundX = this.x;
};

Background.prototype.update = function () {
   
    this.x += this.game.clockTick * this.speed;
        
    if (this.x < -2083) this.x = Background1X + 2075;
    
};

// // no inheritance
// function Background1(game, spritesheet) {
//     this.x = 2078;
//     this.y = 0;
//     this.speed = -300;
//     this.spritesheet = spritesheet;
//     this.game = game;
//     this.ctx = game.ctx;
// };

// Background1.prototype.draw = function () {
//     this.ctx.drawImage(this.spritesheet, this.x, this.y);
//     Background1X = this.x;
// };

// Background1.prototype.update = function () {
    
//      this.x += this.game.clockTick * this.speed;
    
//     if (this.x < -2083) this.x = BackgroundX + 2075;
// };





function Giphy(game, spritesheet) {
    this.animation = new Animation(spritesheet, 199, 271, 4, 0.10, 13, true, 1);
    this.x = 0;
    this.y = 500;
    this.speed = 50;
    this.game = game;
    this.ctx = game.ctx;
}

Giphy.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

Giphy.prototype.update = function () {
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
}









function Boom(game, spritesheet) {
    this.animation = new Animation(spritesheet, 127, 255, 4, 0.10, 8, true, 1);
    this.x = 0;
    this.y = 250;
    this.speed = 150;
    this.game = game;
    this.ctx = game.ctx;
}

Boom.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

Boom.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
}





function Fireman(game, spritesheet) {
    this.animation = new Animation(spritesheet, 214, 207, 3, 0.10, 8, true, 1);
    this.x = 180;
    this.y = 30;
    this.speed = 75;
    this.game = game;
    this.ctx = game.ctx;
}

Fireman.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

Fireman.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
}






function Neonman(game, spritesheet) {
    this.animation = new Animation(spritesheet, 214, 207, 3, 0.10, 8, true, 1);
    this.x = -30;
    this.y = 30;
    this.speed = 75;
    this.game = game;
    this.ctx = game.ctx;
}

Neonman.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

Neonman.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
}







// inheritance 
function Goku2(game, spritesheet) {
    this.animation = new Animation(spritesheet, 250, 223, 2, 0.10, 6, true, 1);
    this.speed = 75;
    this.ctx = game.ctx;
    Entity.call(this, game, 650, 30);
}

Goku2.prototype = new Entity();
Goku2.prototype.constructor = Goku2;

Goku2.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

Goku2.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}





// inheritance 
function FireSprite(game, spritesheet) {
    this.animation = new Animation(spritesheet, 214, 207, 2, 0.10, 6, true, 1);
    this.speed = 75;
    this.ctx = game.ctx;
    Entity.call(this, game, 400, 30);
}

FireSprite.prototype = new Entity();
FireSprite.prototype.constructor = FireSprite;

FireSprite.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

FireSprite.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}



// inheritance 
function Laser(game, spritesheet) {
    this.animation = new Animation(spritesheet, 219, 50, 1, 0.10, 4, true, .25);
    this.speed = 400;
    this.ctx = game.ctx;
    Entity.call(this, game, 100, 300);
}

Laser.prototype = new Entity();
Laser.prototype.constructor = Laser;

Laser.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

Laser.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}







// inheritance 
function Acid(game, spritesheet) {
    this.animation = new Animation(spritesheet, 140, 50, 1, 0.10, 8, true, 1.2);
    this.speed = 400;
    this.ctx = game.ctx;
    Entity.call(this, game, 100, 350);
}

Acid.prototype = new Entity();
Acid.prototype.constructor = Acid;

Acid.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

Acid.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}




AM.queueDownload("./images/newtrees.jpg");
//AM.queueDownload("./images/newtrees1.jpg");
AM.queueDownload("./images/giphy.png");
AM.queueDownload("./images/boomer.png");
AM.queueDownload("./images/goku.png");
AM.queueDownload("./images/gokuolder.png");
AM.queueDownload("./images/giphygoku.png");
AM.queueDownload("./images/fireman1.png");
AM.queueDownload("./images/retrynm.png");
AM.queueDownload("./images/firesprite.png");
AM.queueDownload("./images/greenlaser.png");
AM.queueDownload("./images/greenacid.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./images/newtrees.jpg")));
    //gameEngine.addEntity(new Background1(gameEngine, AM.getAsset("./images/newtrees1.jpg")));
    gameEngine.addEntity(new Giphy(gameEngine, AM.getAsset("./images/giphy.png")));
    gameEngine.addEntity(new Boom(gameEngine, AM.getAsset("./images/boomer.png")));
    gameEngine.addEntity(new Goku2(gameEngine, AM.getAsset("./images/giphygoku.png")));
    gameEngine.addEntity(new Fireman(gameEngine, AM.getAsset("./images/fireman1.png")));
    gameEngine.addEntity(new Neonman(gameEngine, AM.getAsset("./images/retrynm.png")));
    gameEngine.addEntity(new FireSprite(gameEngine, AM.getAsset("./images/firesprite.png")));
    gameEngine.addEntity(new Laser(gameEngine, AM.getAsset("./images/greenlaser.png")));
    gameEngine.addEntity(new Acid(gameEngine, AM.getAsset("./images/greenacid.png")));

    console.log("All Done!");
});
