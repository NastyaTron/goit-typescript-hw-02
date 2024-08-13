export interface UnsplashImages {
  id: string;
  description: string;
  urls: { small: string; regular: string };
}
export interface UnsplashResult {
  total: number;
  total_pages: number;
  results: UnsplashImages[];
}
export interface ModalImage {
  regular: string;
  description: string;
}
