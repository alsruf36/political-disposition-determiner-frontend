<template>
    <div class="items-center p-5 font-sans bg-white divide-y rounded-lg shadow-xl">
        <a>{{ $t('statusCheckMsg.checking') }}</a>
    </div>
</template>

<script>
export default {
  name: 'pingHeartbeat',
};
</script>