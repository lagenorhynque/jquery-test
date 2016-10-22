var $ = require('jquery');

$(function () {
  $('#btn1').click(function () {
    var msg = 'Selected: ';
    $('#sel1 option:selected').each(function () {
      msg += $(this).val() + ' ';
    });
    $('#msg').text(msg);
  });
});
