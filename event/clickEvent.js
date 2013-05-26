var first = document.querySelector("#first_box");
first.onclick = function () {
  alert(first.tagName.toLowerCase());
};

var second = document.querySelector("#second_box");
second.onclick = function () {
  alert("I am second.");
};

var second_first = document.querySelector("#second_first_box");
second_first.onclick = function (evt) {
  alert("I am second first.");
  evt.stopPropagation();
};
