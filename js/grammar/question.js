'use strict';
// 例題 コンソールに数値「1」を出力してください。
console.log(1);


// コンソール問題
// コンソールに文字列「Hello JavaScript!」を出力してください。
console.log('Hello JavaScript!');


// コンソール問題(エスケープシーケンス)
// コンソールに以下の文字列「Hello JavaScript!」を出力してください。(ただしHelloとJavaSciprtの間は改行して出力する)
// ヒント：改行のエスケープシーケンスは \n
console.log('Hello\nJavaScript!');


// コンソール問題 コンソール内で「1 + 5」の計算を実行し、結果を表示してください。
console.log(1 + 5);


// コンソール問題 コンソール内で「10 - 3」の計算を実行し、結果を表示してください。
console.log(10 - 3);


// コンソール問題 コンソール内で「3 × 5」の計算を実行し、結果を表示してください。
console.log(3 * 5);


// コンソール問題 コンソール内で「20 ÷ 2」の計算を実行し、結果を表示してください。
console.log(20 + 2);


// コンソール問題 コンソール内で「10 ÷ 3」の余りを表示してください。
console.log(10 % 3);


// 変数問題 変数ageを宣言し、数値「25」を代入してください。変数ageをコンソールで表示してください。
let age = 25;
console.log(age);


// 変数問題 変数nameを宣言し、文字列「Henry」を代入してください。変数Henryをコンソールで表示してください。
let name = 'Henry';
console.log(name);


// 変数問題 前問で宣言した変数nameを利用し、コンソールに「Henryの年齢は25歳です」と表示してください。
console.log(name + 'の年齢は25歳です');


// データ型問題(undefined) 変数usersを宣言し、コンソール内でtypeof演算子を使い、usersのデータ型を表示してください。
let users;
console.log(typeof users);


// データ型問題 変数usersに文字列「Tom」を代入し、コンソール内でtypeof演算子を使い、usersのデータ型を表示してください。
users = 'Tom';
console.log(typeof users);


// データ型問題(文字列と数値の結合) 以下の結果がそれぞれ異なる理由を記載してください。
console.log(20 + 2); // 22
console.log('20' + 2); // 202

// 理由：データ型が違う。上は20と2が数値型なので数値として計算される。下は20が文字列型となっているため、文字列型と数値型の結合のため文字列型になる。（「+」演算子は左辺または右辺の値が文字列であった場合、もう片方の値を文字列に変換して文字列を連結する＜参考：https://www.javadrive.jp/javascript/ope/index16.html＞）


// インクリメント演算子問題 以下の式をそれぞれ実行し、結果が異なる理由を記載してください。
var num1 = 8;
var num2 = num1++;
console.log(num1); // 9
console.log(num2); // 8

var num3 = 8;
var num4 = ++num3;
console.log(num3); // 9
console.log(num4); // 9

// 理由：num2については、num1に対してインクリメント演算子が後置きされているため、まずインクリメント演算子が書かれていないかのように文が実行される。
// num2 = num1;
// num1 = num1 + 1;

// num4については、num3に対してインクリメント演算子が前置きされているため、まず対象の変数を1だけ増加され、変数「num1」の値が8となる。それからインクリメント演算子を除いた文が実行される。
// num3 = num3 + 1;
// num4 = num3;


// 代入演算子問題  以下の式を+=を使用した式に書き換えて下さい
var num5 = 10;
// ↓この行を書き換える
num5+= 1;
console.log(num5);


// 等価演算子問題  「 == 」を使い結果がtrueとなるようにコンソールに式を書いて下さい。ただしデータ型は数値以外を使用すること。
// 例 console.log(1 == 1); //true
console.log('正月' == '正月');


// 同値演算子問題  以下の式の結果において、上がtrue,下がflaseとなる理由を記載してください。
console.log('10' == 10 ); // true
console.log('10' === 10); // false

