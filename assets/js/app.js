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

function collapsed() {
  const element = document.getElementById("collapsed");
  if (element.classList.contains("collapsed")) {
    element.classList.remove("collapsed");
  } else {
    element.classList.add("collapsed");
  }
}

function collapsedReceivingAccount() {
  const element = document.getElementById("collapsed-receiving-account");
  if (element.classList.contains("collapsed-receiving-account")) {
    element.classList.remove("collapsed-receiving-account");
  } else {
    element.classList.add("collapsed-receiving-account");
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
