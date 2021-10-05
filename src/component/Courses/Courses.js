import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
   
    // initialize state 
    const [courses,setCourse]=useState([{id:" ",name:" ",img:" ",price:" "}]);

     // effect of fetch data 
     useEffect(() => {
         fetch('./courses.JSON')
             .then(res => res.json())
             .then(data => setCourse(data));
     }, []);
    return (
        <div>
            {/* button to count total reesult  */}
            <button className="bg-warning text-white mt-5 fs-4 fw-bold border-0 rounded-3 p-2">Total Number of Course is:{courses.length}</button>
            {/* grid course-card-group container  */}
            <div className= "row row-cols-1 row-cols-md-2 g-4 container m-auto" >
                    {
                        
                        courses.map(course =><SingleCourse                         
                        key={course.id}                                          
                        course={course} 
                        ></SingleCourse>)
                    }
            </div>            
        </div>
    );
};

export default Courses;