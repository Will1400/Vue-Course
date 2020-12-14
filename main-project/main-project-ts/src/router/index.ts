import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CoachesList from "@/views/coaches/CoachesList.vue";
import CoachDetails from "@/views/coaches/CoachDetails.vue";
import CoachRegistration from "@/views/coaches/CoachRegistration.vue";

import ContactCoach from "@/views/requests/ContactCoach.vue";
import RequestRecieved from "@/views/requests/RequestReceived.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/coaches"
  },
  {
    path: "/coaches",
    name: "coaches",
    component: CoachesList
  },
  {
    path: "/coaches/:id",
    component: CoachDetails,
    props: true,
    children: [{ path: "contact", component: ContactCoach }]
  },
  { path: "/register", component: CoachRegistration },
  { path: "/requests", component: RequestRecieved },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
