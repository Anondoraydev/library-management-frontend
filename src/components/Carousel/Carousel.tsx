import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1470&q=80",
      alt: "Book Banner 1",
    },
    {
      id: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1470&q=80",
      alt: "Book Banner 2",
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1470&q=80",
      alt: "Book Banner 3",
    },
    {
      id: 4,
      imgSrc:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1470&q=80",
      alt: "Book Banner 4",
    },
  ];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // ৪ সেকেন্ডে স্লাইড হবে

    return () => clearInterval(autoSlide);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
      {/* Left arrow */}
      <ArrowLeft
        className="absolute left-5 text-white text-3xl cursor-pointer z-10"
        onClick={prevSlide}
      />

      {/* Image */}
      <img
        src={slides[currentSlide].imgSrc}
        alt={slides[currentSlide].alt}
        className="w-full h-full object-cover"
      />

      {/* Right arrow */}
      <ArrowRight
        className="absolute right-5 text-white text-3xl cursor-pointer z-10"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carousel;
