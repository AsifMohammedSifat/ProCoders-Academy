import React from 'react';
import './HomeHeader.css';

const Head = () => {
    return (
        <div>

            {/* header banner section  */}
             <div className="card my-3 container card-style h-100" >
                    <div className="row g-0">
                        {/* banner left image  */}
                        <div className="col-md-8">
                        <img src="https://th.bing.com/th/id/R.86598b0bb5f153533e62f91c4a0f7b62?rik=ZGBkSLsjPILu9g&riu=http%3a%2f%2fredbackstudios.in%2fimages%2fcontent%2frb-web-development.png&ehk=mvcso8G9bZVwLv%2b6BB5hEN3IwdRLs62I8g2W5XiOO1w%3d&risl=&pid=ImgRaw&r=0" className="rounded-start w-100" alt="..."/>
                        </div>

                        {/*home-headers banner right text  */}
                        <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title"> Welcome to <br /><span className="banner-brand">ProCoders Academy</span> </h5>
                            <p className="card-text">Here we provide premium courses.You can learn easily here.Cause We much take care.</p>
                           <h3 className="text-dark fw-bold">Happy Coding!!</h3>
                           <div>
                                 <img className="w-75 img-fluid" src="https://th.bing.com/th/id/R.b17a62fbee908890cf56393b9c25ccb8?rik=t3x%2f%2fUuaHG55RQ&pid=ImgRaw&r=0" alt="" />
                           </div>
                         
                        </div>
                        </div>
                    </div>
            </div>
            
        </div>
    );
};

export default Head;