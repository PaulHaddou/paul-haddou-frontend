import { createRouter, createWebHistory } from "vue-router";
// Views
const HomeView = () => import("@/views/HomeView.vue");

// Layouts
import HomeLayout from "@/layouts/HomeLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: HomeLayout,
        title: "Paul Haddou",
        // metaTags: [
        //   {
        //     property: "og:image",
        //     content: "./static/assets/images/preview-image_1200x675.jpg",
        //   },
        //   {
        //     name: "twitter:image",
        //     content: "./static/assets/images/preview-image_1200x675.jpg",
        //   },
        // ],
      },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "404",
    },
  ],
});

export default router;
