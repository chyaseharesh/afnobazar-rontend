/* eslint-disable jsx-a11y/alt-text */
'use client';

/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import ShimmerButton from "@/components/ui/shimmer-button";
import { AppleIcon, PlayIcon } from "lucide-react";
import Countdowns from "@/components/FlashSale/Countdown";
import ProductList from "@/components/ProductList/ProductList";
import CategorySlider from "@/components/CategorySlider/CategorySlider";

export default function Home() {


  return (
    <div>
      <Navbar />
      <div className="mx-28 mt-3">
        <div className="flex justify-between gap-3 w-full">
          <div className=" w-[20%]">
            <NeonGradientCard className="max-w-sm items-center justify-center text-center flex">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff7829] from-35% to-[#49038b] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                <img className="mb-2" src="https://img.freepik.com/premium-vector/e-commerce-concept-fast-delivery-by-scooter-mobile_8168-1396.jpg" alt="" />
                <img src="/images/trusted.jpg" className="mb-5" alt="" />
                Download App

                <ShimmerButton className="shadow-2xl w-full bg-[#373b61] mt-2">
                  <span className="flex gap-2 text-center text-white dark:from-white dark:to-[#373b61]">
                    <PlayIcon className="text-sm" />
                    <span className="mt-1 text-sm">Play Store</span>
                  </span>
                </ShimmerButton>

                <ShimmerButton className="shadow-2xl w-full bg-[#373b61] mt-1">
                  <span className="flex gap-2 text-center text-white dark:from-white dark:to-[#373b61]">
                    <AppleIcon className="text-sm" />
                    <span className="mt-1 text-sm">App Store</span>
                  </span>
                </ShimmerButton>
              </span>
            </NeonGradientCard>
          </div>
          <div className="banner w-[80%] bg-gradient-to-br">
            <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={true} showThumbs={false} showArrows={false} showStatus={false}>
              <div className="h-10">
                <img src="/images/pixosoft.jpg" />
              </div>
              <div>
                <img src="/images/online.jpg" />
              </div>
              <div>
                <img src=" /images/online.jpg" />
              </div>
            </Carousel>
          </div>
        </div>
        <Countdowns />


        <div className="mt-3">
          <div className="bg-gray-50 antialiased py-6">
            <ProductList />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex gap-2 text-lg">
            <span className="py-3 px-2 rounded-sm bg-primary"></span>
            <span className=" text-primary font-bold">Categories</span>
          </div>
          <p className="text-4xl text-gray-800 mt-1">
            Browse By Category
          </p>
          <div className="mt-3">
            <CategorySlider />
          </div>
          
        </div>

        <div className="mt-16">
          <div className="flex gap-2 text-lg">
            <span className="py-3 px-2 rounded-sm bg-primary"></span>
            <span className=" text-primary font-bold">This Month</span>
          </div>
          <p className="text-4xl text-gray-800 mt-1">
            Best Selling Products
          </p>
          <div className="mt-3">
            <ProductList />
          </div>
          
        </div>
      </div>
    </div>
  );
}
