import { lazy } from "react";

export const StoryDetail = lazy(
  () => import(/* webpackChunkName: 'StoryDetail' */ "./")
);
