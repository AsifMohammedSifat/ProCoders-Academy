import React from 'react';

import './VideoTemplate.css';

const VideoTemplate = (props) => {
    // destructing of service 
    const {link,name}=props.video;
   

    return (
        <div>
              {/* cards of vidoe card section  */}
            <div className="card video-card video-style ">
                <div className="card-body">

                    {/* video template iframe*/}
                
                    <iframe className="rounded-3" width="400" height="315" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    {/* language name  */}
                    <h5 className="card-title">Learn <span className="card-value">{name}</span> Programming in 1 Video </h5>
                
                </div>
            </div>

        </div>
    );
};

export default VideoTemplate;