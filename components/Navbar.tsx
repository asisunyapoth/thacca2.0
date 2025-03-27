import { cn } from '../utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuItem = [
        {
            title: 'หน้าหลัก',
            url: '/'
        },
        {
            title: 'โครงการ',
            url: '/project/'
        },
        {
            title: 'ข่าวสาร',
            url: '/news/'
        },
        {
            title: 'บทความ',
            url: '/article/'
        },
        {
            title: 'กรรมการ',
            url: '/committee/'
        },
        {
            title: 'เกี่ยวกับเรา',
            url: '/about/'
        },
        {
            title: 'ติดต่อ',
            url: '/contact/'
        }
    ]

    const menuMobileItem = menuItem;

    useEffect(() => {
        if (isMenuOpen) {
            // document.body.style.overflow = 'hidden';
        } else {
            // document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen, pathname]);



    return (
        <header>
            <nav className='lg:max-w-[90vw] mx-auto'>
                <div className="lg:flex justify-between items-center p-4">
                    <div className='flex justify-between items-center'>
                        <Link href="/" >
                            <img src="/image/logo.png" className='w-[134px] h-[36px]' alt="" />
                        </Link>
                        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16"}></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex mt-4 lg:mt-0" >
                        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 ">
                            {menuItem.map((item, index) => (
                                <li key={index} className={cn('cursor-pointer pb-2', pathname === item.url ? 'border-b-4 border-main' : '')}>
                                    <Link className="text-md" href={item.url} onClick={() => setIsMenuOpen(false)}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`flex items-center justify-center mt-3 p-8 h-[85vh] bg-[#F2F1ED] lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col justify-center space-y-8 text-center">
                        {menuMobileItem.map((item, index) => (
                            <>
                                <li key={index} onClick={() => setIsMenuOpen(false)} className={cn('cursor-pointer pb-2 mx-auto  w-full', pathname === item.url ? 'text-main' : '')}>
                                    <Link className="text-[1.4rem]" href={item.url} >{item.title}</Link>
                                </li>
                                {([0, 1, 2, 3, 4, 5]).includes(index) && <div className="border-b-2 border-[#DBDAD5] w-[50vw] mx-auto"></div>}
                                {([6]).includes(index) && <div className="w-[50vw] mx-auto"></div>}
                            </>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;