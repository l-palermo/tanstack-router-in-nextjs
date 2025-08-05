import { createRoute, RootRoute } from "@tanstack/react-router";
import { FeatureContext, screenOneRoute, screenTwoRoute } from "./context";

export * from "./context";

export const BaseRoute = (basePath: string, RootRoute: RootRoute) =>
  createRoute({
    id: "feature",
    getParentRoute: () => RootRoute,
    component: FeatureContext({ basePath }),
  });

export const FeatureContextRoute = (basePath: string, RootRoute: RootRoute) => {
  const featureContextRoute = BaseRoute(basePath, RootRoute);
  return featureContextRoute.addChildren([
    screenOneRoute(featureContextRoute, basePath),
    screenTwoRoute(featureContextRoute, basePath),
  ]);
};
