var _DATA = function () {
  var that = {};
  var version = '1.0.0';
  that.villageList = function () {
    return constructAPICall({
      url: '../resources/village.json?' + 'v=' + version,
      type: 'GET',
      contentType: 'application/json',
      dataType: 'text'
    });
  };
  that.villageContent = function(vName){
    return constructAPICall({
      url: './villages/' + _u.getVillage().toLowerCase().replace(' ','') + '.html?' + 'v=' + version,
      type: 'GET'
    });
  }
  that.bazarList = function () {
    return constructAPICall({
      url: '../resources/bazarhatlist.json?' + 'v=' + version,
      type: 'GET',
      contentType: 'application/json',
      dataType: 'text'
    });
  };
  that.bazarhatView = function(vName){
    return constructAPICall({
      url: './bazarhat/bazarhat.html?' + 'v=' + version,
      type: 'GET'
    });
  }

  that.bazarhatData = function () {
    return constructAPICall({
      url: '../resources/bazarhat.json?' + 'v=' + version,
      type: 'GET',
      contentType: 'application/json',
      dataType: 'text'
    });
  };
  
  return that;
}
