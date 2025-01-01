<template>
  <div :class="$style.container">
    <div :class="$style['item-list']">
      <div :class="$style.item">1</div>
      <div :class="$style.item">2</div>
      <div :class="$style.item">3</div>
    </div>
    <v-divider thickness="2"></v-divider>
    <div :class="$style['item-list']">
      <div class="basis-3/12" :class="$style.item">25%</div>
      <div class="basis-3/12" :class="$style.item">25%</div>
      <div class="basis-6/12" :class="$style.item">50%</div>
    </div>
    <v-divider thickness="2"></v-divider>
    <div :class="$style.card">Card</div>
  </div>
</template>

<script setup></script>

<style module lang="scss">
.container {
  @apply flex flex-col gap-8;

  .item-list {
    @apply flex gap-4;

    .item {
      @apply flex-1 border-4 p-2;
    }
  }

  .card {
    @apply border-4 p-2 text-center;
  }
}
</style>
