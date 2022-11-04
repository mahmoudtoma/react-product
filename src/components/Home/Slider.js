import React, { useState } from 'react'
import { NavBar, Container, FormControl, Nav, Carousel } from 'react-bootstrap'
import slider11 from '../../images/slider11.PNG'
import slider2 from '../../images/slider2.PNG'
import slider3 from '../../images/slider3.PNG'
const Slider = () => {
    const [index, setindex] = useState(0)
    const handleSelect = (selectedindex) => {
        setindex(selectedindex)
    }
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="dd">
                    <img
                        className="d-block w-100 dd"
                        src={slider11}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="dd">
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="dd">
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default Slider