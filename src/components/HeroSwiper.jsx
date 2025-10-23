import React, { useEffect, useRef } from 'react';

const HeroSwiper = () => {
    const swiperRef = useRef(null);
    const swiperInstance = useRef(null);

    useEffect(() => {
        // Dynamically load Swiper CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.head.appendChild(link);

        // Dynamically load Swiper JS
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.onload = () => {
            // Initialize Swiper after script loads
            swiperInstance.current = new window.Swiper(swiperRef.current, {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        };
        document.body.appendChild(script);

        return () => {
            if (swiperInstance.current) {
                swiperInstance.current.destroy();
            }
        };
    }, []);

    const slides = [
        {
            title: "Nurture Your Sanctuary",
            subtitle: "Green Living, Every Season",
            image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=1200&q=80"
        },
        {
            title: "Transform Your Space",
            subtitle: "Bring Nature Indoors",
            image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=1200&q=80"
        },
        {
            title: "Fresh & Vibrant",
            subtitle: "Plants That Thrive",
            image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1200&q=80"
        }
    ];

    return (
        <div className="relative">
            <div ref={swiperRef} className="swiper h-[500px]">
                <div className="swiper-wrapper">
                    {slides.map((slide, index) => (
                        <div key={index} className="swiper-slide">
                            <div 
                                className="relative h-full w-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`
                                }}
                            >
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl lg:text-2xl text-center mb-8">
                                        {slide.subtitle}
                                    </p>
                                    <button className="bg-white text-gray-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="swiper-pagination"></div>
                
                <div className="swiper-button-prev text-white"></div>
                <div className="swiper-button-next text-white"></div>
            </div>

            <style>{`
                .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: white;
                }
                .swiper-button-prev,
                .swiper-button-next {
                    color: white;
                }
                .swiper-button-prev:after,
                .swiper-button-next:after {
                    font-size: 30px;
                }
            `}</style>
        </div>
    );
};

export default HeroSwiper;