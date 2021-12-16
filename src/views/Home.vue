<template>
  <main class="mt-4">
    <section class="flex">
      <section class="test relative w-1/4 lg:w-1/2 flex items-center content-center flex-wrap py-8">
        <div class="absolute lg:-right-1/4 -right-full">
          <div class="text-antiqueBrass">SIMPLE WAYS TO</div>
          <h2 class="text-6vw leading-none">Free Coaching</h2>
          <h2 class="text-6vw leading-none">Seasion</h2>
        </div>
      </section>
      <section class="w-3/4 lg:w-1/2 bg-cover">
        <img src="~@/assets/images/alyssa-strohmann-CGXxpcUrhdo-unsplash.jpeg" alt="" />
      </section>
    </section>

    <!-- service -->
    <section class="max-w-screen-xl mx-auto px-3 py-16">
      <h6 class="text-center text-antiqueBrass">WORK WITH ME</h6>
      <h2 class="text-center text-3xl">Our Service</h2>
      <div class="text-center">
        <span class="inline-block w-px h-14 bg-antiqueBrass"></span>
      </div>
      <section class="grid grid-cols-1 sm:grid-cols-3 gap-x-4 -mt-4">
        <Service :linkHref="'#'" :imgFileName="'service1.jpeg'">
          <template v-slot:icon><font-awesome-icon icon="sun" /></template>
          <template v-slot:title>Moving Fashion Forward</template>
        </Service>
        <Service class="my-12" :linkHref="'#'" :imgFileName="'service2.jpeg'">
          <template v-slot:icon><font-awesome-icon icon="leaf" /></template>
          <template v-slot:title>Headline Goes Here</template>
        </Service>
        <Service :linkHref="'#'" :imgFileName="'service3.jpeg'">
          <template v-slot:icon><font-awesome-icon icon="history" /></template>
          <template v-slot:title>Your Headline in Here</template>
        </Service>
      </section>
    </section>

    <!-- AzuraTheme -->
    <section class="bg-springWood">
      <section class="max-w-screen-xl mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 gap-8 py-16">
        <div class="relative">
          <div class="absolute w-7/12 h-full flex items-center">
            <img src="../assets/images/AzuraTheme1.jpeg" alt="" class="bg-white p-2" />
          </div>
          <img src="../assets/images/AzuraTheme2.jpeg" alt="" class="ml-auto" />
        </div>
        <div class="flex flex-col justify-center items-baseline gap-y-4">
          <p class="text-antiqueBrass">Hey there !!!</p>
          <h2 class="text-2xl">We are AzuraTheme</h2>
          <p class="text-gray my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus minus voluptates consequuntur
            maiores! Dicta ipsa dolor corrupti laborum nulla minima veniam natus eos sed id beatae delectus, dolores
            nisi!
          </p>
          <a href="" class="btn btn-antiqueBrass">Read More</a>
        </div>
      </section>
    </section>

    <!-- blog -->
    <section class="relative bg-blogBG bg-contain bg-no-repeat bg-center py-12">
      <section class="absolute top-0 w-full h-full bg-white opacity-80"></section>
      <section class="relative max-w-screen-xl mx-auto px-3">
        <h6 class="text-antiqueBrass font-semibold">BROWSE CATEGORIES</h6>
        <h2 class="lg:w-2/3 w-full lg:text-5xl text-3xl">Need Help? Let me be your new blogging besite</h2>
        <section class="grid sm:grid-cols-3 grid-cols-1 sm:gap-x-8 gap-y-8 mt-8 min-h-500">
          <Blog :BGImage="'bg-blog1'">
            <template v-slot:linkName>Lifestyle</template>
            <template v-slot:postNum>9 post</template>
          </Blog>
          <Blog :BGImage="'bg-blog2'">
            <template v-slot:linkName>Living</template>
            <template v-slot:postNum>3 post</template>
          </Blog>
          <Blog :BGImage="'bg-blog3'">
            <template v-slot:linkName>Featured</template>
            <template v-slot:postNum>7 post</template>
          </Blog>
        </section>
      </section>
    </section>

    <!-- THE LATEST -->
    <section class="max-w-screen-xl mx-auto px-3 py-16">
      <h6 class="text-center text-antiqueBrass">THE LATEST</h6>
      <h2 class="text-center text-3xl">What’s New on the Blog?</h2>
      <div class="text-center">
        <span class="inline-block w-px h-14 bg-antiqueBrass"></span>
      </div>
      <section class="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-8 gap-y-10">
        <Card :imgFileName="'latest1.jpg'" :date="'2021-07-24'"></Card>
        <Card :imgFileName="'latest2.jpg'" :date="'2021-06-15'"></Card>
        <Card :imgFileName="'latest3.jpg'" :date="'2021-08-28'"></Card>
      </section>
    </section>
  </main>
</template>

<script>
import Service from "@/components/home/Service.vue"
import Blog from "@/components/home/Blog.vue"
import Card from "@/components/Card.vue"
export default {
  name: "Home",
  components: {
    Service,
    Blog,
    Card,
  },
}
</script>
<style scoped>
.test {
  background-color: transparent;
  background-image: linear-gradient(180deg, #f5f5f5 50%, #eae1da 50%);
}
</style>