// 理由：等価演算子（==）は、2つのオペランドが同じ型でないならばオペランドを変換して、それから厳密な比較を行うため左辺、右辺ともに同じ型として比較されてtrueが返ってくる。（オペランドとは数式を構成する要素のうち、演算の対象となる値や変数、定数などのこと。プログラミングの分野ではこれに加えて、プログラム中の個々の命令・処理の対象となるデータや、データの所在情報などのこともオペランドという）
// 厳密等価演算子（===）は、型変換なしでオペランド同士が厳密に等しければtrueを返す。上記の文字列型の'10'と数値型の10は等しくないこととなりfalseとなる。



// 論理演算子問題
//変数num6、num7を宣言し、それぞれ数値「10」「20」を代入しました。
// コンソールに以下の条件となる式をそれぞれ記載してください。
var num6 = 10,num7 = 20;
// 式① num6が10以上 かつ num7が15以下のとき
console.log(num6 <= 10 &&  num7 >= 15);
// 式② num6が10以上 または num7が15以下のとき
console.log(num6 <= 10 || num7 >= 15);


// 論理演算子問題
// 以下の式は結果がfalseとなります。
// !を使用し、結果をtrueに変えてください。
console.log(!(num6 >= 10 && num7 <= 15));


// if文問題  以下の変数num8が5以上のときはコンソールに「変数num8は5以上です」となるようにif文を記載してください。
var num8 = 10;

if (num8 >= 5) {
  console.log('変数num8は5以上です');
}


// if/else問題  以下の変数num9が5以上のときはコンソールに「変数num9は5以上です」と表示し、それ以外の場合は「変数num9は5より小さいです」と表示してください。
var num9 = 4;

if (num9 >= 5) {
  console.log('変数num9は5以上です');
} else {
  console.log('変数num9は5より小さいです');
}


// if/elseif/else問題
// 変数num10が以下の条件のときそれぞれの処理を記載してください。
// 10以上→コンソールに「変数num10は10以上です」と表示する
// 5以上→コンソールに「変数num10は5以上です」と表示する
// それ以外→コンソールに「変数num10より小さいです」と表示する
var num10 = 5;

if (num10 >= 10) {
  console.log('変数num10は10以上です');
} else if (num10 >= 5) {
  console.log('変数num10は5以上です');
} else {
  console.log('変数num10より小さいです');
}

// switch問題
// 以下のif文をswitch文に書き換えてください。
// またbreak命令を使い、コンソールを複数出力しないようにしてください。
var course = '中級';
// if (course === '初級') {
//   console.log('初級コース');
// } else if (course === '中級') {
//   console.log('中級コース');
// } else if (course === '上級') {
//   console.log('上級コース');
// } else {
//   console.log('未受講です');
// }  　

// ↓switch文で
switch (course) {
  case '初級':
    console.log('初級コース');
    break;

  case '中級':
    console.log('中級コース');
    break;

  case '上級':
    console.log('上級コース');
    break;
}

// while問題
// 変数hogeが10~5の数値をコンソールに出力するようにwhileの条件を記載してください


var hoge = 10;
while (hoge >= 5) {
  console.log(hoge);
  hoge--;
}


// do...while問題
// do内の処理を1度だけ実行するようにdo...while文の条件を記載してください。


var hoge2 = 5;
do {
  console.log(hoge2);
  hoge2--;
} while (hoge2 >= 4);


// for問題
// for文を使いコンソールに1~20の数値を出力してください。

for (let i = 1; i <= 20; i++) {
  console.log(i);
}


// for問題
// コンソールに以下の結果となるように掛け算の九九を1の段から9の段を出力してください。つまり81行出力することになります。
// 1×1は1です
// 1×2は2です
// 中略
// 9×9は81です
// ヒント･･･for文の中にfor文を入れることが出来ます


for (let i = 1; i <= 9; i++) {
  for (let j =1; j <=9; j++) {
    console.log(i + '×' + j + 'は' + (i * j) + 'です');
  }
}