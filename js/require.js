var _require = function () {
    var that = {};
    var version = '2.0.0';
    that.loadRequiredFiles = function (scripts, styles,callback) {
        var filesloaded = 0;
        var filestoload = scripts.length + styles.length;
        for (var i = 0; i < scripts.length; i++) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '../js/' + scripts[i] + '.js?v=' + version;
            script.onload = function () {
                filesloaded++;  // (This means increment, i.e. add one)
                finishLoad();
            };
            document.head.appendChild(script);
        }
        for (var i = 0; i < styles.length; i++) {
            var style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = '../resources/theme/' + styles[i] + '.css?v=' + version;
            style.type = 'text/css';
            style.onload = function () {
                filesloaded++;
                finishLoad();
            };
            document.head.appendChild(style);
        }
        function finishLoad() {
            if (filesloaded === filestoload) {
                typeof callback == 'undefined' || callback();
            }
        }
    };
    return that;
}