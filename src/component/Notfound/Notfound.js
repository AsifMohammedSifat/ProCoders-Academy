import React from 'react';

const Notfound = () => {
    return (
        <div>
            {/* not found text+gif added  */}
            <h1 className="text-danger w-50 m-auto rounded-3 mt-5 bg-warning">Sorry!!No Result Found</h1>
            <img className="w-75 img-fluid" src="https://www.worldwidejournals.com/paripex/images/404-error.gif" alt="" />
        </div>
    );
};

export default Notfound;