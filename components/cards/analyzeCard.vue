<template>
    <div class="items-center w-full h-full p-5 overflow-y-auto font-sans bg-white rounded-lg shadow-xl">
        <div class="h-full">
            <div class="mb-2.5">
                <h1 class="text-4xl font-extrabold">
                    <span class="underline decoration-indigo-500">{{ $t('analyzeCard.title') }}</span>
                </h1>
            </div>
            <div>{{ content }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'analyzeCard',
  computed: {
    ...mapGetters({
        content: 'analyze/return_result',
    }),
  },
};
</script>