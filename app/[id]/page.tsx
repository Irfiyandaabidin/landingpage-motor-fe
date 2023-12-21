"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface IParam {
  params: {
    id: number;
  };
}
const Page = ({ params }: IParam) => {
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<number | null>(0);
  const [price, setPrice] = useState<number | null>(0);
  const id = params.id;
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/login");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/motor/${id}`,
        {
          brand,
          model,
          year,
          price,
        }
      );
      if (response.status == 200) {
        alert("Success update");
        router.push("/dashboard");
      } else {
        alert(response.data.status);
      }
    } catch (error) {
      console.log("catch");
    }
  };

  const getData = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/motor/${id}`
    );
    setBrand(response.data.data.motor.brand);
    setYear(response.data.data.motor.year);
    setPrice(response.data.data.motor.price);
    setModel(response.data.data.motor.model);
  };

  useEffect(() => {
    getData();
  }, []);
  if (!session) router.push("/login");
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <h2 className="font-semibold text-xl text-gray-600">
                  Update Data Motor
                </h2>
                <p className="text-gray-500 mb-6">
                  Form update data motor for sale.
                </p>
                <p className="font-medium text-lg">Motor Details</p>
                <p>Please fill out all the fields.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="brand">Brand</label>
                      <input
                        type="text"
                        name="brand"
                        id="brand"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder="Honda"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="model">Model</label>
                      <input
                        type="text"
                        name="model"
                        id="model"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="SupraX125"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="year">Year</label>
                      <input
                        type="number"
                        name="year"
                        id="year"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={Number(year)}
                        onChange={(e) => setYear(Number(e.target.value))}
                        placeholder="2022"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={Number(price)}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        placeholder="20000000"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-green-500 p-2 rounded-md text-lime-100"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
