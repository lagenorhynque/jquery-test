var $ = require('jquery');

$(function () {
  $('#btn1').click(function () {
    var str = $('#text1').val();
    $('#msg').text('You typed: ' + str + '.');
  });
});
