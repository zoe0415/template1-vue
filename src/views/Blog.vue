<template>
  <main class="max-w-screen-xl mx-auto px-3 mt-8">
    <!-- main grid -->
    <section class="grid md:grid-cols-3 grid-cols-1 gap-12 items-start">
      <!-- card grid -->
      <section class="md:col-span-2 grid md:grid-cols-2 grid-cols-1 gap-12">
        <Card :imgFileName="'latest1.jpg'" :date="'2021-07-24'"></Card>
        <Card :imgFileName="'latest2.jpg'" :date="'2021-07-24'"></Card>
      </section>

      <!-- side bar -->
      <section class="md:col-span-1">
        <Sidebar></Sidebar>
      </section>
    </section>
  </main>
</template>
<script>
import Sidebar from "@/components/blog/Sidebar.vue"
import Card from "@/components/Card.vue"
export default {
  name: "Blog",
  components: {
    Card,
    Sidebar,
  },
}
</script>
