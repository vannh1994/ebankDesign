const selectorComponent = {
  template: `
    <div ref="popup" class="custom-selector-wrapper">
      <div class="custom-selector" @click="showSelector = true" :class="{ required }">
        <div
          v-if="modelValue"
          class="option-selected"
          @click="showSelector = true"
        >
          <slot name="selected" :option="selectedOption">
            {{modelValue.name}}
          </slot>
        </div>
        <!-- End -->
        <div class="custom-selector-placeholder">
          {{ placeholder }}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="isax"
        width="1em"
        height="1em"
        viewBox="0 0 24 25"
        fill="none"
        @click="showSelector = true"
      >
        <path
          d="M17.92 8.30957H11.69H6.07999C5.11999 8.30957 4.63999 9.46957 5.31999 10.1496L10.5 15.3296C11.33 16.1596 12.68 16.1596 13.51 15.3296L15.48 13.3596L18.69 10.1496C19.36 9.46957 18.88 8.30957 17.92 8.30957Z"
          fill="currentColor"
        />
      </svg>

      <transition>
        <div v-if="showSelector" class="custom-selector-popup">
          <input
            v-if="searchable"
            v-model="searchQuery"
            class="custom-selector-input"
            :placeholder="searchPlaceholder"
          />
          <div class="option-list">
            <div
              v-for="option in filteredList"
              class="option-item"
              @click="selectedOption = option; showSelector = false; $emit('update:modelValue', option)"
            >
              <slot name="option" :option="option">
                {{ option.name }}
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  `,
  props: [
    "modelValue",
    "options",
    "placeholder",
    "searchPlaceholder",
    "searchable",
    "searchBy",
    "required",
    "default",
  ],
  emits: ["update:modelValue"],
  setup(props) {
    const showSelector = ref(false);
    const popup = ref(null);
    const selectedOption = ref(null);
    const searchQuery = ref("");

    const filteredList = computed(() => {
      if (!props.searchBy) return props.options;
      return (props.options || []).filter((x) =>
        x[props.searchBy]
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
      );
    });

    const onClickOutside = (event) => {
      const el = popup.value;
      if (
        !el ||
        el === event.target ||
        event.target.closest(".custom-selector-wrapper") === el
      ) {
        return;
      }

      showSelector.value = false;
    };

    onMounted(() => {
      document.addEventListener("click", onClickOutside);
      selectedOption.value = props.default;
    });

    onBeforeMount(() => {
      document.removeEventListener("click", onClickOutside);
    });

    return {
      searchQuery,
      showSelector,
      popup,
      filteredList,
      selectedOption,
    };
  },
};
