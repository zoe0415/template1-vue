<template>
  <main class="max-w-screen-xl mx-auto px-3 mt-8">
    <!-- main grid -->
    <section class="grid md:grid-cols-3 grid-cols-1 gap-12 mt-8 items-start">
      <!-- standard card -->
      <section class="md:col-span-2">
        <StandardCard :imgFileName="'latest1.jpg'" :date="'2021-08-16'"></StandardCard>
        <!-- <StandardCard :imgFileName="'latest1.jpg'" :date="'2021-08-16'" class="mt-16"></StandardCard> -->
      </section>

      <!-- sidebar -->
      <section class="md:col-span-1">
        <Sidebar></Sidebar>
      </section>
    </section>
  </main>
</template>
<script>
import Sidebar from "@/components/blog/Sidebar.vue"
import StandardCard from "@/components/StandardCard.vue"
export default {
  name: "BlogStandard",
  components: {
    Sidebar,
    StandardCard,
  },
}
</script>
