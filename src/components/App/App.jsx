import { useEffect, useState } from "react";
import { fetchArticles } from "../../articles-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(1000);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const handleSearch = async (newQuery) => {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getArticles() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticles(query, page);
        setTotalPages(data.total_pages);
        setImages((prevArticles) => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getArticles();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const openModal = (image) => {
    setModalIsOpen(true);
    setModalImage(image);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage({});
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
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalImage.regular}
        alt={modalImage.description}
      />
    </>
  );
}
