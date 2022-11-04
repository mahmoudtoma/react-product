import React from 'react'
import ReactStars from "react-rating-stars-component";

const RatePost = () => {

    const thirdExample = {
        size: 20,
        count: 5,
        isHalf: false,
        value: 4,
        color: "#979797",
        activeColor: "#ffc107",
        onChange: newValue => {
            console.log(`Example 3: new value is ${newValue}`);
        }
    };

    return (
        <div className='rate-post'>
            <div className='rate-post-title'>
                <b>Mahmoud Toma</b>
                <ReactStars {...thirdExample} />
            </div>
            <div className='rate-textarea'>
                <textarea rows="2" cols="50" placeholder='Write Here ....'/>
            </div>
            <div>
                <button className='rate-add-comment'>Add</button>
            </div>
            <hr></hr>
        </div>
    )
}

export default RatePost