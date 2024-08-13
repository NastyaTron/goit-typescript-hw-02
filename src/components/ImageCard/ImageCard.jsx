import css from "./ImageCard.module.css";

export default function ImageCard({
  item: {
    urls: { small, regular },
    description,
  },
  openModal,
}) {
  return (
    <div className={css.section}>
      <img
        className={css.img}
        src={small}
        alt={description}
        onClick={() => openModal({ regular, description })}
      />
    </div>
  );
}
