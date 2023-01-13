const auth = {
  meta: {
    auth: true,
  },
};

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "home", component: () => import("pages/HomePage.vue") },
      {
        path: "form-bnba-psm",
        ...auth,
        component: () => import("pages/RelawanPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
