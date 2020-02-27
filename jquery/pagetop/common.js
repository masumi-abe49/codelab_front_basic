$(function() {
  // 1.ページを上から150px下にスクロール(scroll())すると
  // 2.右下にページトップボタン(#pageTop)が表示(fadeIn())される
  // ボタンをクリックする(.on('click', function(){}))とトップへスクロールしながら戻る
  // 参考：https://www.go-next.co.jp/blog/web/javascript/6345/

  $('#pageTop').hide(); // ページトップボタンを隠す

  $(window).scroll(function() { //windowはシングルクォーテーション不要。
    if($(window).scrollTop() > 150) {
      $('#pageTop').fadeIn();
    } else {
      $('#pageTop').fadeOut();
    }
  });

  $('#pageTop').on('click', function(e) {
    $('html, body').animate({scrollTop: 0}, 500);
    e.preventDefault(); // ← e.preventDefault(); の記載がないとanimate()が効かなかった。 = a要素のデフォルトの機能（hrefの値に画面遷移するとか）を止めるために必要な模様。
    // 参考：http://webtech-walker.com/archive/2012/09/event_handler_return_false.html

    // html, bodyをどちらも選択するのは、WEBブラウザによっては、bodyに効くけどhtmlだと効かない、逆にhtmlに効くけどbodyだと効かないみたいなことがあるからだそう。
    // animate({})でアニメーションがつけられる
  });
});