import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.scss"

interface SlideProps {
    title: string;
    content: string;
}

const Slide = ({ title, content }: SlideProps) => {
  return (
    <div className='slide'>
        <p className='slide__title'>{title}</p>
        <p className='slide__content'>{content}</p>
    </div>
  )
}

export default Slide