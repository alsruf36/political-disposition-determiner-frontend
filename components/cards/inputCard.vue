<template>
    <div class="items-center w-3/4 p-5 overflow-y-auto font-sans bg-white rounded-lg shadow-xl h-3/4" @click="get_content">
        <div class="h-full">
            <div>
                <h1 class="text-4xl font-extrabold"> <span class="underline decoration-indigo-500">{{ $t('inputCard.title') }}</span></h1>
            </div>
            <div class="content-center justify-center my-4 h-5/6">
                <textarea class="w-full h-full px-3 py-2 mb-1.5 text-gray-700 border border-gray-500 rounded shadow appearance-none resize-none focus:outline-none focus:shadow-outline" v-model="sentence"></textarea>
                <button class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        분석하기
                    </span>
                </button>
            </div>
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
        content: 'news/return_content',
    }),
    ...mapFields('analyze', ['sentence']),
  },
  methods: {
    ...mapActions({
      get_content: 'news/get_content',
    })
  }
};
</script>