import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Card from "./AddToCard";
import useProducts from "../hooks/useProducts";

export default function Slider() {
  const { products, isLoading, error } = useProducts("limit=10&skip=50");

  return (
    <div>
      {isLoading ? "loading..." : ""}
      {error}

      <Swiper
       
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products?.slice(0, 25)?.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              id={item.id}
              game={item.thumbnail}
              text={item.title}
              price={item.price}
              discountPrice={item.discountPercentage}
              rating={item.rating}
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}