import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import LeftArrow from "../../../assets/leftarrow.png";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    // swiper.on("slideChange", function () {
    //   setIsBeginning(swiper.isBeginning);
    // });
  }, []);

  swiper.on("slideChange", function () {
    setIsBeginning(swiper.isBeginning);
  });

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <img src={LeftArrow} alt="LeftArrow" onClick={() => swiper.slidePrev()} />}
    </div>
  );
}