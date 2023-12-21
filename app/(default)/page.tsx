'use client'

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@/components/ui/header";

export default function Home() {
  const [data, setData] = useState<IMotor[]>([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/motor")
    setData(response.data.data.motors)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <Header/>
      <Hero />
      <Features />
      <FeaturesBlocks motors={data} />
      <Testimonials/>
      <Newsletter/>
    </>
  );
}
