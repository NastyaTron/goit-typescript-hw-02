import { useEffect, useState } from "react";
import { fetchImages } from "../../images-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { ModalImage, UnsplashImages, UnsplashResult } from "../../types";

export default function App() {
  const [images, setImages] = useState<UnsplashImages[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(1000);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalImage | null>(null);

  const handleSearch = async (newQuery: string) => {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const data: UnsplashResult = await fetchImages(query, page);
        setTotalPages(data.total_pages);
        setImages((prevArticles) => {
          return [...prevArticles, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  const handleLoadMore = (): void => {
    setPage((prevState) => prevState + 1);
  };

  const openModal = (image: UnsplashImages): void => {
    setModalIsOpen(true);
    setModalImage({
      regular: image.urls.regular,
      description: image.description,
    });
  };
  const closeModal = (): void => {
    setModalIsOpen(false);
    setModalImage(null);
  };
  return (
    <>
      {page >= totalPages && <p>This is End!</p>}
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery items={images} openModal={openModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {modalIsOpen && modalImage && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          src={modalImage.regular}
          alt={modalImage.description || ""}
        />
      )}
    </>
  );
}
