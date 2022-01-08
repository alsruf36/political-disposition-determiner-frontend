<template>
    <div class="items-center w-full h-full p-5 overflow-y-auto font-sans bg-white rounded-lg shadow-xl">
       
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