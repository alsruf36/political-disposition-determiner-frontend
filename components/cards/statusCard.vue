<template>
    <div class="items-center p-5 font-sans bg-white divide-y rounded-lg shadow-xl" @click='get_api_server_status'>
        <a>{{ $t('statusCheckMsg.checking') }}</a>
        <div>{{ api_server_status }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'statusCard',
  computed: {
    ...mapGetters({
        api_server_status: 'status/return_api_server_status',
    })
  },
  methods: {
    ...mapActions({
      get_api_server_status: 'status/get_api_server_status',
    })
  }
};
</script>