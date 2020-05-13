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