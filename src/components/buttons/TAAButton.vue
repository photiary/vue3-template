<template>
  <!--  density를 null로 지정하여야 tailwind의 padding이 적용된다.  -->
  <v-btn rounded="lg" density="null" :class="$style['button-taa']">
    <template #prepend>
      <v-icon>mdi-lock</v-icon>
    </template>
    <span>Vuetify 버튼에 Tailwind CSS 적용</span>
  </v-btn>
</template>
<script setup></script>
<style module lang="scss">
.button-taa {
  @apply border-4 border-coral-red-400 bg-sand-white-200 p-8 text-light-ocean-500;
  text-transform: none !important; // Vuetify 버튼의 기본 속성 대문자를 무시
}
</style>
