<template>
    <div class="items-center p-5 font-sans bg-white divide-y rounded-lg shadow-xl">
        <a>{{ $t('statusCheckMsg.checking') }}</a>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'pingHeartbeat',
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