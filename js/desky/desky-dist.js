//@prepros-append aaa.js

//@prepros-append stage.js
//@prepros-append desktop.js
//@prepros-append hand.js

//@prepros-append card.js

//@prepros-append keys.js

//@prepros-append zzz.js
window.Desky = function (nodeId) {
    "use strict";

    // Variables
    var _ = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    // Desky
    var D = {};

    // onResize function
    var onResize = function (callback) {
        window.addEventListener('resize', function () {
            _.width = window.innerWidth;
            _.height = window.innerHeight;

            callback.apply(null, [_.width, _.height]);
        });
    };
    D.onResize = onResize;

    // Current selected
    var currentSelected = null,
        select = function(newSelected){
            if (currentSelected){
                currentSelected.selected = false;
                currentSelected.draw();
            }
            
            if (newSelected) {
                currentSelected = newSelected;
                currentSelected.selected = true;
                currentSelected.draw();
            }else{
                currentSelected = null;
            }

        };


var stage = new Konva.Stage({
    container: nodeId,
    width: _.width,
    height: _.height
});

onResize(function (w,h) {
    stage.width(w);
    stage.height(h);
});

var layer_desktop = new Konva.Layer();

stage.add(layer_desktop);

var layer_hand = new Konva.Layer();

stage.add(layer_hand);

var cardIdCounter = 0;

var card = function(options){

    var C = {
        selected: false,
        isFore: true
    };

    var cfg = {
        x:100,
        y:150,
        width: 100,
        height: 130
    };

    var group = new Konva.Group({
        x: cfg.x,
        y: cfg.y,
        name: 'card-'+ (cardIdCounter++),
        draggable: true
    });

    var highlightMargin = 5,
        highlight = new Konva.Rect({
            x: 0 - cfg.width/2 - highlightMargin,
            y: 0 - cfg.height/2 - highlightMargin,
            width: cfg.width + 2 * highlightMargin,
            height: cfg.height + 2 * highlightMargin,
            stroke: '#2F0',
            strokeWidth: 4,
            lineCap: 'round',
            lineJoin: 'round',
            visible: false
        });

    var foreground = new Konva.Rect({
        x: 0 - cfg.width/2,
        y: 0 - cfg.height/2,
        width: cfg.width,
        height: cfg.height,        
        fill: 'green',
        stroke: 'black',
        strokeWidth: 2
    });

    var background = new Konva.Rect({
        x: 0 - cfg.width / 2,
        y: 0 - cfg.height / 2,
        width: cfg.width,
        height: cfg.height,        
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        visible: false
    });

    group.add(highlight);
    group.add(background);
    group.add(foreground);

    var flipTween1 = null,
        flipTween2 = null;
    var addTweens = function(){
        flipTween2 = new Konva.Tween({
            node: group,
            scaleX: 1,
            scaleY: 1,
            easing: Konva.Easings.EaseOut,
            duration: 0.4,
            onFinish: function () {
                console.log('tween finished!');
            }
        });
        flipTween1 = new Konva.Tween({
            node: group,
            scaleX: 0,
            scaleY: 1.1,
            easing: Konva.Easings.EaseIn,
            duration: 0.4,
            onFinish: function () {
                flipTween2.play();
            }
        });
    };


    C.addToDesktop = function(ops){
        var cfg = {
            x: 0,
            y: 0
        };

        layer_desktop.add(group);
        layer_desktop.draw();

        addTweens();
    };

    C.draw = function(){
        highlight.visible(C.selected);
    };

    var fliping = false;
    C.flip = function () {
        if (flipTween1){
            flipTween1.play();
        }
        
    };

    group.on('mousedown', function () {
        console.log('dragstart');
        select(C);
    });





    return C;
};

D.card = card;
window.addEventListener('keypress',function (e) {
  console.log(e.keyCode);
  switch(e.keyCode){
    case 102: // F
      // Flip selected
      if(currentSelected){
        currentSelected.flip();
      }
      break;
    default:

  }
});
    
    return D;
    // End game
};
