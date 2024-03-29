const excludedPaths = [
  "/auth/signin",
  "/auth/signup",
  "/auth/mfa/setup/:path*",
  "/auth/mfa/verify/:path*",
  "/auth/forgot-password/:path*",
  "/dashboard",
  "/dashboard/user-management",
  "/dashboard/user-management/brands",
  "/dashboard/user-management/riders",
  "/dashboard/content-management",
  "/dashboard/content-management/create-post",
  "/dashboard/content-management/create-faq",
  "/dashboard/content-management/create-article",
  "/dashboard/content-management/blogs/create-post",
  "/dashboard/content-management/faqs/create-faq",
  "/dashboard/content-management/articles/create-article",
  "/dashboard/content-management/blogs",
  "/dashboard/content-management/faqs",
  "/dashboard/content-management/articles",
  "/dashboard/forms",
  "/dashboard/campaigns",
  "/dashboard/analytics",
  "/dashboard/settings",
  "/dashboard/notifications",
];

export default excludedPaths;
