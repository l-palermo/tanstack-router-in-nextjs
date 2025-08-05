import { createRoute, type AnyRoute } from "@tanstack/react-router";
import { ScreenOne } from "./screen-one";

export const screenOneRoute = <T extends AnyRoute>(
  baseRoute: T
) =>
  createRoute({
    path: `screen-one`,
    getParentRoute: () => baseRoute,
    component: ScreenOne,
  });
