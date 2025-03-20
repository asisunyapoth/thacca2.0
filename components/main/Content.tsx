import Image from 'next/image'
import React, { useState } from 'react'

const Content = () => {
    return (
        <div className="lg:max-w-[90vw] mx-auto p-2 py-[3%]">
            <div className="border border-white">
                <div className="mt-4 lg:h-[650px] md:h-[450px] h-[250px]">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/ooL8X5cvCnc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Content