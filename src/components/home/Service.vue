<template>
  <section>
    <div class="relative">
      <slot name="image"></slot>
      <div class="absolute -bottom-10 w-full text-center">
        <div class="w-20 h-20 mx-auto flex justify-center items-center rounded-full bg-antiqueBrass text-white text-2xl">
          <slot name="icon"></slot>
        </div>
      </div>
    </div>
    <h4 class="text-2xl"><slot name="title"></slot></h4>
  </section>
</template>

<script>
export default {
  name: "Service",
};
</script>
