<template>
  <section class="border border-gray-light">
    <!-- tag -->
    <div class="relative flex items-center justify-center mx-auto w-16 h-16 bg-antiqueBrass text-white text-2xl">
      <span class="absolute left-0 -top-4 inline-block w-16 h-4 bg-antiqueBrass"></span>
      <div class="absolute -top-6 -right-4 w-4 overflow-hidden inline-block">
        <div class="h-6 bg-antiqueBrass opacity-70 -rotate-45 transform origin-bottom-right"></div>
      </div>
      <slot name="icon"></slot>
    </div>

    <!-- title、data -->
    <div class="text-center mt-4 p-4">
      <h4 class="mb-2 text-xl"><slot name="title"></slot></h4>
      <div class="text-gray">
        <slot name="data"></slot>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Card",
}
</script>
