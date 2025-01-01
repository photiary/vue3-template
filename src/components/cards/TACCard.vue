<template>
  <div :class="$style['flip-card']">
    <div :class="$style['flip-card-inner']">
      <div :class="$style['flip-card-front']">
        <v-card
          class="w-full"
          prepend-icon="mdi-headphones"
          subtitle="The #1 Vue UI Library"
        >
          <template #title>
            <span class="font-bold">Front.</span>
          </template>
          <v-card-text class="h-32 bg-sky-200 pt-4"> Flip Card. </v-card-text>
        </v-card>
      </div>
      <div :class="$style['flip-card-back']">
        <v-card class="w-full" prepend-icon="mdi-bell" subtitle="The #1 Flip">
          <template #title>
            <span class="font-bold">Back</span>
          </template>
          <v-sheet class="flex h-32 items-center justify-center">
            <v-otp-input
              v-model="otp"
              type="password"
              variant="solo"
            ></v-otp-input>
          </v-sheet>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const otp = ref('');
</script>

<style module lang="scss">
.flip-card {
  @apply bg-transparent [perspective:100rem];
}

.flip-card-inner {
  @apply grid h-full w-full grid-cols-1 transition-transform duration-700 [transform-style:preserve-3d];
}

.flip-card:hover .flip-card-inner {
  @apply [transform:rotateX(180deg)];
}

.flip-card-front,
.flip-card-back {
  @apply col-start-1 col-end-1 row-start-1 row-end-1 h-full w-full [backface-visibility:hidden];
}

.flip-card-back {
  @apply [transform:rotateX(180deg)];
}
</style>
