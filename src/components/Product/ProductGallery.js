import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import mobile from '../../images/mobile.png'
import mobile1 from '../../images/mobile1.png'
import mobile2 from '../../images/mobile2.png'
import RightImageGallery from './RightImageGallery';
import LeftImageGallery from './LeftImageGallery';

const ProductGallery = () => {
    const images = [
        {
            original: `${mobile}`,
        },
        {
            original: `${mobile1}`,
        },
        {
            original: `${mobile2}`,

        },
    ];

    return (
        <div className='image-gallery'>
            <ImageGallery className='ImageGallery' items={images}
                defaultimage={mobile}
                showFullscreenButton={true}
                showPlayButton={false}
                renderRightNav={RightImageGallery}
                renderLeftNav={LeftImageGallery}
                


            />

        </div>
    )
}

export default ProductGallery