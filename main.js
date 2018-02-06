

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
    this.speed = -300;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet, this.x, this.y);
    this.ctx.drawImage(this.spritesheet, this.x + 2077, this.y);
    this.ctx.drawImage(this.spritesheet, this.x - 2077, this.y);
};

Background.prototype.update = function () {
    if (this.game.d) {
        this.x += this.game.clockTick * this.speed;
    }
    if (this.game.a) {
        this.x -= this.game.clockTick * this.speed;
    }

    if (this.x < -2081) this.x = 0;
    if (this.x > 2081) this.x = 0;
};





function Acid(game, spritesheet) {
    this.animation = new Animation(spritesheet, 80, 50, 1, 0.09, 8, true, 1);
    this.speed = 400;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, 400);
}

//Acid.prototype = new Entity();
//Acid.prototype.constructor = Acid;

Acid.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 950) this.x = -230;
}

Acid.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}




function Yes(game, spritesheet) {
    this.animation = new Animation(spritesheet, 200, 270, 4, 0.07, 13, true, 1);
    this.speed = 100;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, 450);
}

//Yes.prototype = new Entity();
//Yes.prototype.constructor = Yes;

Yes.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 950) this.x = -230;
}

Yes.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}




function Goku(game, spritesheet) {
    this.animation = new Animation(spritesheet, 250, 223, 2, 0.10, 6, true, .75);
    this.speed = 150;
    this.ctx = game.ctx;
    Entity.call(this, game, 250, 10);
}

//Goku.prototype = new Entity();
//Goku.prototype.constructor = Goku;

Goku.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 950) this.x = -230;
}

Goku.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}



function Fire(game, spritesheet) {
    this.animation = new Animation(spritesheet, 214, 207, 2, 0.10, 6, true, .75);
    this.speed = 150;
    this.ctx = game.ctx;
    Entity.call(this, game, 80, 10);
}

//Fire.prototype = new Entity();
//Fire.prototype.constructor = Fire;

Fire.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 950) this.x = -230;
}

Fire.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}



function FireWalk(game, spritesheet) {
    this.animation = new Animation(spritesheet, 214, 180, 3, 0.10, 8, true, .75);
    this.speed = 150;
    this.ctx = game.ctx;
    Entity.call(this, game, -150, 25);
}

//FireWalk.prototype = new Entity();
//FireWalk.prototype.constructor = FireWalk;

FireWalk.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 950) this.x = -230;
}

FireWalk.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}



function Hero(game, spritesheet) {
    this.animation = new Animation(spritesheet, 104.6, 101, 8, 0.10, 8, true, 1.2);
    this.speed = 150;
    this.ctx = game.ctx;
    Entity.call(this, game, -25, 40);
}

//Hero.prototype = new Entity();
//Hero.prototype.constructor = Hero;

Hero.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 950) this.x = -230;
}

Hero.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}



function Boom(game, spritesheet) {
    this.animation = new Animation(spritesheet, 127, 260, 4, 0.14, 8, true, 1);
    this.speed = 200;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, 200);
}

//Boom.prototype = new Entity();
//Boom.prototype.constructor = Boom;

Boom.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 950) this.x = -230;
}

Boom.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

var AM = new AssetManager();

AM.queueDownload("./img/trees.jpg");
AM.queueDownload("./img/acid.png");
AM.queueDownload("./img/yes.png");
AM.queueDownload("./img/goku.png");
AM.queueDownload("./img/fire.png");
AM.queueDownload("./img/firewalk.png");
AM.queueDownload("./img/hero.png");
AM.queueDownload("./img/boom.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/trees.jpg")));
    gameEngine.addEntity(new Acid(gameEngine, AM.getAsset("./img/acid.png")));
    gameEngine.addEntity(new Yes(gameEngine, AM.getAsset("./img/yes.png")));
    gameEngine.addEntity(new Goku(gameEngine, AM.getAsset("./img/goku.png")));
    gameEngine.addEntity(new Fire(gameEngine, AM.getAsset("./img/fire.png")));
    gameEngine.addEntity(new FireWalk(gameEngine, AM.getAsset("./img/firewalk.png")));
    gameEngine.addEntity(new Hero(gameEngine, AM.getAsset("./img/hero.png")));
    gameEngine.addEntity(new Boom(gameEngine, AM.getAsset("./img/boom.png")));

    console.log("All Done!");
});