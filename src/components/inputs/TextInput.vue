<template>
  <label
    v-if="!!label"
    :for="name"
    class="block text-gray-700 text-sm font-bold mb-2"
    :class="{ 'text-light': isLight }"
    ><br/>{{ label }}<br/></label>
  <input
    :name="name"
    v-model="value"
    class="resize-none shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    :class="{ 'text-center': isCenter }"
    :placeholder="placeholder"
    @input="validateInput"
    />
  <p v-if="inputError && isTouched" class="text-ns">{{ inputError }}</p>
</template>

<script>
export default {
  name: 'TextInput',
  data() {
    return {
      value: '',
      inputError: "",
      isTouched: false
    }
  },
  props: {
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    name: {
      type: String,
      required: true
    },
    isBig: {
      type: Boolean,
      default: false
    },
    isCenter: {
      type: Boolean,
      default: false
    },
    isLight: {
      type: Boolean,
      default: false
    },
    min: Number,
    max: Number,
  },
  methods: {
    validateInput() {
      const inputLength = this.value.length;
      if (inputLength < this.min) {
        this.inputError = `Minimum ${this.min} characters required`;
      } else if (inputLength > this.max) {
        this.inputError = `Maximum ${this.max} characters allowed`;
      } else {
        this.inputError = "";
      }

      this.isTouched = true;
    },
  }
}
</script>