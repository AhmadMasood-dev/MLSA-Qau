import React from "react";
import { event1, event2 } from "../assets/images/Image.js";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Events = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
        breakpoint: 600,
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
      name: "The Azure Fundamentals",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis delectus accusantium obcaecati nisi corporis? Corporis asperiores, magnam voluptatibus nesciunt dolorum quit.",
      img: event1,
    },
    {
      name: "The Azure Fundamentals",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis delectus accusantium obcaecati nisi corporis? Corporis asperiores, magnam voluptatibus nesciunt dolorum quit.",
      img: event2,
    },
    {
      name: "The Azure Fundamentals",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis delectus accusantium obcaecati nisi corporis? Corporis asperiores, magnam voluptatibus nesciunt dolorum quit.",
      img: event1,
    },
    {
      name: "The Azure Fundamentals",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis delectus accusantium obcaecati nisi corporis? Corporis asperiores, magnam voluptatibus nesciunt dolorum quit.",
      img: event1,
    },
    {
      name: "The Azure Fundamentals",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis delectus accusantium obcaecati nisi corporis? Corporis asperiores, magnam voluptatibus nesciunt dolorum quit.",
      img: event2,
    },
    {
      name: "The Azure Fundamentals",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis delectus accusantium obcaecati nisi corporis? Corporis asperiores, magnam voluptatibus nesciunt dolorum quit.",
      img: event1,
    },
  ];
  return (
    <section class="text-white bg-primary body-font ">
      <div class="container sm:px-5 py-24 mx-auto">
        <div className="text-center  px-5 pb-20 mx-auto">
          <h1 className="text-4xl font-bold mb-5">Events</h1>
          <p className="px-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. . Sit
            deserunt sint, fuga, iste, adipisci id est architecto dolor rerum
            esse minima? Dolores exercitationem quisquam quidem a odio dicta.
          </p>
        </div>
        <div class="flex flex-col  px-5 mx-3 md:mx-10 slider-container ">
          <Slider {...settings}>
            {EventData.map((event) => (
              <div class="p-4 md:w-full  ">
                <div class="h-full w-full  border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-3/5 md:h-36 w-full  bg-cover bg-center"
                    src={event.img}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h1 class="title-font sm:xl md:text-2xl font-medium text-white mb-3">
                      {event.name}
                    </h1>
                    <p class="leading-relaxed mb-3 text-sm sm:text-lg">
                      {event.description}
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a
                        class="text-secondary inline-flex items-center md:mb-2 lg:mb-0"
                        href="/"
                      >
                        Learn More
                      </a>
                    </div>
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
