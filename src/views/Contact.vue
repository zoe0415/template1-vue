<template>
  <main class="mt-8">
    <!-- banner -->
    <section
      class="relative min-h-400 bg-contactBG bg-no-repeat bg-center bg-cover flex items-center justify-center mb-8"
    >
      <div class="absolute top-0 w-full h-full bg-black opacity-40"></div>
      <h2 class="relative text-white text-5xl text-center">Contact Us</h2>
    </section>

    <!-- contact detail -->
    <section class="max-w-screen-xl mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 my-16">
      <Card>
        <template slot="icon"><font-awesome-icon icon="phone" /></template>
        <template slot="title">Phone Number</template>
        <template slot="data">
          <p>+123 456 7890</p>
          <p>+123 456 7890</p>
        </template>
      </Card>
      <Card>
        <template slot="icon"><font-awesome-icon icon="envelope" /></template>
        <template slot="title">Email Address</template>
        <template slot="data">
          <p>info@abcmail.com</p>
          <p>hello@yourdomain.com</p>
        </template>
      </Card>
      <Card>
        <template slot="icon"><font-awesome-icon icon="map" /></template>
        <template slot="title">Location</template>
        <template slot="data">
          <p>Group 14, Quang Trung ward, Thai Nguyen city</p>
        </template>
      </Card>
      <Card>
        <template slot="icon"><font-awesome-icon icon="clock" /></template>
        <template slot="title">Open Hours</template>
        <template slot="data">
          <p>Mon - Sat : 9.00 - 6.00</p>
          <p>Sunday : Closed</p>
        </template>
      </Card>
    </section>

    <!-- form -->
    <section class="max-w-screen-xl mx-auto px-3 grid grid-cols-2 gap-x-4 mb-8">
      <div></div>
      <div>
        <h3 class="text-antiqueBrass">Say Hello !!!</h3>
        <h2 class="text-2xl">I'd love to hear from you</h2>
        <p class="text-gray">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quia inventore ipsa aperiam rem illum
          maxime magni dolorum obcaecati iste, ab saepe cumque ad nihil quos mollitia, quibusdam sed illo.
        </p>
      </div>
    </section>
  </main>
</template>
<script>
import Card from "@/components/contact/Card.vue"

export default {
  name: "Contact",
  components: {
    Card,
  },
}
</script>
