const auth = {
  meta: {
    auth: true,
  },
};

const routes = [
  {
    path: "/",
    redirect: "/psm",
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "psm", component: () => import("pages/PsmPage.vue") },
      { path: "kim", component: () => import("pages/KimPage.vue") },
      {
        path: "form-page",
        ...auth,
        component: () => import("pages/FormPage.vue"),
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
