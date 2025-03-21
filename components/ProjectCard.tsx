import { cn } from '../utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NewItem {
    id: number;
    title: string;
    url: string;
    detail: string;
    image: string;
}

const ProjectCard = ({ index, item }: { index: number, item: NewItem }) => {
    return (
        <Link key={index} href={item.url} className={cn("w-full text-white")}>
            <Image src={item.image} width={350} height={250} className='w-full' alt={item.title} />
            <div className={cn("py-[40px] px-4 border-[0.5px] lg:border-0 lg:border-l-[0.5px] lg:border-b-[0.5px]  md:h-[200px] lg:h-[200px] my-auto",{
                'lg:border-r-[0.5px]': index === 2 || index === 5 ,
            })}>
                <p className='text-title mb-1'>{item.title}</p>
                <p className='text-detail' >{item.detail}</p>
            </div>
        </Link>

    );
};

export default ProjectCard;