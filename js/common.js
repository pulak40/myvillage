// var _CACHE = function(){
//     var that = {};

//     that.setCache  = function(keyText, value){
//         localStorage.setItem(keyText, JSON.stringify(value));
//     }
//     that.getCache = function(keyText){
//         return JSON.parse(localStorage.getItem(keyText));
//     }
//     return that;
// }
function makeDropdown(id, data, firstElement, selectedElement) {
  id.append(
    $('<option></option>').val('').html(firstElement)
  );
  $.each(data, function (index, obj) {
    id.append(
      $('<option></option>').val(obj.name).html(obj.name)
    );
  });
  id.val(selectedElement);
}

function constructAPICall(obj) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: obj.url,
      datatype: obj.datatype,
      data: obj.data,
      type: obj.type,
      contentType: obj.contentType,
      crossDomain: obj.crossDomain,
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      }
    });
  });
}