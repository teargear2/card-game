var Bubble = {};

Bubble.makeBubble = function(x,y){
    var bubble = game.add.sprite(x,y);
    bubble.addChild(game.add.sprite(0,0, 'bubble',0)); // Top left corner
    bubble.addChild(game.add.tileSprite(5,0,0,5, 'bubble',1)); // top side
    bubble.addChild(game.add.sprite(0,0, 'bubble',2)); // top right corner

    bubble.addChild(game.add.tileSprite(0,5,5,0, 'bubble',3)); // left side
    bubble.addChild(game.add.tileSprite(5,5,0,0, 'bubble',4)); // center
    bubble.addChild(game.add.tileSprite(0,5,5,0, 'bubble',5)); // right side

    bubble.addChild(game.add.sprite(0,0, 'bubble',6)); // bottom left corner
    bubble.addChild(game.add.tileSprite(5,0,0,5, 'bubble',7)); // bottom side
    bubble.addChild(game.add.sprite(0,0, 'bubble',8)); // bottom right corner
    var txt = bubble.addChild(game.add.text(0,0, '', {
        font: '14px pixel',
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 2
    }));
    txt.maxWidth = 400;
    txt.alpha = 1.5;
    return bubble;
};

<<<<<<< HEAD
Bubble.makeBigBubble = function(x,y){
    var bubble = game.add.sprite(x,y);
    bubble.addChild(game.add.sprite(0,0, 'bubble',0)); // Top left corner
    bubble.addChild(game.add.tileSprite(5,0,0,5, 'bubble',1)); // top side
    bubble.addChild(game.add.sprite(0,0, 'bubble',2)); // top right corner

    bubble.addChild(game.add.tileSprite(0,5,5,0, 'bubble',3)); // left side
    bubble.addChild(game.add.tileSprite(5,5,0,0, 'bubble',4)); // center
    bubble.addChild(game.add.tileSprite(0,5,5,0, 'bubble',5)); // right side

    bubble.addChild(game.add.sprite(0,0, 'bubble',6)); // bottom left corner
    bubble.addChild(game.add.tileSprite(5,0,0,5, 'bubble',7)); // bottom side
    bubble.addChild(game.add.sprite(0,0, 'bubble',8)); // bottom right corner
    var txt = bubble.addChild(game.add.text(0,0, '', {
        font: '30px pixel',
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 2
    }));
    txt.maxWidth = 400;
    txt.alpha = 1.5;
    return bubble;
};

=======
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
Bubble.displayBubble = function(text,x,y){
    // Displays a speech bubble above a character, containing the string in text
    var maxTextWidth = 400;
    var bubble = this.makeBubble(x,y);
    bubble.alpha = 0.6;  
    bubble.exists = false;
    bubble.exists = true;
    var txt = bubble.getChildAt(9);
    txt.text = text;
    txt.style.wordWrap = true;
    txt.style.wordWrapWidth = maxTextWidth;
    var width = Phaser.Math.clamp(txt.width,30,maxTextWidth);
    if(width%2 != 0) width++; // Odd widths cause gaps in the bubbles
    var height = txt.height;
    // Compute coordinates of pieces of the speech bubble
    var ls = 5;
    var rs = ls+width;
    var ts = 5;
    var bs = ts+height;
    // Tail offset: positive value to place the tail approx. in the middle of the bubble
    bubble.lifespan = Phaser.Timer.SECOND * 5; // Disappears after 5 sec
    txt.anchor.x = 0.5;
    txt.x = width/2+5;
    txt.y = ts;
    bubble.getChildAt(1).width = width; // top side
    bubble.getChildAt(2).x = rs; // top right corner
    bubble.getChildAt(3).height = height; // left side
    bubble.getChildAt(4).width = width; // center
    bubble.getChildAt(4).height = height; // center
    bubble.getChildAt(5).x = rs; // right side
    bubble.getChildAt(5).height = height; // right side
    bubble.getChildAt(6).y = bs; // bottom left corner
    bubble.getChildAt(7).width = width; // bottom side
    bubble.getChildAt(7).y = bs; // bottom side
    bubble.getChildAt(8).x = rs; // bottom right corner
    bubble.getChildAt(8).y = bs; // bottom right corner
<<<<<<< HEAD
};

Bubble.displayBigBubble = function(text,x,y){
    // Displays a speech bubble above a character, containing the string in text
    var maxTextWidth = 400;
    var bubble = this.makeBubble(x,y);
    bubble.alpha = 0.6;  
    bubble.exists = false;
    bubble.exists = true;
    var txt = bubble.getChildAt(9);
    txt.text = text;
    txt.style.wordWrap = true;
    txt.style.wordWrapWidth = maxTextWidth;
    var width = Phaser.Math.clamp(txt.width,30,maxTextWidth);
    if(width%2 != 0) width++; // Odd widths cause gaps in the bubbles
    var height = txt.height;
    // Compute coordinates of pieces of the speech bubble
    var ls = 5;
    var rs = ls+width;
    var ts = 5;
    var bs = ts+height;
    // Tail offset: positive value to place the tail approx. in the middle of the bubble
    bubble.lifespan = Phaser.Timer.SECOND * 5; // Disappears after 5 sec
    txt.anchor.x = 0.5;
    txt.x = width/2+5;
    txt.y = ts;
    bubble.getChildAt(1).width = width; // top side
    bubble.getChildAt(2).x = rs; // top right corner
    bubble.getChildAt(3).height = height; // left side
    bubble.getChildAt(4).width = width; // center
    bubble.getChildAt(4).height = height; // center
    bubble.getChildAt(5).x = rs; // right side
    bubble.getChildAt(5).height = height; // right side
    bubble.getChildAt(6).y = bs; // bottom left corner
    bubble.getChildAt(7).width = width; // bottom side
    bubble.getChildAt(7).y = bs; // bottom side
    bubble.getChildAt(8).x = rs; // bottom right corner
    bubble.getChildAt(8).y = bs; // bottom right corner
};

=======
};
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
