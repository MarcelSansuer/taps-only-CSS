
var domIsReady = function (domIsReady) {
    var isBrowserIeOrNot = function isBrowserIeOrNot() {
        return !document.attachEvent || typeof document.attachEvent === "undefined" ? 'not-ie' : 'ie';
    };

    domIsReady = function domIsReady(callback) {
        if (callback && typeof callback === 'function') {
            if (isBrowserIeOrNot() !== 'ie') {
                document.addEventListener("DOMContentLoaded", function () {
                    return callback();
                });
            } else {
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "complete") {
                        return callback();
                    }
                });
            }
        } else {
            console.error('The callback is not a function!');
        }
    };
    return domIsReady;
}(domIsReady || {});

(function (document, window, domIsReady, undefined) {

      /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    domIsReady(function () {
        var myRadioButtons = document.getElementsByName('tabs'); // this gives you back your array.
        var i = getRandomInt(1,myRadioButtons.length);
        var radioBtn = document.getElementById('tab-nav-' + i);
        if (radioBtn) 
            radioBtn.checked = true;
        else
            radioBtn.checked = false;
    });
})(document, window, domIsReady);
