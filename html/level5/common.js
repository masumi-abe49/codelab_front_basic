$(function() {
  // ＊＊＊できてない＊＊＊ animation1　top-wrapperのアニメーション
  // opacityを0にする
  $('.top-wrapper h1, .top-wrapper p').css("opacity","0");

  $(window).on('load',function(){
    $('.top-wrapper h1, .top-wrapper p').each(function() {
      $('.top-wrapper h1').addClass('zoomup');
      setTimeout(function(){
        $('.top-wrapper p').addClass('zoomup');
      } ,250);
      $(this).css("opacity","1");
    });
  });


  // $('.introduction-wrapper h2').css({"transform": "rotate(0deg)", "transition": "transform 2s"});

  // ＊＊＊できてない　擬似要素の動きが違う＊＊＊ animation2 INTRODUCTION 　introduction-wrapperのアニメーション

  $('.introduction-wrapper h2, .introduction-wrapper p').css({"opacity": "0",
  "transform": "scale(0)",
  "transition": "transform 2s"});

  $(window).on('scroll', function (e){
    $('.introduction-wrapper h2, .introduction-wrapper p').each(function(){
      let position = $(this).offset().top; //.offset().topで、ページの最上部から「.top-wrapper h1, .top-wrapper p」が付いた要素までの距離を取得して、変数positionに代入
      let scroll = $(window).scrollTop(); // .scrollTop()で、スクロールした量を取得して、変数scrollに代入
      let windowHeight = $(window).height(); // .height()で、ウィンドウの高さを取得して、変数windowHeightに代入します。
      if (scroll > position - windowHeight + windowHeight/5){
        $('.introduction-wrapper h2').addClass('active');
        $(this).css({
          "opacity": "1",
          "transform": "scale(1)",
          });
      } else {
        $(this).css({
          "opacity": "0",
          "transform": "scale(0)",
          });
      }
    });
  });

  //***できていない*** */ animation3 （animation7と同じ感じ）＜CSS keyframes使ってみる＞ Pure Creativity 縦回転
   $('.image-wrapper01 p, .image-wrapper04 p').css({
     "opacity": "0"
     });
  $(window).scroll(function (){
    $('.image-wrapper01 p, .image-wrapper04 p').each(function(){
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + windowHeight/2){
        // $(this).fadeIn();
        $(this).addClass('rotate');
        $(this).css({
          "opacity": "1"
        });
      } else {
        $(this).removeClass('rotate');
        $(this).css({
          "opacity": "0"
        });
        // $(this).fadeOut(700);
      }
    });
  });

  // ＊＊＊微妙？？＊＊＊animation4  OUR CLIENTS ズームイン＋logo順番にフェードイン
  $('.logo-wrapper h2, .logo-wrapper li').css({"opacity": "0"});
  $('.logo-wrapper h2').css({
    "transform": "scale(0)",
    "transition": "transform 2s"
    });
  $(window).scroll(function (){
    $('.logo-wrapper h2').each(function(){
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + windowHeight/2){
        $(this).css({
          "opacity": "1",
          "transform": "scale(1)",
          "transition": "transform 1s"
        });
      } else {
        $(this).css({
          "opacity": "0",
          "transform": "scale(0)",
          "transition": "transform 1s"
        });
      }
    });
  });

  $(window).scroll(function (){
    $('.logo-wrapper li').each(function (i) {
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + windowHeight/2) {
        $(this).delay(100 * i).animate({
          'opacity' : '1'
        }, 250);
      } else {
        // $(this).delay(1000 * i).animate({
        //   'opacity' : '0'
        // }, 2000);
      }
    });
  });

  // ＊＊＊擬似要素NG＊＊＊animation5 ABOUT US  about-wrapper 点滅 flash
  $(window).scroll(function (){
    $('.about-wrapper h2, .about-wrapper p').each(function () {
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + windowHeight/2) {
        $(this).addClass('flash');
        // $('.title-about').addClass('lighting');
      } else {
        $(this).removeClass('flash');
      }
    });
  });


// animation6 WHY CHOOSE US　左右ブルブル　アニメーション用 buruburu

$(window).scroll(function (){
  $('.whychoose-wrapper h2, .whychoose-text').each(function () {
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + windowHeight/2) {
      $(this).addClass('buruburu');
      $('.whychoose-wrapper').css("overflow", "hidden");
    } else {
      $(this).removeClass('buruburu');
    }
  });
});


  // ***これから*** animation7(animation3と同じ感じ) Get a quote now.　前後少し回転




  // animation8　GET IN TOUCH　ズームイン
  $('.getin-wrapper h2, .getin-wrapper p').css({
    "opacity": "0",
    "transform": "scale(0)",
    "transition": "transform 2s"
    });
  $(window).on('scroll', function (e){
    $('.getin-wrapper h2, .getin-wrapper p').each(function(){
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + windowHeight/5){
        $(this).css({
          "opacity": "1",
          "transform": "scale(1)",
          });
      } else {
        $(this).css({
          "opacity": "0",
          "transform": "scale(0)",
          });
      }
    });
  });


// animation9 OUR LOCATION、コンタクトのスライドイン↓↓↓
// はみ出た範囲を隠す。
  $('.info-wrapper').css("overflow","hidden");

  $('.location').css({
    "opacity": "0",
    "transform": "translateX(-100%)",
    "transition": "transform 2s",
    });

  $(window).scroll(function (){
    $('.location').each(function(){
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + windowHeight/2){
        $(this).css({
          "opacity": "1",
          "transform": "translateX(0%)",
          "transition": "transform 1s"
        });
      } else {
        $(this).css({
          "opacity": "0",
          "transform": "translateX(-100%)",
          "transition": "transform 0s",
        });
      }
    });
  });

  $('.contact').css({
    "opacity": "0",
    "transform": "translateX(100%)",
    "transition": "transform 2s",
    });

  $(window).scroll(function (){
    $('.contact').each(function(){
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + windowHeight/2){
        $(this).css({
          "opacity": "1",
          "transform": "translateX(0%)",
          "transition": "transform 1s",
        });
      } else {
        $(this).css({
          "opacity": "0",
          "transform": "translateX(100%)",
          "transition": "transform 1s"
        });
      }
    });
  });
});