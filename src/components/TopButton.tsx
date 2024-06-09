import { useEffect, useState } from "react";

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.body.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={goToTop}
          className="fixed  bottom-[7rem] right-5 z-50 h-14 w-14 rounded-full border-0 
          bg-gradient-to-tr from-[#FF8660] to-[#8000FF] p-4 text-lg font-semibold text-white transition-colors duration-300 hover:opacity-80 md:bottom-10 md:right-10 dark:shadow-xl"
        >
          <svg
            className="h-6 w-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
