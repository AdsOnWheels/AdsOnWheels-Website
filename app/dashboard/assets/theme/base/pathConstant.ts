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
  "/dashboard/forms",
  "/dashboard/campaigns",
  "/dashboard/analytics",
  "/dashboard/settings",
  "/dashboard/notifications",
];

export default excludedPaths;
