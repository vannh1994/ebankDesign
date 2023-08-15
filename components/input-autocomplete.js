const inputAutocompleteComponent = {
  template: `
    <div ref="popup" class="input-autocomplete-wrapper">
      <div class="input-group label-transition">
          <div class="form-label">
            <input
              ref="input"
              v-model="selectedOption"
              type="text"
              class="form-control input-text-bold"
              @focus="showSelector = true"
              @focusout="showSelector = false"
            />
            <label>{{ placeholder }}<span v-if="required">*</span> </label>
          </div>
          <div class="input-group-append">
            <div class="input-group-text">
              <i class="isax isax-search-status"></i>
            </div>
          </div>
        <!-- End -->
      </div>
    

      <transition>
        <div v-if="showSelector" class="input-autocomplete-popup">
          <div class="option-list">
            <div
              v-for="option in filteredList"
              class="option-item"
              @click="selectedOption = option.value; showSelector = false; focusInput(); $emit('update:modelValue', option)"
            >
              <slot name="option" :option="option">
                {{ option.value }}
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  `,
  props: ["modelValue", "options", "placeholder", "required"],
  emits: ["update:modelValue"],
  setup(props) {
    const showSelector = ref(false);
    const input = ref(null);
    const popup = ref(null);
    const selectedOption = ref(null);

    const filteredList = computed(() => {
      if (selectedOption.value) {
        return (props.options || []).filter((x) =>
          x["value"].toLowerCase().includes(selectedOption.value.toLowerCase())
        );
      } else {
        return props.options;
      }
    });

    const focusInput = () => {
      input.value.classList.add("hascontent");
    };

    const onClickOutside = (event) => {
      const el = popup.value;
      if (
        !el ||
        el === event.target ||
        event.target.closest(".input-autocomplete-wrapper") === el
      ) {
        return;
      }

      showSelector.value = false;
    };

    onMounted(() => {
      document.addEventListener("click", onClickOutside);
    });

    onBeforeMount(() => {
      document.removeEventListener("click", onClickOutside);
    });

    return {
      showSelector,
      input,
      popup,
      filteredList,
      selectedOption,
      focusInput,
    };
  },
};
