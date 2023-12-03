'use client'
import React, { useState } from 'react'

const Dashboard = () => {

    const [enrolledCourses, setEnrolledCourses] = useState([]);


    function handleMarkAsCompleted(id: any): void {
        throw new Error('Function not implemented.');
    }

  return (
      <div>
          <h1>User Dashboard</h1>
          <div>
                  <div  className="course-card">
                      <img src="" alt="" />
                      <div>
                          <h2>coursename</h2>
                          <p>Instructor</p>
                          <p>Due Date</p>
                          <p>Progress</p>
                         
                              <button onClick={() => handleMarkAsCompleted()}>
                                  Mark as Completed
                              </button>
                       
                      </div>
                  </div>
          </div>
      </div>
  )
}

export default Dashboard