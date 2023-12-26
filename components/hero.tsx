import ModalImage from '@/public/images/metrobg.png'
import BuyImage from '@/public/images/illustration_buy.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Find Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Motorcyle</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Change your motorbike buying experience!</p>
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Click below for a hassle-free motorbike offer!</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                  <Link className="btn mx-3 text-white bg-blue-600 hover:bg-blue-800 shadow" href="https://wa.link/pu1wtu">Contact</Link>
                  <Link className="btn text-white bg-green-400 hover:bg-green-600 shadow" href="https://maps.app.goo.gl/rFhfDWuSKUtokW3P9">Location</Link>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative w-full h-96 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
              src={ModalImage}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>

      </div>

      <div className="pt-32 mb-24 sm:mb-1 md:pt-40 md:pb-3">
          {/* Section header */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Metro Motor</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Welcome to Metro Motor! I, the driving force behind our automotive passion, lead our exclusive journey. Metro Motor is more than just a vehicle seller; we offer an</p>
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150"> unparalleled driving experience. With our special collection, bring an unforgettable lifestyle. Join the Metro Motor community, where each vehicle reflects excellence and inspiration. Discover your dream vehicle, enjoy comfort, and experience every moment on the road with Metro Motor!</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative w-ful items-center flex justify-center">
            <Image
              src={BuyImage}
              alt="Hero Image"
              width={400}
              height={400}
            />
          </div>
        </div>
    </section>
  )
}