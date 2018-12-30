//@prepros-append aaa.js

//@prepros-append stage.js
//@prepros-append desktop.js
//@prepros-append hand.js

//@prepros-append card.js

//@prepros-append zzz.js
window.Desky = function (nodeId) {
    "use strict";

    // Variables
    var _ = {};

    // Desky
    var D = {};

    // onResize function

    _.width = window.innerWidth;
    _.height = window.innerHeight;

    var onResize = function (callback) {
        window.addEventListener('resize', function () {
            _.width = window.innerWidth;
            _.height = window.innerHeight;

            callback.apply(null, [_.width, _.height]);
        });
    };

    D.onResize = onResize;


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

    var C = {};

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

    var foreground = new Konva.Rect({
        x: 0,
        y: 0,
        width: cfg.width,
        height: cfg.height,        
        fill: 'green',
        stroke: 'black',
        strokeWidth: 2
    });

    var background = new Konva.Rect({
        x: 0,
        y: 0,
        width: cfg.width,
        height: cfg.height,        
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        visible: false
    });

    group.add(background);
    group.add(foreground);


    C.addToDesktop = function(ops){
        var cfg = {
            x: 0,
            y: 0
        };

        layer_desktop.add(group);
        layer_desktop.draw();
    };







    return C;
};

D.card = card;
    
    return D;
    // End game
};
