import StoryCard from "../Home/components/StoryCard";
import { Formik, Form } from "formik";
import {
  initialValues,
  storyValidationSchema,
} from "./create-edit-post.constants";
import { IStory } from "../../interfaces";
import { FormInput } from "../../Components/form-input";
import { FormTextAreaInput } from "../../Components/form-text-area-input";
import { useState } from "react";
import { useAddStoryMutation } from "../../Services/pictorialApi";

export default function CreateEditStory() {
  const [addStory] = useAddStoryMutation();
  const [base64, setBase64] = useState<string>();
  const selectedStory = {};

  const handleSubmit = async (values: Partial<IStory>) => {
    let payload = { ...values, image: base64 };
    console.log(payload);

    if (payload) {
      try {
        await addStory(payload);
        // Handle success
      } catch (error) {
        // Handle error
      }
    }
  };

  const handleImageUpload = (e: any) => {
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const _handleReaderLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString));
  };

  const post = {
    title: "Boost your conversion rate",
    href: "#",
    image: "image",
    tag: "Street",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  };
  return (
    <div className="relative pt-8 pb-10 px-2 sm:px-3 lg:pt-12 lg:pb-14 lg:px-4">
      <div className="space-y-6">
        <Formik<Partial<IStory>>
          initialValues={initialValues(selectedStory)}
          enableReinitialize
          onSubmit={handleSubmit}
          validationSchema={storyValidationSchema}
        >
          {() => {
            return (
              <Form>
                <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-8">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-3">
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <FormInput
                              name="title"
                              label="Title"
                              placeholder="Enter Title"
                              type="text"
                              autoComplete="title"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <FormInput
                              name="tag"
                              label="Tag"
                              placeholder="Enter Tag"
                              type="text"
                              autoComplete="tag"
                            />
                          </div>
                        </div>
                        <div>
                          <FormTextAreaInput
                            name="description"
                            label="Description"
                            placeholder="Enter description"
                          />
                          <p className="mt-2 text-sm text-gray-500">
                            This is the story of your image.
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Image
                          </label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    accept=".jpeg,.png,.jpg"
                                    onChange={(e) => handleImageUpload(e)}
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, JPEG up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 bg-white rounded-md p-3">
                      <h3 className="text-lg font-medium text-center leading-6 mb-2 text-gray-950 uppercase">
                        Preview
                      </h3>
                      <StoryCard story={post} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Save
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
