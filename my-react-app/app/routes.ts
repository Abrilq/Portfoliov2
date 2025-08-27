import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projects/lost-and-found", "routes/projects/lost-and-found.tsx"),
  route("projects/pre-advising", "routes/projects/pre-advising.tsx"),
  route("projects/ecommerce", "routes/projects/ecommerce.tsx"),
  route("projects/ordering-system", "routes/projects/ordering-system.tsx"),
  route("projects/damath", "routes/projects/damath.tsx"),
  route("projects/ar-project", "routes/projects/ar-project.tsx"),
  route("projects/drinking-session", "routes/projects/drinking-session.tsx"),
  route("projects/srt-renamer", "routes/projects/srt-renamer.tsx"),
] satisfies RouteConfig;
