"use client";
import React from "react";
import Slider, { Settings } from "react-slick";

const testimonies = [
  {
    name: "John Doe",
    message: "Sky Hostel was amazing! The friendly vibe made it easy to meet fellow students, and the window views were breathtaking. The staff felt like family. I can't wait to return!"
  },
  {
    name: "Jane Smith",
    message: "A wonderful experience! The rooms were clean and comfortable, and the location was perfect for exploring the city. Highly recommend!"
  },
  {
    name: "Alice Johnson",
    message: "I loved the community events at Sky Hostel. It was a great way to meet new people and make friends. The staff was incredibly helpful and welcoming."
  },
  {
    name: "Michael Brown",
    message: "The amenities were top-notch, and the atmosphere was very relaxed. I felt at home during my entire stay. Will definitely come back!"
  },
  {
    name: "Emily Davis",
    message: "Sky Hostel exceeded my expectations. The staff went above and beyond to ensure a pleasant stay. The views from the rooftop were stunning!"
  },
  {
    name: "Chris Wilson",
    message: "A fantastic place to stay! The hostel was clean, modern, and had everything I needed. The staff was friendly and always ready to help."
  },
  {
    name: "Jessica Taylor",
    message: "I had a great time at Sky Hostel. The location was convenient, and the hostel had a great vibe. I met so many interesting people!"
  },
  {
    name: "David Martinez",
    message: "The best hostel experience I've ever had. The facilities were excellent, and the staff made me feel like part of the family."
  },
  {
    name: "Sophia Anderson",
    message: "Sky Hostel is the perfect place for students. The environment is conducive to both studying and socializing. I highly recommend it!"
  }
]

const Testimonials = () => {
  let settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700 p-10">
      <p className="text-white text-3xl font-semibold text-center mb-4">Testimonials</p>
      <div className="container-cont">
        <Slider {...settings}>
          {testimonies.map((testimony, index) => (
            <div key={index} className="px-2">
              <div key={index} className="bg-white rounded-xl p-4 h-52">
                <div className="flex-align gap-4 mb-4">
                  <div className="size-12 rounded-full bg-gray-400"></div>
                  <p className="text-lg font-semibold">{testimony.name}</p>
                </div>
                <p className="text-gray-500">{testimony.message}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
