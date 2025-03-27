"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

const mockHero = [
    {
        title: `รับชมย้อนหลัง  เวทีแสดงวิสัยทัศน์ Global Soft Power Talks 2025 : <br> “The New Rules of Soft Power” กับ 5 กูรูผู้เชี่ยวชาญซอฟต์พาวเวอร์ 5 ด้าน และ <br> ปาฐกถาพิเศษ โดย น.ส.แพทองธาร ชินวัตร นายกรัฐมนตรี`,
        detail: ``,
        url: '/article/2025-03-03-04-56-38/',
        image: "/image/banner/04-Banner.jpg"
    },
    {
        title: "ปลดล็อกกฎหมายสำเร็จไปอีกขั้น   เทศกาลภาพยนตร์ระหว่างประเทศ ฉายหนังไม่ต้องผ่านกองเซนเซอร์",
        detail: ``,
        url: '/news/2025-02-13-04-47-00/',
        image: "/image/banner/01-Banner.jpg"
    },
    {
        title: `THACCA - Thailand Creative Culture Agency คือ องค์กรผู้นำการขับเคลื่อนซอฟต์พาวเวอร์ไทย ผ่านการฝึกอบรมทักษะสร้างสรรค์ พัฒนาระบบนิเวศและโครงสร้างพื้นฐานอุตสาหกรรม  พร้อมยกระดับสินค้า-บริการจากวัฒนธรรมไทยสู่เวทีโลก`,
        detail: ``,
        url: '/news/2025-02-03-09-31-46/',
        image: "/image/banner/03-Banner.jpg"
    },
    {
        title: "หนึ่งครอบครัว หนึ่งซอฟต์พาวเวอร์ (One Family One Soft Power - OFOS) <br> การ Upskill/ Reskill  20  ล้านคน ภายในปี 2570  เพื่อให้คนไทยทุกคนพ้นจากความยากจน",
        detail: ``,
        url: 'https://ofos.thacca.go.th/course/Food',
        image: "/image/banner/02-Banner.jpg"
    },

];

const Hero = () => {
    return (
        <div className="lg:max-w-[90vw] mx-auto p-2">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 6000 }}
                // navigation={true}
                pagination={{ el: ".custom-pagination", clickable: true }}
            >
                {mockHero.map((item, index) => (
                    <SwiperSlide key={index} className="mx-auto text-center border-[0.5px] border-black">
                        <Link href={item.url}>
                            <Image src={item.image} width={350} height={150} alt="Background" className="w-full " />
                            <div className="border-t border-gray-300 py-8 p-3 h-[350px] md:h-[220px]  lg:h-[200px] flex justify-center items-center">
                                <div className="text-title tracking-wide p-4" dangerouslySetInnerHTML={{ __html: item.title }} />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination Dots Below */}
            <div className="custom-pagination my-5 flex justify-center">
                <span className="swiper-pagination-bullet"></span>
            </div>
        </div>
    );
};

export default Hero;
