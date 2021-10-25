<template>
  <section>
    <!-- banner -->
    <section
      class="relative min-h-500 bg-contactBG bg-no-repeat bg-center bg-cover flex items-center justify-center mb-8"
    >
      <div class="absolute top-0 w-full h-full bg-black opacity-60"></div>
      <h2 class="relative text-white text-5xl text-center">Contact Us</h2>
    </section>

    <!-- contact detail -->
    <section class="max-w-screen-xl mx-auto px-3 grid grid-cols-4 gap-x-4 mb-8">
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
        <div class="mt-8 grid grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              v-model="formData.name"
              placeholder="Name"
              class="w-full py-3 px-5 border border-gray-light text-gray"
            />
            <span v-if="isShowMsg.name.show" class="text-red">{{ isShowMsg.name.text }}</span>
          </div>
          <div>
            <input
              type="email"
              v-model="formData.email"
              placeholder="Email"
              class="w-full py-3 px-5 border border-gray-light text-gray"
            />
            <span v-if="isShowMsg.email.show" class="text-red">{{ isShowMsg.email.text }}</span>
          </div>
          <div class="col-span-2">
            <input
              type="text"
              v-model="formData.subject"
              placeholder="Subject"
              class="w-full py-3 px-5 border border-gray-light text-gray"
            />
            <span v-if="isShowMsg.subject.show" class="text-red">{{ isShowMsg.subject.text }}</span>
          </div>
          <div class="col-span-2">
            <textarea
              v-model="formData.message"
              cols="30"
              rows="10"
              placeholder="Message"
              class="w-full py-3 px-5 border border-gray-light text-gray"
            ></textarea>
            <span v-if="isShowMsg.message.show" class="text-red">{{ isShowMsg.message.text }}</span>
          </div>
          <button
            type="button"
            @click="handleSubmitForm"
            class="justify-self-center col-span-2 mt-8 py-3 px-8 bg-antiqueBrass text-white"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import Card from "@/components/contact/Card.vue"

export default {
  name: "Contact",
  components: {
    Card,
  },
  data() {
    return {
      isShowMsg: {
        name: {
          show: false,
          text: "The field is required.",
        },
        email: {
          show: false,
          text: "The field is required.",
        },
        subject: {
          show: false,
          text: "The field is required.",
        },
        message: {
          show: false,
          text: "The field is required.",
        },
      },
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    }
  },
  methods: {
    handleSubmitForm() {
      // eslint-disable-next-line no-useless-escape
      let regexEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      this.formData.name ? (this.isShowMsg.name.show = false) : (this.isShowMsg.name.show = true)
      this.formData.subject ? (this.isShowMsg.subject.show = false) : (this.isShowMsg.subject.show = true)
      this.formData.message ? (this.isShowMsg.message.show = false) : (this.isShowMsg.message.show = true)

      if (this.formData.email && regexEmail.test(this.formData.email)) {
        this.isShowMsg.email.show = false
      } else if (this.formData.email && !regexEmail.test(this.formData.email)) {
        this.isShowMsg.email.show = true
        this.isShowMsg.email.text = "The e-mail address entered is invalid."
      } else {
        this.isShowMsg.email.show = true
        this.isShowMsg.email.text = "The field is required."
      }

      let canSubmit = true
      Object.values(this.isShowMsg).forEach(function (i) {
        i.show == true ? (canSubmit = false) : false
      })
      canSubmit ? alert("submit") : alert("尚有欄位未填寫")
    },
  },
}
</script>
