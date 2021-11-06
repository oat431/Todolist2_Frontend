import { createRouter, createWebHistory } from "vue-router";

import Home from '../page/Home.vue'
import NProgress from 'nprogress'

const routes = [
  {
    path: "/",
    name: "Home",
    component : Home
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;