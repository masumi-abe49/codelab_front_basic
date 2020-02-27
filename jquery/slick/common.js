// 自動再生あり
// Next、Prevボタンで画像の切り替え
// 画像下のドットをクリックで、ドットの順番に対応した画像に切り替え
// 参考：https://webdesignday.jp/inspiration/technique/jquery-js/3847/

$(function() {
// ↓スライダーであるslickに関して。
$('#slider').slick({
  // ここにオプションを追記する
  autoplay: true, // 自動再生
  autoplaySpeed: 3000, // 自動再生スピード
  centerPadding: '30%', // センターモード時のサイドパディング。「見切れるスライドの幅」。デフォルトは50px。’px’または’％’。「centerPadding」で両端の見切れるスライドの幅をピクセルで指定
  focusOnSelect: true, // クリックでのスライド切り替えを有効にするか。
  speed: 1000, // スライド/フェードアニメーションの速度を設定。
  dots: true, //画像下のドットをクリックで、ドットの順番に対応した画像に切り替え
 });
});

// fade: true,　でフェードもできた。