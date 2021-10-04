import React from 'react';

const VideoTemplate = (props) => {
    // destructing of service 
    const {link}=props.video;

    return (
        <div>

         
              <iframe width="450" height="315" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    );
};

export default VideoTemplate;