(function () {
  var textBox = document.querySelector("#textBox"),
      btn = document.querySelector("#addBtn");

  btn.addEventListener("click", function () {
    var inputText = textBox.value;

    // 一文字でも入力がされていた時
    if (inputText.length !== 0) {
      var p_elem = document.createElement("P");
      p_elem.textContent = inputText;
      document.body.appendChild(p_elem);
    }
  }, false);
}());
