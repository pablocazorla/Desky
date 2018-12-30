
var stage = new Konva.Stage({
    container: nodeId,
    width: _.width,
    height: _.height
});

onResize(function (w,h) {
    stage.width(w);
    stage.height(h);
});