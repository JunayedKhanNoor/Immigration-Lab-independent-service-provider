import React from 'react';
import error from "../../../Images/Banner/error.jpg"
const NotFound = () => {
    return (
        <div  className="d-flex justify-content-center">
            <img style={{maxHeight:'900px'}} className='img-fluid' src={error} alt="" />
        </div>
    );
};

export default NotFound;