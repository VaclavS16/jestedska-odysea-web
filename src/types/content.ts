export interface NavigationItem {
  title: string;
  path: string;
}

export interface JoNewsItem {
  title: string;
  description: string;
  location?: string;
  date?: string;
  locationUrl?: string;
  image?: string;
  imagePosition?: "top" | "center" | "bottom" | "left" | "right";
  link: string;
  icon?: "ticket" | "event" | "facebook" | "instagram" | "location";
}

export interface GalleryItem {
  title: string;
  link: string;
}

export interface JoBand {
  name: string;
  genre: string;
  desc?: string;
  imgPath?: string;
  pathPart?: string;
  facebook?: string;
  bandcamp?: string;
  url?: string;
  genreCentered?: boolean;
  stage?: string;
  start?: string;
}
