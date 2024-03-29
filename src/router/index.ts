import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Search",
      component: () => import("@/components/SearchQuery.vue"),
    },
    {
      path: "/search",
      redirect: "/",
    },
    {
      path: "/book/:id",
      name: "Book",
      component: () => import("@/views/BookView.vue"),
    },
    {
      path: "/categories/:categoryName",
      name: "Category",
      component: () => import("@/views/CategoriesView.vue"),
    },
    {
      path: "/newest",
      name: "Newest",
      component: () => import("@/views/NewestView.vue"),
    },
    {
      path: "/user/:username",
      name: "User",
      redirect: {name: "UserBooks"},
      component: () => import("@/views/UserProfileView.vue"),
      children: [
        {
          path: "/user/:username/books",
          name: "UserBooks",
          component: () => import("@/components/UserPage/UserBooks.vue"),
        },
        {
          path: "/user/:username/contacts",
          name: "UserContacts",
          component: () => import("@/components/UserPage/UserContacts.vue"),
        },
        {
          path: "/user/:username/reviews",
          name: "UserReviews",
          component: () => import("@/components/UserPage/UserReviews.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      name: "Not Found",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
