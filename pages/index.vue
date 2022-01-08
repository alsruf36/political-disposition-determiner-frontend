<template>
  <div class="relative flex items-center justify-center h-screen overflow-hidden bg-gray-900 dark:bg-gray-800/25">
    <div class="grid w-[95%] gap-6 shadow-2xl h-[95%] xl:grid-rows-6 xl:grid-cols-2 rounded-xl bg-gray-700">
      <CardsNewsCard class="xl:col-start-1 xl:row-span-5 xl:row-start-1" />
      <CardsStatusCard class="xl:col-start-1 xl:row-span-1 xl:row-start-6" />
      <CardsInputCard class="xl:col-start-2 xl:row-span-3 xl:row-start-1" />
      <CardsAnalyzeCard class="xl:col-start-2 xl:row-span-2 xl:row-start-4" />
    </div>
  </div>
</template>

<script>
</script>