<template>
  <div
    :class="[$style.container, heightClass]"
    :style="{ backgroundImage: `url(${cocaColaImage})` }"
    @click="clickCard"
  >
    <div>
      <div class="flex items-end justify-between">
        <div class="text-sm font-bold text-gray-500">{{ info.subText }}</div>
        <v-icon
          class="transition duration-150 ease-in-out active:scale-75"
          size="large"
          :color="isSelectedHeart ? 'grey-darken-4' : 'grey-lighten-1'"
          :icon="isSelectedHeart ? 'mdi-heart' : 'mdi-heart-outline'"
          @click.stop="clickHeart"
        ></v-icon>
      </div>
      <div class="mt-1 whitespace-pre text-xl font-bold text-gray-800">
        {{ info.mainText }}
      </div>
      <v-chip v-if="isShowExtraTextChip" size="small" variant="flat"
        ><span class="font-bold">D-7</span></v-chip
      >
      <div v-else class="mt-1 text-sm tracking-widest text-gray-500">
        {{ info.extraText }}
      </div>
    </div>

    <div class="flex flex-row gap-x-4">
      <div class="basis-8/12">
        <v-btn
          class="w-full border-2"
          color="grey-darken-2"
          rounded="lg"
          prepend-icon="mdi-home-modern"
          variant="outlined"
        >
          3층 선물 더보기
        </v-btn>
      </div>
      <div class="basis-4/12">
        <v-btn
          class="w-full border-2"
          rounded="lg"
          color="grey-darken-1"
          variant="outlined"
          :loading="isLoading"
          @click.stop="clickButton"
          >받기
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import cocaColaImage from '@/assets/cocacola.png';
import { computed, ref } from 'vue';

const info = {
  subText: '코카콜라',
  mainText: '세일 페스타\n10% 할인',
  extraText: '24.2.8 ~ 25.2.7',
  size: 'large',
};
const isSelectedCard = ref(false);
const isSelectedHeart = ref(false);
const isShowExtraTextChip = ref(true);

const heightClass = computed(() => {
  return info.size === 'small' ? 'h-48' : 'h-80';
});

const clickCard = () => {
  console.log('click card.');
  isSelectedCard.value = !isSelectedCard.value;
};

const clickHeart = () => {
  console.log('click heart.');
  isSelectedHeart.value = !isSelectedHeart.value;
};

const isLoading = ref(false);
const clickButton = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>

<style module lang="scss">
.container {
  @apply flex flex-col justify-between rounded-xl bg-orange-400 bg-cover bg-center p-4 transition duration-500 ease-in-out active:scale-95;
}
</style>
