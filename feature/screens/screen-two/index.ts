import { createRoute, type AnyRoute } from "@tanstack/react-router";
import { ScreenTwo } from "./screen-two";

export const screenTwoRoute = <T extends AnyRoute>(
  baseRoute: T,
  basePath = ""
) =>
  createRoute({
    path: `${basePath}/screen-two`,
    getParentRoute: () => baseRoute,
    component: ScreenTwo,
  });
