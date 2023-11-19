import React from "react";
import { IStory } from "@src/Components/interfaces";
import { APP_ROUTES } from "../../../Shared/route.enums";
import { useNavigate } from "react-router-dom";

interface IStoryCard {
  story: IStory;
}

const StoryCard = ({ story }: IStoryCard) => {
  const navigate = useNavigate();
  return (
    <div
      key={story.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => navigate(APP_ROUTES.STORYDETAIL)}
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={story.imageUrl} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href={story.category.href} className="hover:underline">
              {story.category.name}
            </a>
          </p>
          <p className="text-xl font-semibold text-gray-900">{story.title}</p>
          <p className="mt-3 text-base text-gray-500">{story.description}</p>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={story.author.href}>
              <span className="sr-only">{story.author.name}</span>
              <img
                className="h-10 w-10 rounded-full"
                src={story.author.imageUrl}
                alt=""
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href={story.author.href} className="hover:underline">
                {story.author.name}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={story.datetime}>{story.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{story.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
