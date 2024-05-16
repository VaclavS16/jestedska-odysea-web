export interface JoNewsItem {
  title: string;
  description: string;
  location: string;
  date: string;
  locationUrl: string;
  image: string;
  imagePosition?: ImagePosition;
  link: string;
}

export enum ImagePosition {
  top = "top",
  center = "center",
  bottom = "bottom",
  left = "left",
  right = "right",
}
