"use client";

import Image from "next/image";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

export default function FeaturesBlocks({ motors }: any) {
  console.log(motors);
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore the motorcycle</h2>
            <p className="text-xl text-gray-600">
              Embark on a thrilling journey to discover the perfect ride for
              every adventure at our online motor marketplace. Explore an
              extensive collection of motorcycles tailored to suit your style,
              whether you crave speed, comfort, or the latest in cutting-edge
              technology. Immerse yourself in the excitement of finding your
              dream bike as you navigate through our curated selection. Explore
              the possibilities, find your ideal ride, and start your next
              chapter on the open road with confidence.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {motors.map((motor: any) => (
              <div
                className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
                key={motor.id}
              >
                <Image
                  width={100}
                  height={100}
                  objectPosition="center"
                  alt="Image Motor"
                  src={motor.image||"https://ik.imagekit.io/ku9epk6lrv/vario.png?updatedAt=1703189027013"}
                />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  {motor.brand}
                </h4>
                <p className="text-gray-600 text-center">{motor.model}</p>
                <p className="text-lg">Rp.{motor.price}</p>
              </div>
            ))}
          </div>
          {/* 1st item */}
        </div>
      </div>
    </section>
  );
}
