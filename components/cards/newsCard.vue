<template>
    <div class="items-center p-5 font-sans bg-white divide-y rounded-lg shadow-xl h-3/4">
        <div>
            <h1 class="text-2xl font-extrabold"> <span class="underline decoration-indigo-500">{{ $t('newsCard.title') }}</span></h1>
        </div>
        <div class="content-center justify-center">
            <h2>{{ get_title }}</h2>
            <button @click="get_content">불러오기</button>
        </div>
        <div class="content-center justify-center">
            <h2>{{ api_server_status }}</h2>
            <button @click="get_api_server_status">불러오기</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'newsCard',
  computed: {
    ...mapGetters({
        get_title: 'news/return_content',
        api_server_status: 'status/return_api_server_status'
    })
  },
  methods: {
    ...mapActions({
      get_content: 'news/get_content',
      get_api_server_status: 'status/get_api_server_status'
    })
  }
};
</script>