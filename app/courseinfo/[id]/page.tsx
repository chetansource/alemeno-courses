'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import { usePathname } from 'next/navigation';

const CourseInfo = () => {

  const pathname = usePathname();
  const parts = pathname.split("/");
  const id = parts[parts.length - 1];

  return (
    <div className="bg-white h-screen">
      <Navbar />
      <main className="mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h1 className="text-3xl font-bold mb-4">CourseName</h1>
          <div className="p-4 font-black">
            <p>Instructor</p>
            <p>Description</p>
            <p>Enrollment Status</p>
            <p>Duration</p>
            <p>Schedule</p>
            <p>Location</p>
            <p>Pre-requisites</p>
            <details>
              <summary>Syllabus</summary>
              <p>syllabus</p>
            </details>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CourseInfo