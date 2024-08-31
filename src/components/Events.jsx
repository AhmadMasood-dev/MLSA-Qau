import React from "react";
import { event1, event2, event3, event4 } from "../assets/images/Image.js";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Events = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    lazyLoad: true,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  const EventData = [
    {
      name: "Meetup with MLSA",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis delectus accusantium obcaecati nisi corporis? Corporis asperiores, magnam voluptatibus nesciunt dolorum quit.",
      img: event1,
    },
    {
      name: "Introduction To Github",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis delectus accusantium obcaecati nisi corporis? Corporis asperiores, magnam voluptatibus nesciunt dolorum quit.",
      img: event2,
    },
    {
      name: "API 101 Using Postman",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis delectus accusantium obcaecati nisi corporis? Corporis asperiores, magnam voluptatibus nesciunt dolorum quit.",

      img: event3,
    },
    {
      name: "EmPower Her",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis delectus accusantium obcaecati nisi corporis? Corporis asperiores, magnam voluptatibus nesciunt dolorum quit.",
      img: event4,
    },
  ];
  return (
    <section class="text-white bg-primary   " id="Events">
      <div
        class="container sm:px-5 py-24 mx-auto  max-w-7xl"
        data-aos="zoom-in-left"
        data-aos-duration="1200"
      >
        <div className="text-center  px-5 pb-20 mx-auto">
          <h1 className="text-4xl font-bold mb-5">Events</h1>
          <p className="sm:px-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. . Sit
            deserunt sint, fuga, iste, adipisci id est architecto dolor rerum
            esse minima? Dolores exercitationem quisquam quidem a odio dicta.
          </p>
        </div>
        <div class="flex flex-col   px-5 mx-3  slider-container ">
          <Slider {...settings}>
            {EventData.map((event) => (
              <div class="p-4 md:pl-3 pl-3 w-4/5   ">
                <div class=" h-[420px] rounded-lg overflow-hidden">
                  <img
                    class="h-[200px] w-[310px] object-center object-cover"
                    src={event.img}
                    alt="blog"
                  />
                  <div class="lg:py-6 md:py-3 py-3 overflow-y-hidden ">
                    <h1 class="sm:lg lg:text-xl md:text-[18px] font-semibold md:font-bold text-white mb-2 lg:mb-3">
                      {event.name}
                    </h1>
                    <p class="leading-relaxed mb-3 text-sm lg:text-md">
                      {event.description}
                    </p>
                    {/* <div class="flex items-center flex-wrap ">
                      <a
                        class="text-secondary inline-flex items-center md:mb-2 lg:mb-0"
                        href="/"
                      >
                        Learn More
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Events;
