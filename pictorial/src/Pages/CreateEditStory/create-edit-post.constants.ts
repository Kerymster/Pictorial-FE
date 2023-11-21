import { ERROR_MESSAGES } from "../../Utils/error-messages";
import { object, string } from "yup";
import { IStory } from "../../interfaces";

export const initialValues = (
  story: Partial<IStory> | null
): Partial<IStory> => {
  return {
    title: story?.title || "",
    href: story?.href || "",
    category: {
      name: story?.category?.name || "",
      href: story?.category?.href || "",
    },
    description: story?.description || "",
    datetime: story?.datetime || "",
    readingTime: story?.readingTime || "",
    tag: story?.tag || "",
    author: {
      name: story?.author?.name || "",
      href: story?.author?.href || "",
      imageUrl: story?.author?.imageUrl || "",
    },
  };
};

export const storyValidationSchema = object({
  title: string().nullable().required(ERROR_MESSAGES.required("title")),
  href: string().nullable(),
  description: string()
    .nullable()
    .required(ERROR_MESSAGES.required("description")),
  tag: string().nullable().required(ERROR_MESSAGES.required("tag")),
  author: object().shape({
    name: string().nullable(),
    href: string().nullable(),
    imageUrl: string().nullable(),
  }),
});
