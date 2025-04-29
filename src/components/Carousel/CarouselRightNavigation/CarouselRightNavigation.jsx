import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import RightArrow from "../../../assets/rightarrow.png"; 
;

export default function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
  
    useEffect(() => {
      swiper.on("slideChange", () => {
        setIsEnd(swiper.isEnd);
      });
    }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <img src={RightArrow} alt="Right Arrow" onClick={() => swiper.slideNext()} />
    }
    </div>
  );
}