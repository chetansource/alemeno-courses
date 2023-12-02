"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getImages } from "./routes/fetchrequests";

export default function Home() {
  const [images, setImages] = useState([]);

  async function fetchData() {
    const images = await getImages();
    setImages(images);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white h-screen">
      <Navbar />
      <main className="mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {images && images.map((imageUrl, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Link href="">
                <img
                  src={imageUrl}
                  alt={`Course ${index + 1}`}
                  className="w-full h-80 object-cover object-center rounded-lg"
                />
              </Link>
              <div className="p-4 font-black">
                <h2 className="text-xl">course name</h2>
                <div className="text-lg text-gray-700">Teacher</div>
                <div className="flex items-center mt-2">
                  <div className="text-yellow-700 text-lg mr-2">
                    course rating
                  </div>
                  {/* <TickmarkIcon /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
