/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Marquee from "@/components/ui/marquee";
const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const CategorySlider = () => {
    return (
        <div className="relative w-full justify-center overflow-hidden border">
            <Marquee pauseOnHover className="[--duration:15s]">
                {firstRow.map((review, index) => (
                    //   <ReviewCard key={review.username} {...review} />
                    <div key={index} className="relative flex flex-col text-gray-800 bg-white border rounded-lg w-56">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-lg h-40">
                            <img
                                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                                alt="card-image" className="object-cover w-full h-full" />
                        </div>
                        <div className="pt-3">
                            <div className="text-center mb-2">
                                <p className="block font-sans text-base antialiased leading-relaxed">
                                    Apple AirPods
                                </p>

                            </div>
                        </div>

                    </div>
                ))}
            </Marquee>
            {/* 
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
        </div>
    )
}

export default CategorySlider