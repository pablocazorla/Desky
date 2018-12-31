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
