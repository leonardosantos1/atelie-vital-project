import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface SimpleCarouselProps {
  slides: string[]
}

export function SimpleCarousel({ slides }: SimpleCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={5}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500 }}
      className="swiper-container group relative mb-4 h-[480px] w-full max-w-[1400px] px-2 py-4"
    >
      <div className="flex justify-center">
        {slides.map((img, slideIndex) => (
          <SwiperSlide
            key={slideIndex}
            className="slide-item flex h-full w-full justify-center"
          >
            <img
              src={img}
              className="my-4 h-full w-3/5 rounded-lg bg-cover bg-center object-cover md:w-2/5 lg:w-2/5"
              alt=""
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}
