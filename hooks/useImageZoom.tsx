import { useEffect, useRef, useState } from "react";

const useImageZoom = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("notion-image-inset")) {
        const imageUrl = target.getAttribute("src");
        if (imageUrl) {
          setImageUrl(imageUrl);

          setIsShow(true);
          document.body.style.overflow = "hidden";
        }
      }
    };

    const galleryElement = ref.current;
    if (galleryElement) {
      galleryElement.addEventListener("click", handleClick);
    }

    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener("click", handleClick);
      }
    };
  }, [ref]);

  const handleCloseModal = () => {
    setIsShow(false);
    document.body.style.overflow = "auto";
  };

  const Modal = (): JSX.Element => {
    return (
      <>
        {isShow && (
          <div
            id="modal"
            className="z-80 fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/70"
            onClick={handleCloseModal}
          >
            <a
              className="z-90 fixed right-8 top-6 text-5xl font-bold text-white"
              onClick={handleCloseModal}
            >
              ×
            </a>

            <img
              id="modal-img"
              className="max-h-[90%] max-w-[90%] object-cover"
              src={imageUrl}
            />
          </div>
        )}
      </>
    );
  };

  return { ref, Modal };
};

export default useImageZoom;
