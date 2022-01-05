<template>
    <div class="relative flex items-center justify-center h-screen overflow-hidden bg-gray-50 dark:bg-gray-800/25">
        <div class="items-center p-5 font-sans bg-white divide-y rounded-lg shadow-xl">
            <div>
                <h1 class="text-2xl font-extrabold"><a class="px-2 text-white box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500">안녕하세요! 👋</a></h1>
                <h2 class="text-2xl font-extrabold"> <span class="underline decoration-indigo-500">정치 성향 판별기</span>에 대하여 알아볼게요.</h2>
            </div>
            <div class="text-xl leading-relaxed whitespace-pre-line font-extralight">
                정치 성향 판별기는 두 섹션을 가지고 있습니다.
                왼쪽 섹션은 여러분이 의견을 쓸 뉴스를 랜덤으로 제시합니다.
                오른쪽 섹션은 뉴스에 대한 의견을 쓸 수 있습니다.

                <a class="font-semibold p-1.5">분석하기</a> 버튼을 누르면 인공지능이 당신의 의견을 분석하여
                당신이 <a class="font-semibold underline decoration-red-500">보수</a>인지 아니면 <a class="font-semibold underline decoration-blue-500">진보</a>인지 알려주게 됩니다.

                <a class="font-medium">자, 이제 당신의 정치 성향을 분석해볼까요? 저를 클릭해주세요!</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoadMain',
};
</script>