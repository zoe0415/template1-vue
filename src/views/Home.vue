<template>
  <main class="mt-4">
    <section class="min-h-850 flex">
      <section class="test relative w-1/2 flex items-center content-center flex-wrap py-8 ">
        <div  class="absolute -right-24 top-72">
          <div class="text-antiqueBrass">SIMPLE WAYS TO</div>
          <h2 class="text-6vw leading-none">Free Coaching</h2>
          <h2 class="text-6vw leading-none">Seasion</h2>
        </div>
      </section>
      <section class="w-1/2 bg-alyssa bg-cover"></section>
    </section>

    <!-- service -->
    <section class="max-w-screen-xl mx-auto px-3 py-16">
      <h6 class="text-center text-antiqueBrass">WORK WITH ME</h6>
      <h2 class="text-center text-3xl">Our Service</h2>
      <div class="text-center"><span class="inline-block w-px h-14 bg-antiqueBrass"></span></div>
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
          <div class="absolute w-7/12 h-full flex items-center"><img src="../assets/images/AzuraTheme1.jpeg" alt="" class="bg-white p-2"></div>          
          <img src="../assets/images/AzuraTheme2.jpeg" alt="" class="ml-auto">
        </div>
        <div class="flex flex-col justify-center items-baseline gap-y-4">
          <p class="text-antiqueBrass">Hey there !!!</p>
          <h2 class="text-2xl"> We are AzuraTheme</h2>
          <p class="text-gray my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus minus voluptates consequuntur maiores! Dicta ipsa dolor corrupti laborum nulla minima veniam natus eos sed id beatae delectus, dolores nisi!</p>
          <a href="" class="btn btn-antiqueBrass">Read More</a>
        </div>
      </section>
    </section>

    <!-- blog -->
    <section class="relative bg-blogBG bg-contain bg-no-repeat bg-center py-12">
      <section class="absolute top-0 w-full h-full bg-white opacity-80"></section>
      <section class="relative max-w-screen-xl mx-auto px-3">
        <h6 class="text-antiqueBrass font-semibold">BROWSE CATEGORIES</h6>
        <h2 class="w-2/3 text-5xl">Need Help? Let me be your new blogging besite</h2>
        <section class="grid grid-cols-3 gap-x-8 min-h-500">
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

  </main>
</template>

<script>
// @ is an alias to /src
import Service from "@/components/home/Service.vue";
import Blog from "@/components/home/Blog.vue";
export default {
  name: "Home",
  components: {
    Service,
    Blog
  }
};
</script>
<style scoped>
.test {
  background-color: transparent;
  background-image: linear-gradient(180deg, #F5F5F5 50%, #EAE1DA 50%);
}
</style>
