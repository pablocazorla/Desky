
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