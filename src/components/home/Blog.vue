<template>
  <section class="relative bg-cover bg-no-repeat bg-center" :class="BGImage">
    <!-- 黑色遮罩 -->
    <div class="relative h-full bg-black opacity-20"></div>
    <!-- 內容 -->
    <div class="absolute top-0 w-full h-full flex justify-center items-center">
      <div class="w-4/5 h-4/5 flex justify-center items-center border border-white">
        <a href="" class="text-white text-2xl"><slot name="linkName"></slot></a>
        <span class="text-white"><slot name="postNum"></slot></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog",
  props: {
    BGImage: String
  }
};
</script>
