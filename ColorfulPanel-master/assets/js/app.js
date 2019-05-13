// 作成の流れ
// 1. 追加ボタンにclickのイベントを登録する
// 2. 追加ボタンがクリックされた時の処理を書く
  // 2.1 画面の入力欄、入力値を取得する
  // 2.2 新しくdivを作成する
  // 2.3 divの背景色に画面の「2.1」で取得した入力値を設定する
  // 2.4 新しく作成したdivにCSSのクラスを追加する
  // 2.5 div[id=box]を取得する
  // 2.6 作成したdivを追加する

// 1. get addBtn b/c this is wjere the event happnes
let addBtn = document.getElementById('addBtn');

// 2. creat an event
addBtn.addEventListener('click', function(){

  // 2.1 get input info and creat a box to save data
  let inputColor = document.getElementById('inputColor');

  // 2.2 creat div TAG to show inputcolor
  let div = document.createElement('div');

  // 2.3 insert data from 2.1 to div=styl.backgroundColor
  div.style.backgroundColor = inputColor.value;

  // 2.4 add class with div from 2.2
  div.classList.add('panel');

  // get div=id= box TAG this is a parent TAG
  let box =document.getElementById('box');

  // insert div to box; this is a child of div=box
  box.appendChild(div);


})