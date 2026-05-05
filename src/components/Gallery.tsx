"use client";

import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  { src: "/images/m1.jpg", width: 800, height: 1200 },
  { src: "/images/m2.jpg", width: 800, height: 1200 },
  { src: "/images/m3.jpg", width: 800, height: 1200 },
  { src: "/images/m4.jpg", width: 800, height: 1200 },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const handleOpenGallery = () => {
      setIndex(0); // Open the lightbox starting at the first image
    };

    window.addEventListener("open-gallery", handleOpenGallery);
    return () => window.removeEventListener("open-gallery", handleOpenGallery);
  }, []);

  return (
    <>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
}
