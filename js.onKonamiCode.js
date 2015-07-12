$.fn.onKonamiCode = function (eventHandler) {
    var __konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var __pressedKeys = new Array(10);
    function __InsertKey(keycode) {
        var x = 0;
        for (x = 0; x < 9; x++) {
            __pressedKeys[x] = __pressedKeys[x + 1];
        }
        __pressedKeys[9] = keycode;
    }
    function __CheckKeys() {
        var ret = true;
        for (var x = 0; x < 10; x++) {
            if (__konamiCode[x] != __pressedKeys[x])
                ret = false;
        }
        return ret;
    }
    return this.each(function () {
        //this.keydown(
        $(this).keydown(function (e) {
            __InsertKey(e.keyCode);
            if (__CheckKeys()) {
                eventHandler();
            }
        });
    });
}
