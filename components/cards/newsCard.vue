<template>
    <div class="items-center p-5 overflow-y-auto font-sans bg-white shadow-xl"
    :class="[
        'transition-all transform-gpu duration-[600ms] ease-[cubic-bezier(.59,-0.23,0,1.17)]',
        focusID === id ? `z-50 h-screen w-screen rounded-none` : 'w-full h-full z-10 rounded-lg'
    ]"
    @click="get_content()">
        <div>
            <h1 class="text-4xl font-extrabold nonp"> <span class="underline decoration-indigo-500">{{ $t('newsCard.title') }}</span></h1>
        </div>
        <div :class="[
        'content-center justify-center my-4 transition duration-300 ease-in-out transform',
        content.status === 'start' ? 'blur-xl' : 'blur-none'
        ]">

            <div>
                <div class="shadow-xl p-3.5 mb-3.5 rounded-xl text-gray-700 bg-gray-100">
                    <h2 class="p-2 text-3xl font-bold">{{ content.news_title }}</h2>
                    <h3 class="text-xl font-bold text-gray-500">{{ content.news_subtitle }}</h3>
                </div>
                <div class="shadow-xl p-3.5 mb-3.5 rounded-xl text-gray-200 bg-gray-900">
                    <h3 class="p-2.5 font-semibold text-xl">요약</h3>
                    <pre class="p-2.5 font-extralight tracking-normal">{{ content.news_summary }}</pre>
                </div>
                <div class="shadow-xl p-3.5 rounded-xl text-gray-900 bg-gray-200">
                    <h3 class="p-2.5 font-semibold text-xl">본문</h3>
                    <pre class="p-2.5 font-extralight tracking-normal">{{ content.news_content }}</pre>
                </div>
            </div>

            <div v-if="content.status === 'fail'">
                <div class="shadow-xl p-3.5 mb-3.5 rounded-xl text-gray-700 bg-gray-100">
                    <h2 class="p-2 text-3xl font-bold">불러오는데 실패하였습니다.. 😓</h2>
                    <h3 class="text-xl font-bold text-gray-500">{{ content.status_msg }}</h3>
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