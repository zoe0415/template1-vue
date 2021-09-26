<template>
  <section>
    <!-- image、icon -->
    <div class="relative">
      <img :src="require(`@/assets/images/${imgFileName}`)" alt="" class="mx-auto">
      <div class="absolute -bottom-7 md:-bottom-10 w-full text-center">
        <div class="w-14 h-14 md:w-20 md:h-20 mx-auto flex justify-center items-center rounded-full bg-antiqueBrass text-white text-2xl">
          <slot name="icon"></slot>
        </div>
      </div>
    </div>

    <!-- title、description、link -->
    <h4 class="mt-16 md:mt-20 mb-4 text-2xl text-center"><slot name="title"></slot></h4>
    <div class="mb-4 text-center text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci repudiandae aut doloribus et, temporibus, nulla quod eius illo saepe suscipit expedita at totam dolores. Velit, magnam. Dicta, explicabo distinctio.</div>
    <div class="text-center"><a :href="linkHref" class="text-antiqueBrass border-b">VIEW MORE</a></div>
  </section>
</template>

<script>
export default {
  name: "Service",
  props: {
    linkHref: String,
    imgFileName: String
  }
};
</script>
