<template>
  <div>
    <script src="https://cdn.tailwindcss.com"></script>
    <div class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    <div class="relative flex items-center justify-center h-screen overflow-hidden bg-gray-600 dark:bg-gray-800/25">
      <div id="mainDiv" class="grid gap-6 shadow-2xl xl:grid-rows-6 xl:grid-cols-2"
      :class="[
        'transition-all transform-gpu duration-[600ms] ease-[cubic-bezier(.79,-0.02,.06,1.1)]',
        focusID === 0 ? 'w-[95%] h-[95%] rounded-xl' : 'w-screen h-screen rounded-none'
      ]">
        <CardsNewsCard :rect="size" :id="1" class="bg-gray-100 xl:col-start-1 xl:row-span-5 xl:row-start-1" />
        <CardsStatusCard class="bg-gray-100 xl:col-start-1 xl:row-span-1 xl:row-start-6" />
        <CardsInputCard class="bg-gray-100 xl:col-start-2 xl:row-span-3 xl:row-start-1" />
        <CardsAnalyzeCard class="bg-gray-100 xl:col-start-2 xl:row-span-2 xl:row-start-4" />
        <CardsSettingCard class="bg-gray-100 xl:col-start-2 xl:row-span-1 xl:row-start-6" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'newsCard',
  data: () => {
    return {
      size: {
        height: 0,
        width: 0,
      },
    };
  },
  computed: {
    ...mapGetters({
        focusID: 'focus/get_focusID',
    })
  },
  destroyed () {
    window.removeEventListener("resize", this.modifySize);
  },
  mounted () {
    window.addEventListener("resize", this.modifySize);
    this.modifySize()
  },
  methods: {
    modifySize(e) {
      const elem = document.getElementById("mainDiv");
      const rect = elem.getBoundingClientRect();
      this.size = rect;
    }
  }
};
</script>