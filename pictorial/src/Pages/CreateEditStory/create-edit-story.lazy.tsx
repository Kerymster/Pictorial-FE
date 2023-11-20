import { lazy } from "react";

export const CreateEditStory = lazy(
  () => import(/* webpackChunkName: 'CreateEditStory' */ "./")
);
