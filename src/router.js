import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Tools from "./views/Tools.vue";
import Mybill from "./views/Mybill.vue";
import Bill_List from "./views/BillList.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/tools",
      name: "tools",
      component: Tools
    },
    {
      path: "/tools/mybill",
      name: "mybill",
      component: Mybill
    },
    {
      path: "/tools/mybill/mybill_list",
      name: "billlist",
      component: Bill_List
    }
  ]
});
