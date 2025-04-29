import React, { useEffect, useState } from "react";
// import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import RightArrow from "../../../assets/rightarrow.png"; 
;

export default function CarouselRightNavigation({ swiper }) {
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;

    const update = () => setIsEnd(swiper.isEnd);
    swiper.on("slideChange", update);

    // Set initial value
    setIsEnd(swiper.isEnd);

    return () => swiper.off("slideChange", update);
  }, [swiper]);

  if (!swiper) return null;

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <img
          src={RightArrow}
          alt="Right Arrow"
          onClick={() => swiper.slideNext()}
        />
      )}
    </div>
  );
}