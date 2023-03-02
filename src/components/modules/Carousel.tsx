import React from 'react';

import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface Props {
  images: {src:string,des:string}[];
}

const MyCarousel: React.FC<Props> = ({ images }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      className="relative"
    >
      {images.map(({src,des}:{src:string,des:string})=> (
        <div key={src} className=" h-[400px] w-full overflow-hidden rounded-lg">
          <img src={src} alt="slide" className="h-full w-full object-cover rounded-lg"/>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;





