<template>
    <div class="items-center p-5 font-sans bg-white divide-y rounded-lg shadow-xl">
        <div>
            <h1 class="text-2xl font-extrabold"><a class="px-2 text-white box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500">{{ $t('Intro.hello') }} 👋</a></h1>
            <h2 class="text-2xl font-extrabold"> <span class="underline decoration-indigo-500">{{ $t('Intro.self') }}</span></h2>
        </div>
        <div class="text-xl leading-relaxed whitespace-pre-line font-extralight">
            {{ $t('Intro.cardExplanation') }}
            <div v-html="$t('Intro.analyzeExplanation')"></div>

            <a class="font-medium">{{ $t('Intro.getStarted') }}</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainIntro',
};
</script>