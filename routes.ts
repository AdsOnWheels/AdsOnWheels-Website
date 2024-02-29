/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * An array of routes used for dashboard pages.
 * Users will only have access to this routes after authentication.
 * @type {string[]}
 */
export const privateRoutes: string[] = [
  "/dashboard/user-management",
  "/dashboard/user-management/brands",
  "/dashboard/user-management/riders",
  "/dashboard/content-management",
  "/dashboard/forms",
  "/dashboard/campaigns",
  "/dashboard/analytics",
  "/dashboard/settings",
  "/dashboard/notifications",
];

/**
 * The prefix for dashboard pages routes.
 * Routes that start with this prefix are used for navigating the different dashboard pages.
 * @type {string}
 */
export const dashboardPrefix: string = "/dashboard";

/**
 * An array of routes used for authentication.
 * Users will be redirected to /dashboard after signing in.
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/signin", "/auth/signup"];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after signing in.
 * @type {string}
 */
export const DEFAULT_SIGNIN_REDIRECT: string = "/auth/signin";
