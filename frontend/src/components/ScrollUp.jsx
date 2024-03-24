import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const showArrowFunction = () => {
      if (window.scrollY > 700) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", showArrowFunction);
    return () => window.removeEventListener("scroll", showArrowFunction);
  }, []);
  const scrollToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={scrollToUp}
      className={`fixed z-20 bottom-4 right-4 bg-Primary-500 text-white h-10 w-10 grid place-items-center rounded-full shadow-lg cursor-pointer opacity-0 transition-opacity duration-300 ease-in-out delay-300 ${
        showArrow && " opacity-100"
      }`}
    >
      <ArrowUp />
    </div>
  );
};

export default ScrollUp;
