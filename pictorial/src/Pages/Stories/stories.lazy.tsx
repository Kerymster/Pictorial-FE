import { lazy } from "react";

export const Stories = lazy(
  () => import(/* webpackChunkName: 'Stories' */ "./")
);
