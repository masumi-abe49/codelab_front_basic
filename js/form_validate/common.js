'use strict';
// input要素のclassは入力チェック内容の種類をclass名で指定されている。
// 各入力欄の隣に、エラーメッセージ表示用のp要素(class名err-txt)がそれぞれ用意されていて、それらにはそれぞれのclass名（err-nameなど）が指定されている。※ソースコードではp要素だが、はspan要素で用意されることもある模様。
// HTML側では、上記二つの条件両方を含む親要素を1つ用意することが必要な模様。今回はdiv要素のclass名form-groupがその親要素に当たるかと思われる。入力欄とエラー表示用要素の1つずつだけを含む何らかの親要素が必須との記載あり。※参考URL：https://allabout.co.jp/gm/gc/23854/2/

let submit = document.getElementById('submit');

submit.addEventListener('click', function(e) {
  let formGroup = document.getElementsByClassName('form-group');

  for (let i = 0; i < formGroup.length; i++) {
    let text = formGroup[i].querySelector('input');
    let errMessage = formGroup[i].querySelector('p');
    let reg;

    if(text.name == 'name') {
      reg = /.*/;
      if((!text.value) || (!reg.test(text.value))) {
        errMessage.textContent = '名前が未入力です';
        errMessage.classList.add('red');
        e.preventDefault();
      } else if((!text.value == '') && reg.test(text.value)) {
        errMessage.textContent = '';
      }
    }
    if(text.name == 'kana') {
      reg = /^[ァ-ヶー　]+$/;
      if(text.value == '' || (!reg.test(text.value))) {
        errMessage.textContent = '全角カナで入力してください。';
        errMessage.classList.add('red');
        e.preventDefault();
      } else if((!text.value == '') && reg.test(text.value)) {
        errMessage.textContent = '';
      }
    }
    if(text.name == 'tel') {
      reg = /^[0-9]{10,11}$/;
      if(text.value == '' || (!reg.test(text.value))) {
        errMessage.textContent = '電話番号をハイフンなしで入力してください。';
        errMessage.classList.add('red');
        e.preventDefault();
      } else if((!text.value == '') && reg.test(text.value)) {
        errMessage.textContent = '';
      }
    }
    if(text.name == 'mail') {
      reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      if(text.value == '' || (!reg.test(text.value))) {
        errMessage.textContent = 'メールアドレスの形式ではありません。';
        errMessage.classList.add('red');
        e.preventDefault();
      } else if((!text.value == '') && reg.test(text.value)) {
        errMessage.textContent = '';
      }
    }
  }
});