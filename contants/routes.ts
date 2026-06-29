export const ROUTES = {
  HOME: "/",

  ARTICLE_DETAIL: (slug: string) => `/mading/${slug}`,

  DASHBOARD: "/dashboard",
  DASHBOARD_CREATE_ARTICLE: "/dashboard/article/create",
  DASHBOARD_UPDATE_ARTICLE: (id: string) => `/dashboard/article/${id}/edit`,
};
