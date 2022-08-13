<template>
  <div>
    <div v-if="isLoading">
      <div class="flex flex-col h-screen w-screen justify-center items-center bg-black">
        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_0fvcgy9k.json"  background="transparent"  speed="1"  class="w-1/2 h-1/2"  loop autoplay></lottie-player>
        <div>
          <span class="text-white text-3xl font-thin">Fetching Components</span>
        </div>
      </div>
    </div>

    <div v-else>
      <img :src="require('~/static/beams.jpg')" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 h-full w-full z-0" width="2000" />

      <transition-group 
        enter-active-class="duration-500 ease-in-out"
        enter-from-class="transform-gpu opacity-0"
        enter-to-class="opacity-100 -translate-y-full"
        leave-active-class="duration-500 ease-in-out"
        leave-from-class="opacity-100"
        leave-to-class="transform-gpu opacity-0 translate-y-full"
        mode="out-in"
      >
        <div v-if="CardStatus === 0" key="intro">
          <div class="relative flex items-center justify-center h-screen">
            <div class="flex flex-col gap-2">
              <main-intro></main-intro>
              <div class="grid grid-cols-2 grid-flow-col gap-2">
                <div class="form-control w-full">
                  <select
                    class="select select-bordered h-full shadow-xl font-sans font-bold text-2xl"
                    @change="$i18n.setLocale($event.target.value)">
                    <option disabled selected>{{ $t('Intro.changeLanguage') }}</option>
                    <option
                      v-for="locale in availableLocales"
                      :key="locale.code"
                      :value="locale.code">{{ locale.name }}</option>
                  </select>
                </div>
                <button class="items-center p-3 font-sans font-bold text-2xl bg-white divide-y rounded-lg shadow-xl" @click="CardStatus = 1">{{ $t('Intro.start') }}</button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="CardStatus === 1" key="maincard">
          <div class="relative flex items-center justify-center h-screen">
            <div class="grid gap-6 xl:grid-rows-2 xl:grid-cols-2 w-[90%] h-[90%]">
              <cards-news-card class="bg-gray-100 xl:col-start-1 xl:row-span-2 xl:row-start-1"></cards-news-card>
              <cards-input-card class="bg-gray-100 xl:col-start-2 xl:row-span-1 xl:row-start-1"></cards-input-card>
              <cards-analyze-card class="bg-gray-100 xl:col-start-2 xl:row-span-1 xl:row-start-2"></cards-analyze-card>
            </div>
          </div>
        </div>
      </transition-group>
      
      <div v-shortkey.once="['ctrl', 'r']" @shortkey="ClearStatus()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  data: () => {
    return {
      CardStatus: 0,
      isLoading: true
    };
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  mounted () {
    this.isLoading = false;
  },
  methods: {
    ClearStatus (event) {
      this.CardStatus = 0
    }
  },
};
</script>