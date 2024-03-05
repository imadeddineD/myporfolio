'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// import { images } from '@/lib/images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface GalleryProps {
    images: readonly any[]; // Change to readonly any[]
  }


const Galleries: React.FC<GalleryProps> = ({
    images = []
  }) =>{
  return (
    <section className='py-12'>
      <div className='container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg'
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.url}
                  alt="Image"
                  className='block h-full w-full object-contain'
                  quality={95}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Galleries ; 