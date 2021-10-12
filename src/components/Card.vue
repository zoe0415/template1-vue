<template>
  <section class="border border-gray-light">
    <!-- image、icon -->
    <div class="relative">
      <a href=""><img :src="require(`@/assets/images/${imgFileName}`)" alt="" /></a>
      <div
        class="
          diamond
          absolute
          -bottom-10
          left-4
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
    <div class="relative px-6 py-12">
      <h3 class="text-2xl">
        <a href="">Excepteur Sint Occaecat Cupidatat Non</a>
      </h3>
      <div class="mt-4">
        <span class="mr-4">
          <font-awesome-icon :icon="['far', 'user']" class="mr-2 text-xl text-antiqueBrass" />admin</span
        >
        <span> <font-awesome-icon :icon="['far', 'comment']" class="mr-2 text-xl text-antiqueBrass" />Comment </span>
      </div>
      <p class="text-gray clamp clamp-3 mt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque perspiciatis, eius hic numquam ullam doloribus
        quaerat omnis molestiae itaque necessitatibus inventore doloremque dolore ducimus veniam minus? Beatae pariatur
        commodi aliquam!
      </p>
      <div class="absolute -bottom-5 bg-white">
        <a href="" class="btn btn-black">Read More</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Card",
  props: {
    imgFileName: String,
    date: String,
  },
  // methods: {
  //   handleMonth
  // }
}
</script>
