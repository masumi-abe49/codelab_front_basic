'use strict';
// 例題 コンソールに数値「1」を出力してください。
// console.log(1);

// 問題1：要素の取得
// id属性txt1の要素を取得し、変数txt1に代入してください。
// 代入後、変数txt1をコンソールに表示してださい。
let txt1 = document.getElementById('txt1');

console.log(txt1);

// 問題2：テキストの取得
// id属性txt2の要素を取得し、変数txt2に代入してください。
// txt2要素配下のテキストを取得し、コンソールに表示してください。
// ただしHTMLタグを含むもの、含まないもの両方の方法で表示すること。

let txt2 = document.getElementById('txt2');

console.log(txt2.innerHTML);
console.log(txt2.innerText);

// 問題3：テキストの書き換え
// id属性txt2配下のテキストを「書き換えました」という文字列に書き換えてください。

txt2.innerText = "書き換えました";

// console.log(txt2.innerText);


// 問題4：イベント(クリック)
// 取得ボタンをクリックしたとき、id属性txt3のテキストを取得し、id属性txt4に表示してください。

document.getElementById("btn1").onclick = function() {
  document.getElementById("txt4").innerHTML = document.getElementById("txt3").innerText;
};


// 問題5：イベント(サブミット) / フォーム部品の取得(テキスト)
// 送信ボタンをクリックしたとき、フォーム部品(id属性input1のvalue)の値を取得し、id属性txt5に出力してください。

let form = document.getElementById("form1");
// ↑ここは変数代入してもしなくてもOK（getElementByIdとaddEventListenerを繋げて書いてもOK）

form.addEventListener("submit", function(e) {
// ↑↑↑↑functionの引数？の＜e＞は、イベントのe。＜preventDefault();＞にてイベント（今回はsumbitによる画面リロード）をさせないようにするために必要な引数。　200122　by栗岩さん


  // ↓↓栗岩さんからの参考コード。（それぞれを変数に代入して進める方法。　varの方が良いのかも。↓↓）
  // let input1 = document.getElementById("input1").value;
  // let txt5 = document.getElementById("txt5");
  // txt5.innerText = input1;

  document.getElementById("txt5").innerText = document.getElementById("input1").value;
  e.preventDefault();
  // ＜preventDefault();＞にてイベント（今回はsumbitによる画面リロード）をさせないようにするために必要。
});

// 問題6：フォーム部品の取得(セレクトボックス)
// 送信ボタンをクリックしたとき、セレクトボックス(name属性item1のvalue)の選択中の値を取得し、id属性result1に出力してください。

// フォームを取得して変数に代入
let form2 = document.getElementById('form2');

// 変数form2のsubmitイベント時の内容を入力
form2.addEventListener('submit', function(e) {
  // selectタグ（セレクトボックス）をitem1という変数に代入
  let item1 = form2.item1;

  // セレクトボックスの内容には0から番号が割り振られている（1つ目は0、2つ目は1...となる）ため、selectedIndex（現在選択されている値のインデックス番号）を用いてその番号を変数numに代入
  let num = item1.selectedIndex;

  // 変数selectにitem1（セレクトボックス）で選択されているインデックス番号のvalue（今回だと国名）を代入
  let select = item1[num].value;

  // pタグのresult1に表示するためにIdから値を取得して、.textContentの部分に変数selectを代入。
  document.getElementById('result1').textContent = select;

  // ＜preventDefault();＞にてイベント（今回はsumbitによる画面リロード）をさせないようにするために必要↓↓
  e.preventDefault();
});


// 問題7：フォーム部品の取得(チェックボックス)
// 送信ボタンをクリックしたとき、チェックボックス(name属性item1のvalue)の選択中の値を取得し、id属性result2に出力してください。

//   ★ヒント★for文を使うことになる　→　どのチェックボックス、ラジオボタンが選択されている（checked）かを調べる必要がある。

let form3 = document.getElementById('form3');

form3.addEventListener('submit', function (e) {
  // form内のチェックボックスのname属性部分を変数checkに代入
  let check = form3.check;
  // 空の配列を作成。配列arr(任意の名前)とする。
  let arr = [];
  // forを使って繰り返し処理を行い、ifを使い変数iにcheckが入っていれば（checked === true　ならば）inputのvalue属性を配列に追加し、result2に表示。(選択状態かを確認するには、要素のcheckedプロパティを参照する)
  for (let i = 0; i < check.length; i++) {
    if(check[i].checked) {
      arr.push(check[i].value);
    }
  }
  document.getElementById('result2').textContent = arr;
  //  ＜preventDefault();＞にてイベント（今回はsumbitによる画面リロード）をさせないようにするために必要↓↓
  e.preventDefault();
});


