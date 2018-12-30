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
