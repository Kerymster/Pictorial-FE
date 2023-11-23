export interface IStory {
  title: string;
  href?: string;
  tag: string;
  image: string;
  category?: IStoryCategory;
  description: string;
  date?: string;
  datetime?: string;
  readingTime?: string;
  author?: IAuthor;
  imageUrl?: string;
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