// 問題8：フォーム部品の取得(ラジオ)
// 送信ボタンをクリックしたとき、ラジオボタン(name属性item1のvalue)の選択中の値を取得し、id属性result3に出力してください。

let form4 = document.getElementById('form4');

form4.addEventListener('submit', function(e) {
  // radioNodeListに、form内にあるラジオボタンラジオボタングループ（name = radio）を取得
  let radioNodeList = form4.radio;
  // 空の配列を作成。複数の要素があるためそれぞれチェックが入っているか（checkde）をforを使って確認する必要がある。
  let arr = [];
  // forを使って繰り返し処理を行い、ifを使い変数iにcheckが入っていれば（checked === true　ならば）inputのvalue属性を配列に追加し、result3に表示。
  for (let i = 0; i < radioNodeList.length; i++) {
    if(radioNodeList[i].checked) {
      arr.push(radioNodeList[i].value);
    }
  }
  document.getElementById('result3').textContent = arr;
  e.preventDefault();
});




// 問題9：バリデーションチェック
// 会社名が未入力のまま送信ボタンをクリックしたとき、「会社名が未入力です。」というアラートを表示してください。また未入力の場合は、処理を中断してください。

let form5 = document.getElementById('form5');
// let companyNamePattern =

form5.addEventListener('submit', (e) => {
  e.preventDefault();
  let companyName = form5.company.value;
  if(companyName === '') {
    alert('会社名が未入力です。');
    return false;
  }
});


// 問題10：CSSの操作
// id属性txt6のCSSプロパティを以下に変更してください。
// また変更するタイミングは画面表示時とする。
// 文字色→赤色、フォントサイズ→32px

let txt6 = document.getElementById('txt6').style;

let style01 = {
  color: 'red',
  fontSize: '32px',
}

// window.onloadを関数に代入するか、以下の書き方でも行けた。
window.addEventListener('load', function(e) {
  for(let prop in style01) {
    txt6[prop] = style01[prop];
    // e.preventDefault();
  }
});


// 問題11：ノード追加
// 追加ボタンをクリックしたとき、id属性parentの子要素にpタグを追加し、pタグに「ノード追加テキスト」というテキストを追加してください。

let parent = document.getElementById('parent');

document.getElementById("btn2").onclick = () => {
  if(!parent.hasChildNodes()) {
    let p1 = document.createElement('p');
    let text01 = document.createTextNode('ノード追加テキスト');
    p1.appendChild(text01);
    parent.appendChild(p1);
  }
};


// 問題12：ノード削除
// 削除ボタンをクリックしたとき、id属性parentの子要素を削除してください。

// let btn3 = document.getElementById('btn3');

document.getElementById("btn3").onclick = () => {
  if(parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
};

// 問題13：属性取得・変更
// 変更ボタンをクリックしたとき、id属性link1のhref属性を取得し、コンソールに表示してください。またhref属性を「https://www.yahoo.co.jp」に書き換えてください。

// 属性の取得はgetAttribute、設定はsetAttribute

let link1 = document.getElementById('link1');

document.getElementById("btn4").onclick = () => {
  link1.setAttribute('href','https://www.yahoo.co.jp');
  console.log(link1.href);
};

// 問題14：クエリーセレクター / カスタム属性 / this
// querySelectorAllを使い、id属性list1の子要素のliを全て取得してください。
// liをクリックしたとき、カスタム属性numの値を取得し、コンソールに表示してください。
// その場合、クリックした要素のカスタム属性のみ取得すること。
// 例 list２のliをクリックしたときはコンソールに「2」を表示する

let list1 = document.querySelectorAll('#list1 li');

for (let i = 0; i < list1.length; i++) {
  list1[i].onclick = function(e) {
      console.log(this.getAttribute('data-num'));
      e.stopPropagation();
    };
  };

// 問題15-1：クラスの操作(追加)
// 追加ボタンをクリックしたとき、id属性txt7にクラスredを追加してください。

let txt7 = document.getElementById('txt7');

document.getElementById('btn5').onclick = () => {
  txt7.classList.add('red');
};

// 問題15-2：クラスの操作(削除)
// 削除ボタンをクリックしたとき、id属性txt7にクラスredを削除してください。

document.getElementById('btn6').onclick = () => {
  txt7.classList.remove('red');
};

// 問題15-3：クラスの操作(切り替え)
// 切り替えボタンをクリックしたとき、id属性txt7にクラスredがあれば削除し、なければ追加してください。

document.getElementById('btn7').onclick = () => {
  txt7.classList.toggle('red');
};