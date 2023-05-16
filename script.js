// ボタン要素を取得
var btn = document.getElementById('btn');

// カウンター要素とその子要素を取得
var counter = document.getElementById('counter');
var countSpan = counter.getElementsByTagName('span')[0];

// カウントを初期化
var count = 0;

// ボタンがクリックされたときの処理
btn.addEventListener('click', function() {
  count++; // カウントを増やす
  countSpan.textContent = count; // カウントを表示する
  
});
