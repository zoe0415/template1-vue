<template>
  <section class="relative">
    <!-- image、icon -->
    <div class="relative max-h-500 flex items-center justify-center overflow-hidden">
      <img :src="require(`@/assets/images/${imgFileName}`)" alt="" class="w-full" />
      <div
        class="
          diamond
          absolute
          top-8
          left-8
          flex
          items-center
          justify-center
          flex-col
          w-20
          h-20
          bg-antiqueBrass
          text-white
        "
      >
        <span class="border-b border-white">{{ date.split("-")[2] }}</span>
        <span>{{ new Date(date).toDateString().split(" ")[1] }}</span>
      </div>
    </div>

    <!-- description -->
    <section class="relative w-9.5/10 bg-white p-10 pb-16 -mt-10 shadow-md">
      <h3 class="text-3xl"><a href="">Excepteur Sint Occaecat Cupidatat Non</a></h3>
      <div class="mt-4">
        <span class="mr-4">
          <font-awesome-icon :icon="['far', 'user']" class="mr-2 text-xl text-antiqueBrass" />admin</span
        >
        <span> <font-awesome-icon :icon="['far', 'comment']" class="mr-2 text-xl text-antiqueBrass" />Comment </span>
        <span> <font-awesome-icon :icon="['far', 'heart']" class="mr-2 text-xl text-antiqueBrass" />lifeStyle </span>
      </div>
      <p class="text-gray clamp clamp-3 mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam optio eum libero dicta culpa magni dolore, facere
        sequi? Quo facere similique voluptatum alias nemo facilis ipsum at dignissimos nostrum reprehenderit.
      </p>
      <div class="absolute -bottom-5 bg-white">
        <a href="" class="btn btn-black">Read More</a>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: "StandardCard",
  props: {
    imgFileName: String,
    date: String,
  },
}
</script>
