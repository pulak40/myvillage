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
      $('<option></option>').val(obj.value).html(obj.name)
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
function searchTable(colIn) {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[colIn];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function loadDynamicContent(id, data){
  $('#' + id).html(data);
}