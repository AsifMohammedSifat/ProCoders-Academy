import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Main.css';

const Main = () => {
    // initialize state 
    const [courses,setCourse]=useState([]);

     // effect for fetch data 
     useEffect(() => {
         fetch('./courses.JSON')
             .then(res => res.json())
             .then(data => setCourse(data));
     }, []);

    return (
        <div>
            <div className= "row row-cols-1 row-cols-md-2 g-4 container m-auto" >
                    {
                        
                        courses.slice(0,4).map(course => <SingleCourse 
                        key={course.id}
                        course={course}
                        ></SingleCourse>)
                    }
            </div>            
        </div>
    );
};

export default Main;