'use strict';
// 【3択クイズ仕様】
// 「解答!!」ボタンを押した時、モーダルウィンドウが表示されること(opacityプロパティを使う)。またモーダルはposition:fixedを使い、画面の中央に表示すること
// 「解答!!」ボタンを押した時、モーダルに正答率が正しく表示されること。また正答率は小数点を切り捨てること
// モーダルの「閉じる」ボタンまたはモーダルの外側をクリックした時、モーダルが閉じること
// クイズの結果を繰り返し行っても、常に正答率が正しく表示されること

// ＊＊＊＊＊＊モーダルウィンドウ関連＊＊＊＊＊＊

let mask = document.getElementById('mask'); // モーダルウィンドウのグレーの背景（ここを押してもモーダルウィンドウが閉じるようにする）

let answer = document.getElementById('answer'); // 解答ボタン

let modal = document.getElementById('modal'); //モーダル
// 回答がclickされた時にclass="show" を追加する必要があるかも

let result = document.getElementById('result'); //正答率のメッセージ部分

let close = document.getElementById('close'); //閉じるボタン

// ＊＊＊＊＊　モーダルウィンドウ内の正答率関連　＊＊＊＊＊

let selectors = document.querySelectorAll('.q-radio input'); // 選択肢であるinput要素の取得

let trueAns = [
  ["問題1. 世界で3番目に面積の大きい国は？",
  "2"],
  ["問題2. 日本で一番人口の少ない都道府県は？",
  "3"],
  ["問題3. りんごの生産量が2番目に多い都道府県は？",
  "2"]
]; //正解の配列を作ってみる。もっと正しい取得方法あるかも？

answer.addEventListener('click', function(e) {
  let ansCount = 0; // 正解数を保持
  let queCount = 0; // 問題数

  // console.log(selectors); // 確認用
  // console.log(trueAns); // 確認用
  // console.log(queCount); // 確認用

  for (let i = 0; i < selectors.length; i++) {
      if(selectors[i].checked) {
        let userSelect = selectors[i].value;
        // console.log(userSelect); // 確認用

        if(userSelect == trueAns[queCount][1]) {
          ansCount++;
        } else {
          false;
        }
        queCount++;
      }
    };

  // モーダルウィンドウに表示するメッセージ
  result.textContent = '正答率は' + Math.floor(ansCount / queCount *100) + '％でした。'; // 解答結果の正答率の計算式

  modal.classList.add('show');　// class show を追加して、CSSで指定されている内容を表示
  mask.classList.remove('hidden'); // classを削除して display: none;を削除する
});


// モーダル非表示について

// 閉じるボタンでの非表示
close.addEventListener('click', function(e) {
  modal.classList.remove('show');
  mask.classList.add('hidden');
});

// 閉じるボタン以外での非表示
mask.addEventListener('click', function(e) {
  modal.classList.remove('show');
  mask.classList.add('hidden');
});




