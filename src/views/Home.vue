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
      <section class="grid grid-cols-3 gap-x-4">
        <Service>
          <template v-slot:image><img src="../assets/images/service1.jpeg" alt=""></template>
          <template v-slot:icon><font-awesome-icon icon="sun" /></template>
          <template v-slot:title>Moving Fashion Forward</template>
        </Service>
        <Service>
          <template v-slot:image><img src="../assets/images/service2.jpeg" alt=""></template>
          <template v-slot:icon><font-awesome-icon icon="leaf" /></template>
          <template v-slot:title>Headline Goes Here</template>          
        </Service>
        <Service>
          <template v-slot:image><img src="../assets/images/service3.jpeg" alt=""></template>
          <template v-slot:icon><font-awesome-icon icon="history" /></template>
          <template v-slot:title>Your Headline in Here</template>  
        </Service>
      </section>
    </section>

  </main>
</template>

<script>
// @ is an alias to /src
import Service from "@/components/home/Service.vue";
export default {
  name: "Home",
  components: {
    Service
  }
};
</script>
<style scoped>
.test {
  background-color: transparent;
  background-image: linear-gradient(180deg, #F5F5F5 50%, #EAE1DA 50%);
}
</style>
