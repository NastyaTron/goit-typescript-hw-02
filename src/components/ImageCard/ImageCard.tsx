import { FC } from "react";
import { UnsplashImages } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  item: UnsplashImages;
  openModal: (image: UnsplashImages) => void;
}
const ImageCard: FC<ImageCardProps> = ({ item, openModal }) => {
  const {
    urls: { small, regular },
    description,
  } = item;

  return (
    <div className={css.section}>
      <img
        className={css.img}
        src={small}
        alt={description}
        onClick={() => openModal(item)}
      />
    </div>
  );
};
export default ImageCard;
