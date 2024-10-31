export interface Artwork {
  id: number;
  title: string;
  artist_display: string;
  date_display: string;
  image_id: string;
  // Add more properties as needed based on the API response
}

export interface Artist {
  id: number;
  title: string;
  birth_date: string;
  death_date: string;
  biography: string;
  // Add more properties as needed
}

export interface Exhibition {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  description: string;
  // Add more properties as needed
}
