export interface Game {
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
  platforms: ParentPlatform[];
  id: number;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name: string;
    slug: string;
    image_background: string;
  };
}

interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshots {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}

export interface GameDetails {
  id: 0;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
  image: string;
  year_start: number;
  year_end: number;
}
