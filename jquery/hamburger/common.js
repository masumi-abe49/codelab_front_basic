$(function() {
  // addClass()の引数であるクラス名は.を書かない
  $('#open').on('click', function(e) {
    $('body').addClass('active');
  });

  $('#close').on('click', function(e) {
    $('body').removeClass('active');
  });

  $('#mask').on('click', function(e) {
    $('body').removeClass('active');
  });
});