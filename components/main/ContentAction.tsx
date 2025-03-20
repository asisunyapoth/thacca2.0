import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
const ContentAction = () => {
    return (
        <div className=" lg:max-w-[90vw] mx-auto   px-2">
            <div className="bg-content flex items-center justify-center">
                <div className="text-center mx-auto p-8 space-y-3">
                    <Image src={'/icon/ofos.svg'} width={300} height={300} className='mx-auto w-[120px] lg:w-[220px]' alt='' />
                    <p className='lg:text-lg text-title'>เรียนฟรี! พัฒนาทักษะ <br /> สร้างโอกาสสู่รายได้</p>
                    <p className='text-main'>#OneFamilyOneSoftPower  #THACCAacademy </p>
                    <Link href="https://ofos.thacca.go.th/auth/login" className="flex justify-center">
                        <div className="btn btn bg-main text-white px-[50px] py-[15px] w-fit">
                            สมัครเลยวันนี้
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContentAction