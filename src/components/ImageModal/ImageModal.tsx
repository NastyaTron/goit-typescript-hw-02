import ReactModal from "react-modal";
import { FC } from "react";
import { ModalImage } from "../../types";
ReactModal.setAppElement("#root");

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: ModalImage["regular"];
  alt: ModalImage["description"];
}

const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
}) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "none",
          border: "none",
          padding: "0",
          height: "auto",
          width: "500px",
          overflow: "hidden",
        },
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
      />
    </ReactModal>
  );
};
export default ImageModal;
