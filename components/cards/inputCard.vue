<template>
    <div class="items-center w-full h-full p-5 overflow-y-auto font-sans bg-white rounded-lg shadow-xl">
        <div class="h-full">
            <div class="mb-2.5">
                <h1 class="text-4xl font-extrabold"> <span class="underline decoration-indigo-500">{{ $t('inputCard.title') }}</span></h1>
            </div>
            <div class="w-full relative inline-flex items-center justify-center p-0.5 mb-2.5 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 h-2/3">
                <textarea class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md shadow appearance-none resize-none focus:outline-none focus:shadow-outline h-full text-xl font-extralight" v-model="sentence"></textarea>
            </div>
            <button v-shortkey.once="['f2']" @shortkey="get_result" @click="get_result" class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    분석하기
                    <kbd class="kbd kbd-sm">F2</kbd>
                </span>
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'inputCard',
  computed: {
    ...mapGetters({
        content: 'analyze/return_result',
    }),
    ...mapFields('analyze', ['sentence']),
  },
  methods: {
    ...mapActions({
      get_result: 'analyze/get_result',
    })
  }
};
</script>