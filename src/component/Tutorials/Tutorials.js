import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import VideoTemplate from '../VideoTemplate/VideoTemplate';

const Tutorials = () => {
    // initialize state 
    const [videos,setVideos]=useState([]);
   

     // effect for fetch data 
     useEffect(() => {
         fetch('./tutorials.JSON')
             .then(res => res.json())
             .then(data => setVideos(data));
     }, []);

    return (
        <div>
            <button className="bg-warning text-white mt-5 fs-4 fw-bold border-0 rounded-3 p-2">Total Number of Free  Course in One Video:{videos.length}</button>
            <div className= "row row-cols-1 row-cols-md-2 g-4 container m-auto" >
                    {
                        
                        
                        videos.map(video => <VideoTemplate 
                     
                        key={video.id}
                        video={video}
                        ></VideoTemplate>)
                    }
            </div>            
        </div>
    );
};

export default Tutorials;