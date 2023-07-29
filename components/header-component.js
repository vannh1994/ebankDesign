const headerComponent = {
  template: `<div class="header-fixed">
  <div class="container">
    <div class="menu-sp" @click="toggleMenuLeft">
      <img src="assets/icons/menu-sp.svg" alt="menu-sp" />
    </div>

    <div class="logo-and-search">
      <a class="logo" href="#">
        <img onclick="location.href = 'home.html';" src="assets/icons/logo-dark.svg" alt="logo" />
      </a>
      <input
        type="search"
        placeholder="Tìm kiếm..."
        v-model="searchGlobalQuery"
        data-bs-toggle="dropdown"
      />

      <ul class="dropdown-menu dropdown-menu-feature-global">
        <li class="label">Quý khách có thể tìm kiếm</li>
        <li
          v-for="item in filteredGlobalList"
          class="dropdown-item feature-item"
        >
          <div class="feature-icon">
            <div class="feature-layer-1"></div>
            <div class="feature-layer-2"></div>
            <img :src="item.image" alt="transfer" />
          </div>
          <a :href="item.url">{{ item.text }}</a>
        </li>
      </ul>
    </div>

    <div class="header-menu">
      <span role="button" class="header-notifications">
        <i class="isax isax-notification"></i>
        <span class="number">3</span>
      </span>

      <span role="button" class="header-language">
        <img
          src="assets/icons/uk-flag.svg"
          alt="flag"
          data-bs-toggle="dropdown"
        />

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Tiếng anh</a></li>
          <li>
            <a class="dropdown-item" href="#">Tiếng việt</a>
          </li>
        </ul>
      </span>

      <div class="user-menu">
        <div class="user-menu-content">
          <div class="user-menu-welcome">Chào buổi sáng!</div>
          <div class="user-menu-name">Ngô Xuân Hải</div>
        </div>
        <div class="user-menu-avatar">
          <div class="dropdown">
            <button type="button" data-bs-toggle="dropdown">
              <img src="assets/images/cliparts/avatar.jpeg" />
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Tài khoản</a></li>
              <li>
                <a class="dropdown-item" href="login.html">Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
  setup() {
    const searchGlobalQuery = ref("");

    const featureGlobalList = [
      {
        url: "transfer-inter.html",
        image: "assets/images/feature/loan-amount.svg",
        text: "Cài đặt hạn mức",
      },
      {
        url: "transfer-inter.html",
        image: "assets/images/feature/pay-bills.svg",
        text: "Thanh toán hoá đơn",
      },
      {
        url: "transfer-inter.html",
        image: "assets/images/feature/recharge.svg",
        text: "Đăng ký hạn mức",
      },
      {
        url: "transfer-inter.html",
        image: "assets/images/feature/loyal-customer.svg",
        text: "Chuyển tiền quốc tế",
      },
      {
        url: "transfer-inter.html",
        image: "assets/images/feature/account-number.svg",
        text: "Quản lý chi tiêu",
      },
      {
        url: "transfer-inter.html",
        image: "assets/images/feature/censorship.svg",
        text: "Quản lý danh bạ",
      },
      {
        url: "transfer-inter.html",
        image: "assets/images/feature/statement.svg",
        text: "Sao kê tài khoản",
      },
      {
        url: "transfer-inter.html",
        image: "assets/images/feature/transfer-money.svg",
        text: "Smart Kids",
      },
    ];

    const filteredGlobalList = computed(() => {
      const searchQuery = searchGlobalQuery.value.toLowerCase();
      const filteredItems = featureGlobalList.filter((x) =>
        x.text.toLowerCase().includes(searchQuery)
      );
      return filteredItems.slice(0, 4);
    });

    const onClickOutsideGlobal = (event) => {
      const el = document.querySelector(".feature-select");
      if (
        !el ||
        el === event.target ||
        event.target.closest(".feature-select") === el
      ) {
        return;
      }

      showGlobalSearch.value = false;
    };

    const toggleMenuLeft = () => {
      const element = document.getElementById("left-menu");
      if (element.classList.contains("show")) {
        element.classList.remove("show");
      } else {
        element.classList.add("show");
      }
    };

    onMounted(() => {
      document.addEventListener("click", onClickOutsideGlobal);
    });

    onBeforeMount(() => {
      document.removeEventListener("click", onClickOutsideGlobal);
    });

    return {
      searchGlobalQuery,
      filteredGlobalList,
      toggleMenuLeft,
    };
  },
};
