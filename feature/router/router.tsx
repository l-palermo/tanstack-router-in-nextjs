/**
 * This part is only needed for Next.js / SSR
 */
'use client';

import {
  RouterProvider,
  createRouter,
  createRootRoute,
} from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import { FeatureContextRoute } from '../context';

const RootRoute = createRootRoute({
  component: function TestParentRoute() {
    return (
      <Outlet />
    )
  },
})

function createRouterWithChildren({ basePath }: { basePath: string }) {
  const routeTree = RootRoute.addChildren([FeatureContextRoute(basePath, RootRoute)])
  return createRouter({ routeTree });
}

export function FeatureWithRouter({ basePath }: { basePath: string }) {
  return <RouterProvider router={createRouterWithChildren({ basePath })} />;
}