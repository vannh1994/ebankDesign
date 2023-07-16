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

function collapsed(section) {
  const element = document.getElementById(section);
  if (element.classList.contains(section)) {
    element.classList.remove(section);
  } else {
    element.classList.add(section);
  }
}

function toggleAccountBalance() {
  const element = document.getElementById("account-balance");
  if (element.classList.contains("show")) {
    element.classList.remove("show");
  } else {
    element.classList.add("show");
  }
}

function showAllFeature() {
  const element = document.getElementById("main-content");
  if (element.classList.contains("show-all")) {
    element.classList.remove("show-all");
  } else {
    element.classList.add("show-all");
  }
}

function showLimit() {
  const element = document.getElementById("limit");
  if (element.classList.contains("d-block")) {
    element.classList.remove("d-block");
  } else {
    element.classList.add("d-block");
  }
}
