import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}
const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={handleLoadMore} type="submit">
        Load More
      </button>
    </div>
  );
};
export default LoadMoreBtn;
