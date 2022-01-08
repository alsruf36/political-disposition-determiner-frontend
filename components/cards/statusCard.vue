<template>
    <div class="grid p-5 font-sans text-3xl font-bold bg-white rounded-lg shadow-xl place-content-center">
        <div v-if="api_server_status === 'none'">
          <a>{{ $t('statusCheckMsg.checking') }} 🔄</a>
        </div>
        <div v-else-if="api_server_status.live === 'true'">{{ $t('statusCheckMsg.status') }} ✅</div>
        <div v-else-if="api_server_status === 'false'">{{ $t('statusCheckMsg.status') }} ❌</div>
        <div v-else-if="api_server_status === 'pending'">
          <a>{{ $t('statusCheckMsg.status') }} 🔄</a>
        </div>
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
  },
  mounted() {
      setInterval(this.get_api_server_status, 3000);
  }
};
</script>