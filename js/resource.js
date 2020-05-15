var _DATA = function () {
  var that = {};
  that.villageList = function () {
    return constructAPICall({
      url: '../resources/village.json',
      type: 'GET',
      contentType: 'application/json',
      dataType: 'text'
    });
  };
  
  return that;
}
