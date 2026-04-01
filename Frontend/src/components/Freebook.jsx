import React from "react";
import list from "../data/list.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cards from "./Cards";

import { Navigation, Pagination } from "swiper/modules";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses,</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
        <div className="mt-6 px-4 mb-20">
      <Swiper
        modules={[Pagination]}
    spaceBetween={20}
    pagination={{
      el: ".custom-pagination",
      clickable: true,
    }}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
      >
        {filterData.map((item) => (
          <SwiperSlide key={item.id}>
            <Cards item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-6 text-center"></div>
    </div>
      </div>
    </>
  );
}

export default Freebook;
