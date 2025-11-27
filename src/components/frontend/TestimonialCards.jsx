import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; // Import this to add pagination dots
import heroImage from "../../assets/images/Construction_hero.jpg";

// Dummy data for 7 testimonials
const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Minima vel consectetur voluptatem unde. Mollitia et ea aspernatur non sint ullam deserunt sunt quisquam. Quia delectus ipsum provident veritatis dolores repellendus.",
    img: heroImage, // Replace with actual image path or import
    name: "Elvira Shields",
    position: "Associate",
  },
  {
    id: 2,
    rating: 3,
    text: "Minima vel consectetur voluptatem unde. Mollitia et ea aspernatur non sint ullam deserunt sunt quisquam. Quia delectus ipsum provident veritatis dolores repellendus.",
    img: heroImage, // Replace with actual image path or import
    name: "Elvira Shields",
    position: "Associate",
  },
  {
    id: 3,
    rating: 5,
    text: "Minima vel consectetur voluptatem unde. Mollitia et ea aspernatur non sint ullam deserunt sunt quisquam. Quia delectus ipsum provident veritatis dolores repellendus.",
    img: heroImage, // Replace with actual image path or import
    name: "Elvira Shields",
    position: "Associate",
  },
  {
    id: 4,
    rating: 5,
    text: "Minima vel consectetur voluptatem unde. Mollitia et ea aspernatur non sint ullam deserunt sunt quisquam. Quia delectus ipsum provident veritatis dolores repellendus.",
    img: heroImage, // Replace with actual image path or import
    name: "Elvira Shields",
    position: "Associate",
  },
  {
    id: 5,
    rating: 5,
    text: "Minima vel consectetur voluptatem unde. Mollitia et ea aspernatur non sint ullam deserunt sunt quisquam. Quia delectus ipsum provident veritatis dolores repellendus.",
    img: heroImage, // Replace with actual image path or import
    name: "Elvira Shields",
    position: "Associate",
  },
  {
    id: 6,
    rating: 5,
    text: "Minima vel consectetur voluptatem unde. Mollitia et ea aspernatur non sint ullam deserunt sunt quisquam. Quia delectus ipsum provident veritatis dolores repellendus.",
    img: heroImage, // Replace with actual image path or import
    name: "Elvira Shields",
    position: "Associate",
  },
  {
    id: 7,
    rating: 5,
    text: "Minima vel consectetur voluptatem unde. Mollitia et ea aspernatur non sint ullam deserunt sunt quisquam. Quia delectus ipsum provident veritatis dolores repellendus.",
    img: heroImage, // Replace with actual image path or import
    name: "Elvira Shields",
    position: "Associate",
  },
];

function TestimonialCards() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Swiper
        spaceBetween={24}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          640: { slidesPerView: 1 }, // small tablets
          768: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 3 }, // desktops
        }}
        className="rounded-3xl"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mx-auto h-full flex flex-col">
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <span key={idx} className="text-emerald-400 text-xl">
                    &#9733;
                  </span>
                ))}
              </div>
              {/* Text */}
              <p className="text-neutral-700 mb-6 leading-relaxed flex-1">
                {testimonial.text}
              </p>
              <hr className="my-4" />
              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="h-12 w-12 object-cover rounded-full shadow"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialCards;
