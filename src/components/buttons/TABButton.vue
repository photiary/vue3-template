<template>
  <button
    type="button"
    class="w-64 rounded bg-light-ocean-500 px-4 py-2 text-sand-white-200 disabled:pointer-events-none disabled:opacity-50"
    :class="[{ 'active:scale-95': !isDisabled }]"
    :disabled="isDisabled"
  >
    Disabled button.
  </button>
</template>

<script setup>
defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style module lang="scss"></style>
