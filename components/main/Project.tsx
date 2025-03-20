import Image from 'next/image'
import React, { useState } from 'react'
import { Star } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import Link from 'next/link';
import { url } from 'inspector';

const Project = () => {
    const [color, setColor] = useState('black'); // Set default color

    const handleColor = (color: string) => {
        setColor(color)
    }

    const Project = [
        {
            id: 1,
            title: "Thailand Summer Festivals 2025",
            detail: "7 Months 7 Wonders Summer Festivals” ครอบคลุม 7 หมวดหมู่ ได้แก่ สงกรานต์, Pride...",
            url: "https://thacca.go.th/news/2025-03-03-07-13-56/",
            image: "/image/project/Project-Template-03.jpg"
        },
        {
            id: 2,
            title: "Fashion InStyle 2025",
            detail: "THACCA-Thailand Creative Culture Agency ของแสดงความยินดีกับ 20 บริษัท ",
            url: "https://thacca.go.th/news/2025-03-10-04-09-36/",
            image: "/image/project/Project-Template-05.jpg"
        },
        {
            id: 3,
            title: "Global Soft Power Talks 2025",
            detail: "ภาพบรรยากาศงาน Global Soft Power Talks 2025: The New Rules of Soft Power",
            url: "https://thacca.go.th/news/2025-03-03-06-58-00/",
            image: "/image/project/Project-Template-01.jpg"
        },
        {
            id: 4,
            title: "Gamescom Asia",
            detail: "Gamescom Asia ผนึก Thailand Game Show ย้ายงานเกมที่ใหญ่ที่สุดในเอเชียจากสิงคโปร์...",
            url: "https://thacca.go.th/news/2025-03-03-04-24-16/",
            image: "/image/project/Project-Template-06.jpg"
        },
        {
            id: 5,
            title: "Muaythai World Festival 2025 ",
            detail: "Muaythai World Festival 2025 จัดขึ้นภายใต้แนวคิด “มหัศจรรย์มวยไทยแห่งสยามสู่ที่สุดของการต่อสู้...",
            url: "https://thacca.go.th/news/2025-02-06-06-20-43/",
            image: "/image/project/Project-Template-02.jpg"
        },
        {
            id: 6,
            title: "OFOS การอบรม “Design Thinking for Festival Specialist",
            url: "https://thacca.go.th/news/2025-02-07-08-28-45/",
            detail: "ภาพบรรยากาศการอบรมเชิงปฏิบัติการ",
            image: "/image/project/Project-Template-04.jpg"
        },
    ]

    return (
        <div className=" bg-main1 ">
            <div className="lg:max-w-[90vw]  mx-auto lg:py-[5%] py-[15%] lg:px-2 px-6 ">
                <div className="p-5 text-center border-[0.5px] border-b-0 border-white">
                    <h1 className='text-[42px] font-bold text-white'>โครงการ</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {Project.map((item, index) => (
                        <ProjectCard key={index} index={Number(index)} item={item} />
                    ))}
                </div>
                <div className="h-[104px] flex justify-center items-center border-[0.5px]  border-t-0 border-white">
                    <Link href={'/project'} className="flex justify-center">
                        <div className="text-mini btn btn border-[3px] border-white text-white px-[50px] py-2 w-fit">
                            ดูทั้งหมด
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project