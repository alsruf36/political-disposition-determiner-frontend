<template>
    <div class="items-center p-5 overflow-y-auto font-sans bg-white shadow-xl w-full h-full z-10 rounded-lg"
    @click="get_content()">
        <div>
            <h1 class="text-4xl font-extrabold nonp"> <span class="underline decoration-indigo-500">{{ $t('newsCard.title') }}</span></h1>
        </div>
        <div :class="[
        'content-center justify-center my-4 transition duration-300 ease-in-out transform',
        content.status === 'start' ? 'blur-xl' : 'blur-none'
        ]">

            <div>
                <div v-if="content.status === 'fail'">
                <div class="shadow-xl p-3.5 mb-3.5 rounded-xl text-gray-700 bg-gray-100">
                    <h2 class="p-2 text-3xl font-bold">{{ $t('statusCheckMsg.failCheck') }}</h2>
                    <h3 class="text-xl font-bold text-gray-500">{{ content.status_msg }}</h3>
                </div>
                </div>
                <div v-else class="shadow-xl p-3.5 mb-3.5 rounded-xl text-gray-700 bg-gray-100">
                    <h2 class="p-2 text-3xl font-bold">{{ content.news_title }}</h2>
                    <h3 class="text-xl font-bold text-gray-500">{{ content.news_subtitle }}</h3>
                </div>
                <div class="shadow-xl p-3.5 mb-3.5 rounded-xl text-gray-200 bg-gray-900">
                    <h3 class="p-2.5 font-semibold text-xl">{{ $t('newsCard.summary') }}</h3>
                    <pre class="p-2.5 font-extralight tracking-normal">{{ content.news_summary }}</pre>
                </div>
                <div class="shadow-xl p-3.5 rounded-xl text-gray-900 bg-gray-200">
                    <h3 class="p-2.5 font-semibold text-xl">{{ $t('newsCard.body') }}</h3>
                    <pre class="p-2.5 font-extralight tracking-normal">{{ content.news_content }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'newsCard',
  props:['rect', 'id'],
  computed: {
    ...mapGetters({
        content: 'news/return_content',
        focusID: 'focus/get_focusID',
    })
  },
  methods: {
    ...mapActions({
      get_content: 'news/get_content',
    }),

    ...mapMutations({
        set_focusID: 'focus/set_focusID',
    })
  },
};
</script>