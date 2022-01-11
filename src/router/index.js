import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Blog from "../views/Blog.vue"
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"
import BlogStandard from "../views/BlogStandard.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blogStandard",
    name: "BlogStandard",
    component: BlogStandard,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "*",
    redirect: "/",
    hidden: true,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
]

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  mode: "hash",
  base: "/template1-vue",
  routes,
})

export default router
