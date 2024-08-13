import { FC } from "react";
import { UnsplashImages } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  items: UnsplashImages[];
  openModal: (image: UnsplashImages) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
