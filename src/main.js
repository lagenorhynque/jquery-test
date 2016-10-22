var $ = require('jquery');

$(function () {
  $('#btn1').click(function () {
    var val = $('input[name=radio1]:checked').val();
    $('#msg').text('Checked: ' + val);
  });
});
