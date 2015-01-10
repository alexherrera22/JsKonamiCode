var __k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var __t = new Array(10);
$.fn.onKonamiCode = function (eventHandler) {
    return this.each(function () {
        //this.keydown(
        $(this).keydown(function (e) {
            __I(e.keyCode);
            if (__C()) {
                eventHandler();
            }
        });
    });

}
function __I(keycode) {
    var x = 0;
    for (x = 0; x < 9; x++) {
        __t[x] = __t[x + 1];
    }
    __t[9] = keycode;
}
function __C() {
    var ret = true;
    for (var x = 0; x < 10; x++) {
        if (__k[x] != __t[x])
            ret = false;
    }
    return ret;
}