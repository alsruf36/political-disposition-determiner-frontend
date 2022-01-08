<template>
    <div class="items-center w-full h-full p-5 overflow-y-auto font-sans bg-white rounded-lg shadow-xl">
        <div class="h-full">
            <div class="mb-2.5">
                <h1 class="text-4xl font-extrabold">
                    <span class="underline decoration-indigo-500">{{ $t('analyzeCard.title') }}</span>
                </h1>
            </div>
            <div v-if="content.status === 'success'" class="p-2 rounded-lg shadow-xl w-full h-[90] bg-gray-900">
                <div v-for="(sentence, idx) in content.analyzed" v-bind:key="idx" class="p-1">
                    <div :class="[
                            'w-full p-2 text-lg text-gray-300 rounded-lg shadow-xl font-extralight',
                            sentence[1] === 0 ? 'bg-red-600' : 'bg-indigo-600'
                        ]">{{ sentence[0] }}</div>
                </div>
            </div>
            <div v-else-if="content.status === 'fail'">
                <h2 class="text-3xl font-bold">분석하는데 실패하였습니다.. 😓</h2>
                <p class="text-lg font-extralight">{{ content.status_msg }}</p>
            </div>
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