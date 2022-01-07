<template>
    <div class="items-center w-3/4 p-5 overflow-y-auto font-sans bg-white rounded-lg shadow-xl h-3/4" @click="get_content">
        <div>
            <h1 class="text-4xl font-extrabold"> <span class="underline decoration-indigo-500">{{ $t('inputCard.title') }}</span></h1>
        </div>
        <div class="content-center justify-center my-4 transition duration-300 ease-in-out transform">
           
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'inputCard',
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