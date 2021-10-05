import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Main.css';

const Main = () => {
    // initialize state 
    const [courses,setCourse]=useState([{id:" ",name:" ",img:" ",price:" "}]);

     // effect of fetch data 
     useEffect(() => {
         fetch('./courses.JSON')
             .then(res => res.json())
             .then(data => setCourse(data.slice(0,4)));
     }, []);

    return (
        <div>
            {/* home->main section card container grid */}
            <div className= "row row-cols-1 row-cols-md-2 g-4 container m-auto" >
                    {
                        
                        courses.map(course => <SingleCourse 
                        key={course.id}                      
                        course={course}
                        ></SingleCourse>)
                    }
            </div>            
        </div>
    );
};

export default Main;