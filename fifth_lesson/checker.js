(function (doc) {
  // チェッカーフラッグ全体をtable要素で表現する
  var tbl = doc.createElement("TABLE");
      num = 9, // 一辺のマスの数
      i = 0;

  // 正方形にしたいので
  // 一辺のマスの数の二乗回for文で処理を回す
  //
  // 左上から右下に、一行ずつマスを作って行く。
  for (; i<num*num; i=i+1) {

    // iが一辺のマス数で割り切れるとき、
    // 次の行の先頭になるべきなので、
    // 新たなtr要素を作成し、table要素の子要素として追加する
    if (i % num === 0) {
      var tr = doc.createElement("TR");
      tbl.appendChild(tr);
    }

    // 一マスに相当するtd要素を作成する
    var td = doc.createElement("TD");

    // チェッカーフラッグになるように、
    // 交互にクラス属性つける
    if (i % 2 === 1) {
      td.className = "even";
    } else {
      td.className = "odd";
    }

    // 作ったtd要素をtr要素の子要素として追加
    tr.appendChild(td);
  }
  // 作ったtable要素を最後にbody要素に挿入する
  doc.body.appendChild(tbl);
}(document));
