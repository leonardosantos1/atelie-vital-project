import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { RxDotFilled } from 'react-icons/rx'

interface CarouselProps {
  slides: string[]
}

export function Carousel({ slides }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="group relative mb-4 h-[480px] w-full max-w-[1400px] px-2 py-4">
      <div className="flex h-full w-full justify-center">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          className="h-full w-2/5 rounded-lg bg-cover bg-center duration-500"
        />
      </div>

      <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>

      <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl text-zinc-500"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}
