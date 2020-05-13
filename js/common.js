var _CACHE = function(){
    var that = {};
    
    that.setCache  = function(keyText, value){
        localStorage.setItem(keyText, value);
    }
    that.getCache = function(keyText){
        return localStorage.getItem(keyText);
    }
    return that;
}