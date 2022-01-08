<template>
    <div class="items-center w-full h-full p-5 overflow-y-auto font-sans bg-white rounded-lg shadow-xl" @click="get_content">
        <div>
            <h1 class="text-4xl font-extrabold"> <span class="underline decoration-indigo-500">{{ $t('newsCard.title') }}</span></h1>
        </div>
        <div class="content-center justify-center my-4 transition duration-300 ease-in-out transform">
            
            <div v-if="content.status == 'success'">
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

            <div v-else-if="content.status === 'fail'">
                <h2 class="text-3xl font-bold">불러오는데 실패하였습니다.. 😓</h2>
                <p class="text-lg font-extralight">{{ content.status_msg }}</p>
            </div>
            
            <div v-else>
                <div class="text-2xl font-extrabold">
                    <p v-if="content.status === 'none'">시작하기</p>
                    <div v-else>
                        <p :class="[
                            'transition ease-in-out duration-300 transform',
                            content.status === 'start' ? 'text-black font-extrabold' : 'text-gray-400 font-extralight'
                        ]">결과를 받는 중</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'newsCard',
  computed: {
    ...mapGetters({
        content: 'news/return_content',
    })
  },
  methods: {
    ...mapActions({
      get_content: 'news/get_content',
    })
  }
};
</script>