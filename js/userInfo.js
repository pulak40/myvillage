var _USER = function () {
    var that = {};
    //var c = new _CACHE();

    that.firstName = '';
    that.lastName = '';
    that.email = '';
    that.mobile = '';
    that.password = '';
    that.isSignedUp = false;
    that.selectedVillage = '';

    that.setUserInfo = function () {
        var userModel = {
            firstName: that.firstName,
            lastName: that.lastName,
            email: that.email,
            mobile: that.mobile,
            password: that.password,
            isSignedUp: that.isSignedUp
            //selectedVillage: that.selectedVillage
        }
        that.setCache("userInfo", userModel);
    }
    that.getUserInfo = function () {
        return that.getCache("userInfo");
    }

    that.setVillage = function (v) {
        that.setCache("village", v);
    }
    that.getVillage = function () {
        return that.getCache('village');
    }

    that.setCache = function (keyText, value) {
        localStorage.setItem(keyText, JSON.stringify(value));
    }
    that.getCache = function (keyText) {
        return JSON.parse(localStorage.getItem(keyText));
    }
    return that;
}