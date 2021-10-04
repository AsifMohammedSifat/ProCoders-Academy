import React from 'react';
import './SingleCourse.css';

const SingleCourse = (props) => {
    // destructing of service 
    const {img,name,price}=props.course;

    return (
        <div>

            {/* data pass by card  */}
            <div className="card card-style ">
            <img src={img} className="card-img-top w-25 mx-auto" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Learn <span className="card-value">{name}</span> Programming </h5>
                <h5 className="card-text">Price: <span className="card-value">{price}$</span></h5>
               
            </div>

            {/* enroll button of card  */}
            <div className="card-footer">
                 <a href="#enroll" className="btn btn-warning text-white fw-bold">Enroll Now</a>
            </div>
            </div>
        </div>
    );
};

export default SingleCourse;