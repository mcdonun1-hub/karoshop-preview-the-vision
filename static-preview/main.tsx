import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "@/routes/index";
import { CategoryPage } from "@/routes/category.$slug";
import "@/styles.css";

/**
 * Standalone static preview (SPA + hash routing) of the KaroShop UI.
 * It reuses the exact same page components/data as the real app, but can be
 * hosted from any static folder (GitHub raw/CDN) with zero server.
 */
const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/category/$slug",
  component: CategoryPage,
});

const routeTree = rootRoute.addChildren([indexRoute, categoryRoute]);

const router = createRouter({
  routeTree,
  history: createHashHistory(),
  scrollRestoration: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
    <RouterProvider router={router as any} />
  </StrictMode>,
);
