import { cn } from '../utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItem = [
    {
      title: 'ข้อตกลงและเงื่อนไข',
      url: '/'
    },
    {
      title: 'นโยบายความเป็นส่วนตัว',
      url: '/project/'
    },
    {
      title: 'สงวนลิขสิทธิ์สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) (สพร.)',
      url: '/news/'
    }
  ];

  const socialItem = [
    {
      title: 'facebook',
      icon: '/icon/facebook.png',
      url: '/'
    },
    {
      title: 'x',
      icon: '/icon/x.png',
      url: '/'
    },
    {
      title: 'youtube',
      icon: '/icon/youtube.png',
      url: '/'
    },
    {
      title: 'instagram',
      icon: '/icon/instagram.png',
      url: '/'
    }

  ]

  const pathname = usePathname();

  return (
    <div>
      <nav className='lg:max-w-[90vw] mx-auto   px-2 py-4'>
        <div className="lg:flex justify-between items-center ">
          <div className='flex justify-between items-center gap-4 max-w-[180px] lg:max-w-[240px] mx-auto lg:mx-0' >
            {socialItem.map((item, index) => (
              <div key={index}>
                <Link href={item.url} >
                  <img src={item.icon} className='w-[32px] h-[32px]' alt="" />
                </Link>
              </div>
            ))}
          </div>
          <div className={`lg:flex mt-4 lg:mt-0`}>
            <ul className="flex  justify-center lg:space-x-8 mx-auto w-full">
              {menuItem.map((item, index) => (
                <li key={index} className={cn('cursor-pointer pb-2', {
                  'hidden lg:block': index == 2
                })}>
                  <Link className="nav-link text-secoundary" href={item.url} >{item.title}</Link>
                </li>

              ))}

            </ul>
            <p className='lg:hidden block text-center mt-2'>
              สงวนลิขสิทธิ์ <br /> สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) (สพร.)
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;