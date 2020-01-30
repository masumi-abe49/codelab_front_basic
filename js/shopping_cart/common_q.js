'use strict';
(function () {
  // 仕様
  // ショッピングカートに入った商品の合計を求めます。
  // 商品はタブレット(10,000円)とパソコン(50,000円)の2つです。
  // 計算ボタンをクリックした時に小計、税額、合計を求めてください。
  // 求めるものは以下の3つです。
  // 小計･･･商品の価格と数量の合計
  // 税額･･小計の金額に対して発生する消費税
  // 合計･･･小計と消費税を足した値

  //ヒント
  // HTMLから取得した値は常に文字列になります。JSで計算するには文字列→数値に変換する必要があります。

  // 使いそうな変数を宣言。必要に応じて後から追加する
  var pc = document.getElementById('pc'); // selectbox
  var tablet = document.getElementById('tablet'); // selectbox
  var btn = document.getElementById('btn');
  var subtotal = document.getElementById('subtotal');
  var tax = document.getElementById('tax');
  var total = document.getElementById('total');
  // 定数は全て大文字で書くことが多い
  var TAXRATE = 8;
  const TABLETPRICE = 10000;
  const PCPRICE = 50000;


  btn.addEventListener('click', function(e) {
    let tabNum = tablet.selectedIndex;
    let tabletX = tablet[tabNum].value; //tablet個数

    let tabletPriceA = TABLETPRICE * Number(tabletX);

    let pcIndexNum = pc.selectedIndex;
    let pcX = pc[pcIndexNum].value; // pc個数

    let pcPriceB = PCPRICE * Number(pcX);

    // 小計
    subtotal.innerText = tabletPriceA + pcPriceB;　

    let subtotalNum = subtotal.innerText;
    // 税額
    tax.innerText = subtotalNum * (TAXRATE / 100);

    let taxNum = tax.innerText;
    // 合計
    total.innerText = Number(subtotalNum) + Number(taxNum);

  });
}());