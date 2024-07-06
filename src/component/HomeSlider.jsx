import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Keyboard, Scrollbar, Navigation, Autoplay } from 'swiper/modules';
import useWindowDimensions from '../common/WindowDimensions';
import { Home_Slider1, Home_Slider2, Home_Slider3, Home_Slider4, Home_Slider5 } from '../assets';

export default function HomeSlider() {
    const { height } = useWindowDimensions();
    const images = [
        { src: Home_Slider1, order: 3 },
        { src: Home_Slider2, order: 1 },
        { src: Home_Slider3, order: 2 },
        { src: Home_Slider4, order: 5 },
        { src: Home_Slider5, order: 4 },
    ];

    const sortedImages = images.sort((a, b) => a.order - b.order);

    return (
        <Swiper
            slidesPerView={1}
            centeredSlides={true}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
                enabled: true,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                769: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            }}
            scrollbar={{ draggable: true }}
            navigation={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Autoplay]}
            className="mySwiper relative"
        >
            {sortedImages.map((image, index) => (
                <SwiperSlide key={index} className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-800 opacity-100"></div>
                    <img src={image.src} alt={`Slide ${index + 1}`} style={{ height: height }} className='w-full object-cover' />
                   
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
