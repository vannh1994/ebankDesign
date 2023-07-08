document.addEventListener("DOMContentLoaded", function () {
  var inputs = document.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.addEventListener("blur", function () {
      if (!this.value) {
        this.classList.remove("hascontent");
      } else {
        this.classList.add("hascontent");
      }
    });
  });
});
