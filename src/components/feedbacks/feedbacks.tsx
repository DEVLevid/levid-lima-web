"use client";
import styles from "./styles.module.scss";
import "swiper/css/pagination";
import "swiper/css";
import { Data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Feedbacks() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Alguns relatos sobre meu trabalho</h2>
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
        {Data.map(({ id, image, title, description, ocupation }) => {
          return (
            <SwiperSlide className={styles.card} key={id}>
              <div className={styles.profileContainer}>
                <img src={image} alt={title} />
                <div className={styles.nameContainer}>
                  <h3 className={styles.name}>{title}</h3>
                  <p className={styles.ocupation}>{ocupation}</p>
                </div>
              </div>
              <p className={styles.description}>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
