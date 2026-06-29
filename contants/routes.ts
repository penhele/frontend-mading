export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  DASHBOARD_CREATE_ARTICLE: "/dashboard/article/create",
  DASHBOARD_UPDATE_ARTICLE: (id: string) => `/dashboard/article/${id}/edit`,
};
