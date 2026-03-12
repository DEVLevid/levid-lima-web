"use client";
import styles from "./styles.module.scss";
import "swiper/css/pagination";
import "swiper/css";
import { Data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function Feedbacks() {
  const { t } = useTranslation("feedbacks");

  return (
    <div id="feedbacks" className={styles.container}>
      <h2 className={styles.title}>{t("title")}</h2>
      <Swiper
        className={styles.cardContainer}
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, titleKey, occupationKey, descriptionKey }) => (
          <SwiperSlide className={styles.card} key={id}>
            <div className={styles.profileContainer}>
              <img src={image} alt={t(titleKey)} />
              <div className={styles.nameContainer}>
                <h3 className={styles.name}>{t(titleKey)}</h3>
                <p className={styles.ocupation}>{t(occupationKey)}</p>
              </div>
            </div>
            <p className={styles.description}>{t(descriptionKey)}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
