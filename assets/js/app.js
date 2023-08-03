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

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");

  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "assets/icons/success.svg",
      info: "assets/icons/info.svg",
      warning: "assets/icons/warning.svg",
      error: "assets/icons/error.svg",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
              <div class="toast__icon">
                <img src="${icon}" alt="success" />
              </div>
              <div class="toast__body">
                  <h3 class="toast__title">${title}</h3>
                  <p class="toast__msg">${message}</p>
              </div>
              <div class="toast__close">
                  <i class="isax isax-close-circle"> </i>
              </div>
          `;
    main.appendChild(toast);
  }
}

function hideLoading() {
  setTimeout(() => {
    document.getElementById("loading")?.classList.add("hidden");
  }, 500);

  setTimeout(() => {
    document.getElementById("loading")?.classList.add("d-none");
  }, 1000);
}
