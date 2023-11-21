export interface IStory {
  title: string;
  href: string;
  tag: string;
  category: IStoryCategory;
  description: string;
  date: string;
  datetime: string;
  readingTime: string;
  imageUrl: string;
  author: IAuthor;
}

export interface IStoryCategory {
  name: string;
  href: string;
}

export interface IAuthor {
  name: string;
  href: string;
  imageUrl: string;
}
